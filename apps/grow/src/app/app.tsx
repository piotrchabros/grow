import { Megamenu } from '@org/shared-megamenu';
import { getMegamenuConfig } from './megamenu-config';
import { Hero } from './components/hero';
import { ServicesOverview } from './components/services-overview';
import { Industries } from './components/industries';
import { ContactForm } from './components/contact-form';
import { Cta } from './components/cta';
import { Footer } from './components/footer';

const megamenuConfig = getMegamenuConfig();

export function App() {
  return (
    <div>
      <Megamenu config={megamenuConfig} />
      <main>
        <Hero />
        <ServicesOverview />
        <Industries />
        <ContactForm />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
