import Image from "next/image";
import s from "./page.module.css";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";

const cards = [
  {
    BgImageLink: "/assets/homeAssets/blueBg.svg",
    Heading: "Expert-Designed Tests",
    Description: "Expert-designed exams tailored to meet students' learning needs and educational standards.",
    Image: "/assets/homeAssets/expertMade.svg",
    TextColor: "#00153C" 
  },
  {
    BgImageLink: "/assets/homeAssets/greenBg.svg",
    Heading: "Recognition and Rewards",
    Description: "Awarding high achievers with medals, and prizes to celebrate and boost their academic journey.",
    Image: "/assets/homeAssets/reward.svg",
    TextColor: "#004A0B"
  },
  {
    BgImageLink: "/assets/homeAssets/redBg.svg",
    Heading: "Critical Skill Development",
    Description: "Our Olympiads build essential skills like logical thinking, problem-solving, and time management.",
    Image: "/assets/homeAssets/skills.svg",
    TextColor: "#4B0000"
  },
  {
    BgImageLink: "/assets/homeAssets/yellowBg.svg",
    Heading: "Global Competitiveness",
    Description: "Participating at an international level gives students insights into global standards, encouraging a broader perspective.",
    Image: "/assets/homeAssets/globalCompetition.svg",
    TextColor: "#4C4900" 
  }
]

export default function Home() {
  
  return (
    <>
      {/* <Navbar/> */}

      {/* Hero Section  */}
      <div className={s.container}>

        <div className={s.left}>
          <h1><span>Learn, Compete & Conquer</span> New Challenges</h1>

          <p>Explore Our Diverse Variety of Olympiads -  </p>

          <ul>
            <li className="olympiad">Abacus</li>
            <li className="olympiad">Robotics</li>
            <li className="olympiad">Maths</li>
            <li className="olympiad">Coding</li>
            <li className="olympiad">Science</li>
          </ul>
        </div>

        <div className={s.right}>
          <Image src="/assets/homeAssets/hero.svg" alt="hero" width={400} height={400} />
        </div>

        <div id={s.registerNowBtn}>
          <img src="/assets/homeAssets/LeftLine.svg" alt="leftLines" />
          <button id={s.btn} className={s.btn }>Register Now</button>
          <img src="/assets/homeAssets/RightLine.svg" alt="rightLines" />
        </div>

      </div>

      {/* Why Participate Section  */}
      <div className={s.whyParticipateContainer}>

        <h1>Why Participate in <span>Our Olympiads?</span></h1>
        <Carousel cards={cards} />
      </div>

      
      <Footer />
    </>
  );
}
