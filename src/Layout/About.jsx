import { MissionAndVision } from "../Templates/MissionAndVision";
import { InfoAbout } from "../Templates/InfoAbout";

const About = () => {
  return (
   <main className='page-about-us m-0 p-0 relative'>
     <InfoAbout/>
     <MissionAndVision/>
   </main>
  )
}
export { About };