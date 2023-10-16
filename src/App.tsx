import Navbar from "./scense/Navbar"
import {useState} from "react"
import { Selectedpage } from "./shared/type"



function App() {

  const [selectedpage, setSelectedPage] = useState<Selectedpage>(Selectedpage.Home)



  return (
    <div className='app bg-gray-50'>
      <Navbar selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
