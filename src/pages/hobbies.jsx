import ikanImg from '../assets/ikan1.jpg';
import sapiImg from '../assets/sapi1.jpg';

function Hobbies() {
  return (
    <div className="glass-card">
      <h1>Hobi & Hewan Favorite 🎨</h1>
      <p>Hobi aku skarang lagi nonton anime, dan hewan-hewan favotite aku adalah sapi dan ikan:</p>

      <div className="photo-grid">
        <div className="card-item">
          {/* BARIS YANG DIPERBAIKI (Tambahkan src={ikanImg}) */}
          <img src={ikanImg} alt="Koleksi Ikan" />
          <h3>Ikan Kesayangan 🐟</h3>
        </div>

        <div className="card-item">
          <img src={sapiImg} alt="Sapi" />
          <h3>Aktivitas Peliharaan 🐄</h3>
          <p>Sapinya juga lucuu kan?.</p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;