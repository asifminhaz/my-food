
import './App.css';
import About from './Component/About';
import Clients from './Component/Clients';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Menu from './Component/Menu';
import Price from './Component/Price';
import Shop from './Component/Shop';


function App() {
  return (
    <div>
       <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Price />
      <Footer/>
    </div>
  );
}

export default App;
