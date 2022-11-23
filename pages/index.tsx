import Layout from '../components/Layout';
import HomePage from '../components/container/HomePage';
import About from '../components/container/About';
import Work from '../components/container/Work';
import Skills from '../components/container/Skills';
// import { Testimonial } from './container/Testimonial';
import Contact from '../components/container/Contact';
// import { Footer } from './container/Footer';

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Contact />
      {/* <Footer /> */}
    </Layout>
  );
}
