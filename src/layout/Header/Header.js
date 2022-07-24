import './Header.css';
import NavBar from '../../components/navbar/NavBar';
import Slider from '../../components/slider/Slider';
import Brands from '../../components/brands/Brands';
import Advert from '../../components/advert/Advert';

function Header() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Brands/>
      <Advert/>
    </>
  );
}

export default Header;
