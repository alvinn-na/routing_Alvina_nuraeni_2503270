import alvinaImg from '../assets/alvina.jpeg';

function Home() {
  return (
    <div className="glass-card">
      <div className="profile-img-container">
        <img src={alvinaImg} alt="Foto Alvina" className="profile-img" />
      </div>
      <h1>Selamat Datang! 👋</h1>
      <p>Halo, saya Alvina Nuraeni. Selamat datang di personal website milik saya!</p>
      <p>Silakan jelajahi navigasi di atas untuk mengenal saya lebih dekat, melihat hobi, hingga kontak yang bisa dihubungi.</p>
    </div>
  );
}

export default Home;