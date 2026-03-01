import { BrowserRouter, Routes, Route } from 'react-router';
import { Megamenu } from '@org/shared-megamenu';
import { getMegamenuConfig } from './megamenu-config';
import { Hero } from './components/hero';
import { ServicesOverview } from './components/services-overview';
import { Industries } from './components/industries';
import { HowItWorks } from './components/how-it-works';
import { ContactForm } from './components/contact-form';
import { Cta } from './components/cta';
import { Footer } from './components/footer';
import { TermsPage } from './pages/terms';
import { PrivacyPage } from './pages/privacy';

const megamenuConfig = getMegamenuConfig();

function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Industries />
      <HowItWorks />
      <ContactForm />
      <Cta />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Megamenu config={megamenuConfig} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
