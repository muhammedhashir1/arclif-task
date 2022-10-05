import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import BannerBottom from './Components/BannerBottom/BannerBottom';
import Cards from './Components/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <BannerBottom/>
      <Cards/>
    </div>
  );
}

export default App;