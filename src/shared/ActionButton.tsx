import AnchorLink from "react-anchor-link-smooth-scroll";
import { Selectedpage } from "./type";

type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:Selectedpage)=>void;
}

function ActionButton({children,setSelectedPage}: Props) {
  return (
    <AnchorLink className=" rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer"
    onClick={()=>setSelectedPage(Selectedpage.ContactUs)}
    href={`#${Selectedpage.ContactUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButton