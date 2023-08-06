import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CampsitesList from './features/campsites/CampsitesList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
