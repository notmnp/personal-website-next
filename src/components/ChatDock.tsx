"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'bot'
  content: string
}

export const ChatDock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => Math.random().toString(36).substring(7))
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim()) return

    if (!isExpanded) {
      setIsExpanded(true)
    }

    setMessages(prev => [...prev, { role: 'user', content: input }])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          sessionId,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages(prev => [...prev, { role: 'bot', content: data.response }])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' }])
    }

    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
    if (e.key === 'Escape') {
      setIsExpanded(false)
      setInput('')
    }
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  const handleInputDoubleClick = () => {
    if (!isExpanded && messages.length > 0) {
      setIsExpanded(true)
    }
  }

  return (
    <>
      <style>
        {`
          @keyframes breathe {
            0%, 100% { 
              transform: scale(0.95);
            }
            50% { 
              transform: scale(1.05);
            }
          }
          .breathing-circle {
            will-change: transform;
          }
        `}
      </style>
      
      {/* Bottom gradient shadow */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 h-[calc(1.5rem+2.5rem)] pointer-events-none z-40 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent" />
      
      <div className={cn(
        "hidden md:flex",
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "bg-background/70 dark:bg-background/20 backdrop-blur-3xl",
        "border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm",
        "flex-col",
        isExpanded && "transition-[width,height] duration-500 ease-out",
        "w-[95vw] max-w-5xl md:max-w-2xl",
        isExpanded 
          ? "h-[85vh] max-h-[600px]" 
          : "h-20"
      )}>
      
        {/* Header with close button - only when expanded */}
        {isExpanded && (
          <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-border/50 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0078D4_0%,rgba(0,120,212,0.3)_50%,transparent_100%)] rounded-full opacity-50 blur-sm animate-pulse" />
                <div className="breathing-circle relative w-4 h-4 bg-[#0078D4] rounded-full" style={{
                  animation: 'breathe 3s ease-in-out infinite'
                }} />
              </div>
              <div>
                <h2 className="font-medium text-sm text-foreground/90">Chat with Milan</h2>
                <p className="text-xs text-muted-foreground/70">Powered by Google</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-8 w-8 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-none"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Messages area - scrollable */}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {messages.length === 0 && !isLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="relative mx-auto w-12 h-12">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#0078D4_0%,rgba(0,120,212,0.3)_50%,transparent_100%)] opacity-40 blur-sm animate-pulse" />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <div className="breathing-circle w-6 h-6 bg-[#0078D4] rounded-full" style={{
                        animation: 'breathe 3s ease-in-out infinite'
                      }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#0078D4] via-[#2B88D8] to-[#0078D4] bg-clip-text text-transparent">
                      Let&apos;s chat!
                    </h3>
                    <p className="text-sm text-muted-foreground/70">
                      Ask me anything about my background or interests
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                      message.role === 'user' && "flex-row-reverse"
                    )}
                  >
                    <div
                      className={cn(
                        "px-4 py-3 max-w-[85%] rounded-2xl text-sm",
                        message.role === 'user'
                          ? "bg-[#0078D4] text-white rounded-br-md"
                          : "bg-muted/100 dark:bg-white/10 rounded-bl-md border border-border/30 dark:border-white/5"
                      )}
                    >
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {message.content}
                      </pre>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-muted/50 dark:bg-white/10 backdrop-blur-sm border border-border/30 dark:border-white/5">
                      <div className="flex items-center gap-2 h-5">
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite]" />
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite_0.2s]" />
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-[bounce_1.4s_ease-in-out_infinite_0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        )}

        {/* Input area - always at bottom, never moves */}
        <div className={cn(
          "flex-shrink-0 p-4 h-20",
          isExpanded && "border-t border-border/50 dark:border-white/5"
        )}>
          <div className={cn(
            "relative flex items-center h-full",
            !isExpanded && "justify-center"
          )}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onDoubleClick={handleInputDoubleClick}
              placeholder="Ask me anything..."
              className={cn(
                "w-full px-4 pr-12 rounded-full transition-none",
                "bg-muted/30 dark:bg-white/5",
                "border border-border/50 dark:border-white/10",
                "text-foreground placeholder:text-muted-foreground/60",
                "focus:outline-none focus:ring-2 focus:ring-[#0078D4]/50 focus:border-transparent",
                "h-12 text-base"
              )}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="icon"
              className={cn(
                "absolute right-2 top-1/2 transform -translate-y-1/2",
                "bg-[#0078D4] hover:bg-[#006CBE] transition-transform duration-200 active:scale-95",
                "disabled:opacity-50 h-8 w-8 rounded-full",
                "cursor-pointer disabled:cursor-not-allowed transition-none"
              )}
            >
              <ArrowUp className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
