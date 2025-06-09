import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Coins } from 'lucide-react';
import Header from './components/Header';
import NavigationCard from './components/NavigationCard';
import BoloAkshar from './components/BoloAkshar';
import Arthshakti from './components/Arthshakti';
import BankingIntro from './components/arthshakti/BankingIntro';
import AccountOpening from './components/arthshakti/AccountOpening';
import BankingServices from './components/arthshakti/BankingServices';
import AtmUsage from './components/arthshakti/AtmUsage';
import MobileBanking from './components/arthshakti/MobileBanking';
import GovSchemes from './components/arthshakti/GovSchemes';

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-6">
      <NavigationCard
        title="Bolo Akshar"
        description="Learn language and literacy through interactive lessons"
        icon={BookOpen}
        to="/bolo-akshar"
      />
      <NavigationCard
        title="Arthshakti"
        description="Understand banking and finance for financial independence"
        icon={Coins}
        to="/arthshakti"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <Header />
          <main className="animate-fadeIn">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bolo-akshar" element={<BoloAkshar />} />
              <Route path="/arthshakti" element={<Arthshakti />} />
              <Route path="/arthshakti/intro" element={<BankingIntro />} />
              <Route path="/arthshakti/account" element={<AccountOpening />} />
              <Route path="/arthshakti/services" element={<BankingServices />} />
              <Route path="/arthshakti/atm" element={<AtmUsage />} />
              <Route path="/arthshakti/mobile" element={<MobileBanking />} />
              <Route path="/arthshakti/schemes" element={<GovSchemes />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;