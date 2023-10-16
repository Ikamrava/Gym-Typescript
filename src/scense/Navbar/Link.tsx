import { Selectedpage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedpage: Selectedpage;
    setSelectedPage: (value: Selectedpage) => void;
}


function Link({page,setSelectedPage,selectedpage}: Props) {
  const pageLowercase = page.toLocaleLowerCase().replace(/ /g, "") as Selectedpage
  return (
    <AnchorLink href={`#${pageLowercase}`} onClick={()=>setSelectedPage(pageLowercase)} 
    className={`${selectedpage === pageLowercase ? "text-primaty-500" : ""}
    transition duration-500 hover:text-primary-300`}>
        {page}
    </AnchorLink>
  )
}

export default Link