import BathRituals from "./Bath-rituals";
import BestSeller from "./BestSeller";
import CleanBeauty from "./CleanBeauty";
import ClinicalApprovals from "./ClinicalApprovals";
import HeroSection from "./HeroSection";
import ImageSection2 from "./Image-Section";
import ImageSection from "./ImageSection";
import Marcquee from "./Marcquee";
import NatureComp from "./NatureComp";
import OrganicComp from "./OrganicComp";
import Video from "./Video";
import Video2 from "./Video2";
import WhatTheySay from "./WhatTheySay";

 export default function Home(){
    return(
        <>
        <HeroSection/>
        <BathRituals/>
   <ImageSection/>
   <Video/>
   <ClinicalApprovals/>
   <BestSeller/>
   <Video2/>
   <CleanBeauty/>
   <ImageSection2/>
   <WhatTheySay/>
   <NatureComp/>
   <OrganicComp/>
   <Marcquee/>
        </>
    )
 }