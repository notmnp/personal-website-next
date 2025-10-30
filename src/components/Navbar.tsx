"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Hamburger from 'hamburger-react'
import Image from 'next/image'

interface NavItem {
  href: string
  label: string
  external?: boolean
}

const navItems: NavItem[] = [
  { href: '#about', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
]

function NavLink({ href, label, external = false, onClick }: NavItem & { onClick?: () => void }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const checkActive = () => {
      let targetElement: HTMLElement | null = null
      const targetId = href.replace('#', '')
      
      switch (targetId) {
        case 'about':
          targetElement = document.querySelector('section')
          break
        case 'experience':
          targetElement = document.querySelector('section:nth-of-type(2)')
          break
        case 'projects':
          targetElement = document.querySelector('section:nth-of-type(3)')
          break
        case 'contact':
          targetElement = document.querySelector('footer')
          break
      }

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        setIsActive(rect.top <= 100 && rect.bottom >= 100)
      }
    }

    window.addEventListener('scroll', checkActive)
    checkActive()
    return () => window.removeEventListener('scroll', checkActive)
  }, [href])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }

    // Scroll to section
    const targetId = href.replace('#', '')
    let targetElement: HTMLElement | null = null

    switch (targetId) {
      case 'about':
        targetElement = document.querySelector('section')
        break
      case 'experience':
        targetElement = document.querySelector('section:nth-of-type(2)')
        break
      case 'projects':
        targetElement = document.querySelector('section:nth-of-type(3)')
        break
      case 'contact':
        targetElement = document.querySelector('footer')
        break
    }

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 120
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 transition-none group"
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-200 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </a>
  )
}

export function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const logoSrc = theme === 'dark' ? '/logo_mp.svg' : '/logo_mp_dark.svg'

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] transition-[transform] duration-300 animate-in slide-in-from-top-full duration-1500 ease-out ${
        'bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 shadow-sm' 
      } rounded-[2rem] w-[95vw] max-w-5xl`}>
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105 relative z-[10001]"
            >
              <Image 
                src={logoSrc} 
                alt="Logo" 
                width={28}
                height={28}
                className="h-7 w-auto transition-opacity duration-200" 
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>
              
              <div className="h-6 w-px bg-border/50 dark:bg-white/10" />
              
              <ModeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-[10001]">
              <Hamburger
                size={20}
                color={theme === 'dark' ? 'white' : '#374151'}
                rounded
                duration={0.3}
                distance="md"
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile menu panel */}
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9999] bg-background/70 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 shadow-sm rounded-[2rem] w-[90vw] max-w-md md:hidden">
            <div className="p-6">
              {/* Navigation links */}
              <nav className="mb-6">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.href} className="block">
                      <NavLink {...item} onClick={() => setIsMobileMenuOpen(false)} />
                    </div>
                  ))}
                </div>
              </nav>
              
              {/* Footer with theme toggle */}
              <div className="pt-4 border-t border-border/50 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
