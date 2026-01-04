import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'
import { generateInitialPrompt } from '@/lib/prompts'

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not set in environment variables')
}

const genAI = new GoogleGenerativeAI(apiKey)

// Store chat sessions and message timestamps
const chatSessions = new Map()
const messageTimestamps = new Map<string, number[]>()

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Rate limiting: max 10 messages per minute
    const now = Date.now()
    const timestamps = messageTimestamps.get(sessionId) || []
    const recentMessages = timestamps.filter(time => now - time < 60000) // Last minute
    
    if (recentMessages.length >= 10) {
      return NextResponse.json(
        { error: "Stop spamming! I only have so many free API calls 💀" },
        { status: 429 }
      )
    }
    
    recentMessages.push(now)
    messageTimestamps.set(sessionId, recentMessages)

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
  } catch (error: any) {
    console.error('Chat API error:', error)
    
    // Check if it's a Gemini API quota error
    if (error.status === 429 || error.statusText === 'Too Many Requests') {
      return NextResponse.json(
        { error: "I've reached my daily chat limit! Check back tomorrow or feel free to reach out to Milan directly via email, X, or LinkedIn 😅" },
        { status: 429 }
      )
    }
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to process chat message'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
