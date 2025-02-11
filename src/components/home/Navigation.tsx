import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import RSVPDialog, { RSVPResponse } from "./RSVPDialog"

// Types
type NavigationItem = [id: string, text: string]

interface NavigationButtonProps {
  id: string
  text: string
  isActive: boolean
  onClick: (id: string) => void
}

interface GFForm {
  cssClass: string | null
  databaseId: number
  dateCreated: string
  formFields: {
    nodes: Array<{
      databaseId: number
      type: string
      label: string
      isRequired: boolean
      description: string | null
      choices?: Array<{
        text: string
        value: string
      }>
    }>
  }
  pagination: unknown | null
  title: string
}

interface NavigationProps {
  gfForm: GFForm
}

// Hook personnalisé avec typage
const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>()
    
    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollPosition / documentHeight) * 100

      if (scrollPercentage > 90) {
        setActiveSection('rsvp')
      } else {
        const visibleSection = Array.from(observers.keys()).find(id => {
          const element = document.getElementById(id)
          if (!element) return false
          
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight
          return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
        })

        if (visibleSection) {
          setActiveSection(visibleSection)
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    sectionIds.forEach(id => {
      if (id !== 'rsvp') {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
          observers.set(id, observer)
        }
      }
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observers.forEach(observer => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ id, text, isActive, onClick }) => (
  <div className="relative group">
    <Button 
      variant="ghost" 
      className={`text-sm md:text-[15px] uppercase font-normal tracking-wider cursor-pointer ${
        isActive ? '' : ''
      }`}
      onClick={() => onClick(id)}
    >
      {text}
      <span className={`absolute bottom-0 left-1/2 h-0.25 bg-orange-300 transition-all duration-400 ease-in-out -translate-x-1/2 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </Button>
  </div>
)

const Navigation: React.FC<NavigationProps> = ({ gfForm }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isRSVPOpen, setIsRSVPOpen] = useState<boolean>(false)
  const [response, setResponse] = useState<RSVPResponse>("")

  const navigationItems: NavigationItem[] = [
    ['programme', 'Le programme'],
    ['venir', 'Comment venir'],
    ['loger', 'Se loger'],
    ['visiter', 'Visiter'],
    ['rsvp', 'RSVP']
  ]

  const sectionIds = navigationItems.map(([id]) => id)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNavigation = (id: string): void => {
    if (id === 'rsvp') {
      setIsRSVPOpen(true)
    } else {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="sticky top-0 bg-white w-full border-b border-gray-200 z-30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4">
          {isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="[&_svg]:size-5">
                  <Menu className="h-6 w-6" />
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white shadow-lg border-gray-300">
                {navigationItems.map(([id, text]) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`uppercase text-sm tracking-wider cursor-pointer transition-colors duration-200 relative group ${
                      id === activeSection ? 'text-orange-500' : 'hover:text-orange-400'
                    }`}
                  >
                    {text}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex justify-center gap-4">
              {navigationItems.map(([id, text]) => (
                <NavigationButton 
                  key={id} 
                  id={id} 
                  text={text}
                  isActive={id === activeSection}
                  onClick={handleNavigation}
                />
              ))}
            </div>
          )}
        </div>
      </nav>

      <RSVPDialog
        open={isRSVPOpen}
        onOpenChange={setIsRSVPOpen}
        response={response}
        onResponseChange={setResponse}
        gfForm={gfForm}
      />
    </>
  )
}

export default Navigation