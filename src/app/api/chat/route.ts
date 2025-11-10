import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'
import { generateInitialPrompt } from '@/lib/prompts'

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not set in environment variables')
}

const genAI = new GoogleGenerativeAI(apiKey)

// Store chat sessions in memory (in production, use a database)
const chatSessions = new Map()

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Get or create chat session
    let chat = chatSessions.get(sessionId)
    
    if (!chat) {
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.5-flash-lite' 
      })
      
      chat = model.startChat({
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        },
      })
      
      // Send initial system prompt
      await chat.sendMessage(generateInitialPrompt())
      chatSessions.set(sessionId, chat)
    }

    // Send user message and get response
    const result = await chat.sendMessage(message)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
