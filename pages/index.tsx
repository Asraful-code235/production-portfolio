import Layout from '../components/Layout';
import { About } from './container';
import { HomePage } from './container';
import { Work } from './container';
import { Skills } from './container';
import { Testimonial } from './container';
import { Contact } from './container';
import { Footer } from './container';

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
