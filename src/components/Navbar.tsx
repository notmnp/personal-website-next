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

function NavLink({ href, label, external = false, onClick, activeSection }: NavItem & { onClick?: () => void, activeSection: string }) {
  const targetId = href.replace('#', '')
  const isActive = activeSection === targetId

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
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkActiveSection = () => {
      const sections = [
        { id: 'about', element: document.querySelector('section') },
        { id: 'experience', element: document.querySelector('section:nth-of-type(2)') },
        { id: 'projects', element: document.querySelector('section:nth-of-type(3)') },
      ]

      let closestSection = 'about'
      let closestDistance = Infinity

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top - 120)
          
          if (rect.top <= 120 && rect.bottom >= 120 && distance < closestDistance) {
            closestDistance = distance
            closestSection = id
          }
        }
      })

      setActiveSection(closestSection)
    }

    window.addEventListener('scroll', checkActiveSection)
    checkActiveSection()
    return () => window.removeEventListener('scroll', checkActiveSection)
  }, [])

  if (!mounted) return null

  const logoSrc = theme === 'light' ? '/logo_mp_dark.svg' : '/logo_mp.svg'

  return (
    <>
      {/* Top gradient shadow */}
      <div className="fixed top-0 left-0 right-0 h-[calc(1rem+2rem+2rem)] pointer-events-none z-[9999] bg-gradient-to-b from-white/60 dark:from-black/60 to-transparent" />
      
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
                  <NavLink key={item.href} {...item} activeSection={activeSection} />
                ))}
              </nav>
              
              <div className="h-6 w-px bg-border/50 dark:bg-white/10" />
              
              <ModeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-[10001]">
              <Hamburger
                size={20}
                color={theme === 'light' ? '#374151' : 'white'}
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
                      <NavLink {...item} onClick={() => setIsMobileMenuOpen(false)} activeSection={activeSection} />
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
