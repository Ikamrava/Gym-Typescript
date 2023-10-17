import Navbar from "./scense/Navbar"
import {useState, useEffect} from "react"
import { Selectedpage } from "./shared/type"



function App() {

  const [selectedpage, setSelectedPage] = useState<Selectedpage>(Selectedpage.Home)
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() => {
   const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopPage(true)
      setSelectedPage(Selectedpage.Home)
    }
    if (window.scrollY !== 0) setIsTopPage(false)
  }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)  
  
  
  }, [])
  



  return (
    <div className='app bg-gray-50'>
      <Navbar selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
