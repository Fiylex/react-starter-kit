import { Header, Footer } from '../components/index';
import '../styles/index.scss';

const menu = [];

function MenuEkleme() {
  const text = window.document.getElementById('menu').value;
  menu.push(text);
  alert(menu);
}

// Mert Batuhan ÜNVERDİ

function Home() {
  return (
    <div>
      <Header />
      <div>
        <input type="text" id="menu" />
        <input type="button" id="MenuEkle" value="Menü Ekle" onClick={MenuEkleme()} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
