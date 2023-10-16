import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { Selectedpage } from "@/shared/type";


type Props = {
    selectedpage: Selectedpage;
    setSelectedPage: (value: Selectedpage) => void;
}

function Navbar({selectedpage ,setSelectedPage}: Props) {

const flexBetween = "flex items-center justify-between"
  return (
    <nav className=" font-bold" >
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
             <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img alt="logo" src={Logo}  />

                    {/* right side */}
                    <div className={`${flexBetween} w-full `}>
                        {/* Inner left side */}
                         <div className={`${flexBetween} gap-8 text-sm `} >
                            <Link page= "Home" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                            <Link page ="Benefits" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                            <Link page="Our Classes" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact Us" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                         </div>
                         {/* Ineer right side */}
                         <div className={`${flexBetween} gap-8  `}>
                            <p>Sign in</p>
                            <button>Become a member</button>
                         </div>
                    </div>


                </div>
      

             </div>
        </div>
       
        
    </nav>
  )
}

export default Navbar