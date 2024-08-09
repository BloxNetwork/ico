import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/headers/Header';
import Home from './components/mainhome/Home';
import './index.css';

const App = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
