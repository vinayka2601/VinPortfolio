import "./navbar.scss"
import {motion} from "framer-motion"

function Navbar() {

  return (
    <div className="navbar">
        {/*Sidebar*/}
        <sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale: 0.5}}
            animate={{opacity:1,scale:1}} 
            transition={{duration: 0.5}}
            > WIN DEV</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/share/15gdkxz6k2/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/vinayka-awasthi-078a88298/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" /></a>
                <a href="https://github.com/vinayka2601"><img src="https://cdn-icons-png.freepik.com/256/2504/2504911.png?semt=ais_hybrid" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar