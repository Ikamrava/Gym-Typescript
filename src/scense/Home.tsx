import { Selectedpage } from "@/shared/type";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";



type Props = {
    setSelectedPage : (value: Selectedpage) => void;
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = matchMedia("(min-width:1060px)").matches;
  return (
    <section id="#home" className=" gap-16 bg-gray-20 md:py-32  md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6  ">
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
               
                <div className=" md:-mt-20 ">
                    <div className=" relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className=" mt-8 text-sm">
                    
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                        
                    </p>
                </div>
                <div className="mt-10 flex items-center gap-8 mb-6 ">
                    <ActionButton setSelectedPage={setSelectedPage} >
                        Join Now 
                    </ActionButton>
                    <AnchorLink  className=" text-sm font-bold text-primary-500
                    underline hover:text-secondary-500 "
                    onClick={() => setSelectedPage(Selectedpage.ContactUs)}
                    href={`#${Selectedpage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>

                </div>
               
            </div>
            <div>
                <img src={HomePageGraphic} alt="hpme-page-g" />
            </div>
        </div>
       
        
                        
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            
            </div>
        )}              
    </section>
  )
}

export default Home