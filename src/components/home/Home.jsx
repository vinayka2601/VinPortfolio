
import Cursor from '../cursor/Cursor';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Sidebar from '../sidebar/Sidebar';
import Services from '../services/Services';
import Portfolio from '../portfolioo/Portfolio';
import Contact from '../contact/Contact';
import Parallax from '../parallax/Parallax';


const Home = () => {
  return ( <div>
    <Cursor />

      
    <section id="Homepage">
      <Navbar />
      <Hero />
      <Sidebar />
      

    </section>

    <section id="Services"><Parallax type="services" /></section>

    <section><Services /></section>

    <section id="Portfolio"><Parallax type="portfolio" /></section>

    <Portfolio />

    <section id="Contact">
      <Contact />
    </section>

  </div>
 
  );
}

export default Home