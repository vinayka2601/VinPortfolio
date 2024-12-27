import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import {useRef} from "react";
import {Link} from "react-router-dom"


const items= [
 {
  id:1,
  title:"Website using localstorage",
  img:"https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc:"In this React project, I have built a fully functional website UI that utilizes localStorage for data persistence. This project is a perfect demonstration of React JS capabilities and a great way to strengthen our frontend development skills. With the collaboration of admin@me.com and tanu@gmail.com, we can efficiently create, update, and delete data, ensuring seamless operation and management of the website.",
  link:"https://local-storage-project-lg25ozv4h-vinaykas-projects.vercel.app/",
 },
 
 
 
 {
  id:2,
  title:"Weather App",
  img:"https://images.pexels.com/photos/5668093/pexels-photo-5668093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  desc:"Explore the weather around the globe with our innovative web app, crafted using React.js!This intuitive application lets you effortlessly search and check the current weather conditions for any city worldwide, thanks to the power of the Weather API.",
  link:"https://react-weather-app-six-zeta.vercel.app/",
 },

 {
  id:3,
  title:"Spotify",
  img:"https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc:"In this project, you have the freedom to play, pause, and skip to the previous or next song with ease. You can also change tracks within the duration period, providing a seamless transition between your favorite tunes. Plus, there's a host of additional functionalities designed to give you more control and flexibility over your music playback.",
  link:"https://spotify-clone-drab-ten.vercel.app/",
 },

 {
  id:4,
  title:"My Self Bot",
  img:"https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  desc:"Immerse yourself in the cutting-edge world of AI with my intelligently crafted chatbot! Leveraging the advanced capabilities of Gemini, OpenAI, and other state-of-the-art providers, this chatbot promises to redefine user interactions.",
  link:"https://gemini-mu-ruddy.vercel.app/",
 },
];

const Single =({item})=>{

  const ref =useRef();

  const {scrollYProgress}=useScroll({target:ref,
  // offset:["start start","end start"]
  });
  const y=useTransform(scrollYProgress,[0,1],[-300,300]);
  
  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer"style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button><Link to={item.link}>See Demo</Link></button>
          
        </motion.div>
        </div>
      </div>
      
    </section>
  )
}
const Portfolio = () => {
const ref=useRef()
  const {scrollYProgress}=useScroll({target:ref,
    offset:["end end", "start start"],
  });

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featuread Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
      {items.map((item)=>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
};

export default Portfolio