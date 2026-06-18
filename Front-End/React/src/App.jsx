import { useState } from 'react';
import LandingPage from './Components/LandingPage';
import SalonsPage from './Components/SalonsPage';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Salons':
        return <SalonsPage activePage={activePage} onNavigate={setActivePage} />;
      case 'Home':
      default:
        return <LandingPage activePage={activePage} onNavigate={setActivePage} />;
    }
  };

  return renderPage();
}

export default App;
