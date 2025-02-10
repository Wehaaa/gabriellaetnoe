import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import RSVPDialog from "./RSVPDialog" // Ajout de l'import

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isRSVPOpen, setIsRSVPOpen] = useState(false)
  const [response, setResponse] = useState("")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navigationItems = [
    ['programme', 'Le programme'],
    ['venir', 'Comment venir'],
    ['loger', 'Se loger'],
    ['visiter', 'Visiter'],
    ['rsvp', 'RSVP']
  ]

  const handleNavigation = (id: string) => {
    if (id === 'rsvp') {
      setIsRSVPOpen(true)
    } else {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRSVPSubmit = (data: {
    response: string;
    attendees?: string;
    allergies?: string;
    message?: string;
  }) => {
    console.log('Form submitted:', data)
    setIsRSVPOpen(false)
  }

  const NavigationButton = ({ id, text }: { id: string, text: string }) => (
    <div className="relative group">
      <Button 
        variant="ghost" 
        className="text-sm md:text-[15px] uppercase font-normal tracking-wider cursor-pointer hover:text-orange-400 transition-colors duration-200"
        onClick={() => handleNavigation(id)}
      >
        {text}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-300 ease-in-out -translate-x-1/2" />
      </Button>
    </div>
  )

  return (
    <>
      <nav className="sticky top-0 bg-white z-10 w-full border-b border-gray-200">
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
                    className="uppercase text-sm tracking-wider cursor-pointer hover:text-orange-400 transition-colors duration-200 relative group"
                  >
                    {text}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-500 ease-in-out -translate-x-1/2" />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex justify-center gap-4">
              {navigationItems.map(([id, text]) => (
                <NavigationButton key={id} id={id} text={text} />
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
        onSubmit={handleRSVPSubmit}
      />
    </>
  )
}

export default Navigation