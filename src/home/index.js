import Footer from '../components/footer';
import Nav from '../components/nav';
import About from './components/about';
import ClassificationGuide from './components/classificationGuide';
import Danger from './components/danger';
import Hero from './components/hero';
import Impact from './components/impact';
import Type from './components/type';

function Home() {
  return (
    <section>
      {/* Navigasi */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* Tentang */}
      <About />
      {/* Panduan penggunaan klasifikasi */}
      <ClassificationGuide />
      {/* Bahaya sampah */}
      <Danger />
      {/* Jenis sampah */}
      <Type />
      {/* Dampak sampah */}
      <Impact />
      {/* Footer */}
      <Footer />
    </section>
  );
}

export default Home;
