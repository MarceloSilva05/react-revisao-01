
import './App.css';
import Header from './pages/header/Header';
import Texts from './pages/texts/Texts';
import Cards from './pages/cards/Cards';
import Footer from './pages/footer/Footer';
function App() {
document.title="Revisão";
  
  return (
    <body>
      <Header/>
      <Texts/>
      <Cards/>
      <Footer/>
    </body>
  );
}

export default App;
