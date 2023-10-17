import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { Selectedpage } from "@/shared/type";
import useMediaQuery from "@/hooks/UseMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";


type Props = {
    selectedpage: Selectedpage;
    setSelectedPage: (value: Selectedpage) => void;
}

function Navbar({selectedpage ,setSelectedPage}: Props) {

const flexBetween = "flex items-center justify-between"
const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
const [toggled, setToggled] = useState<boolean>(false);
  return (
    <nav className=" font-bold" >
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
             <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img alt="logo" src={Logo}  />

                    {/* right side */}
                    {isAboveMediumScreen ? (
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
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                         </div>
                    </div>) :
                     <button className=" rounded-full bg-secondary-400 p-2" onClick={()=> setToggled(!toggled) } >
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button> }


                </div>
      

             </div>
        </div>
        {/* Mobile Menu */}
        {!isAboveMediumScreen && toggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* Close Icon */}
                <div className="flex justify-end p-12">
                    <button onClick={()=> setToggled(!toggled) }>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>
                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefits" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                    <Link page="Our Classes" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact Us" selectedpage={selectedpage} setSelectedPage={setSelectedPage} />
                </div>
                
            </div>
        )}
       
        
    </nav>
  )
}

export default Navbar