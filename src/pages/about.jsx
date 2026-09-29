import teman1Img from '../assets/teman1.jpeg';
import teman2Img from '../assets/teman2.jpeg';

function About() {
  return (
    <div className="glass-card">
      <h1>Tentang Alvina ✨</h1>

      <p>
        Saya seorang mahasiswa pendidikan ilmu komputer yang sedang menempuh semester 3. 
        Di waktu luang, saya sangat menikmati momen berkumpul dan bermain bersama teman-teman.
      </p>

      <h2>Kebersamaan & Teman 👥</h2>

      <div className="photo-grid">
        <div className="card-item">
          <img src={teman1Img} alt="Momen bersama teman 1" />
          <h3>Momen Seru 1</h3>
          <p>Hangout bareng teman-teman.</p>
        </div>

        <div className="card-item">
          <img src={teman2Img} alt="Momen Seru 2" className="moment1-img" />
          <h3>Momen Seru 2</h3>
          <p>Kegiatan seru bersama temen.</p>
        </div>
      </div>
    </div>
  );
}

export default About;