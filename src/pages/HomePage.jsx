import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

const sponsors = [
  {
    name: "Assetto Corsa",
    logo: "/sponsors/Assetto-Corsa.png",
  },
  {
    name: "Assetto Corsa Competizione",
    logo: "/sponsors/ACC.png",
  },
];

const isSponsorSlider = sponsors.length > 4;
const sponsorItems = isSponsorSlider ? [...sponsors, ...sponsors] : sponsors;

export default function HomePage() {
  return (
    <>
      <Navbar />

      <header className="hero" id="home">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="eyebrow">Komunitas Sim Racing Indonesia</div>
              <h1>
                97 Sim Racing Community
                <br />
                Drive Fast, Race Fair, Grow Together.
              </h1>
              <p className="lead">
                Komunitas sim racing Indonesia yang menghadirkan weekly race dan
                championship kompetitif dengan standar profesional. Tempat
                terbaik untuk berkembang, berkompetisi, dan membangun nama di
                dunia sim racing.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#championship" className="btn btn-brand">
                  Lihat Championship
                </a>
                <a href="#tentang" className="btn btn-outline-light-custom">
                  Kenali Komunitas
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-stats">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-item">
                      <h3>800+</h3>
                      <p>Member aktif</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-item">
                      <h3>2</h3>
                      <p>Championship aktif</p>
                    </div>
                  </div>
                </div>
                <hr className="border-secondary-subtle my-4" />
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div>
                    <div className="badge-soft">Live Season</div>
                    <h5 className="mb-1">1H Trophy & Open Wheel Trophy</h5>
                    <p className="mb-0 text-secondary">
                      Endurance multi-class & formula development series
                    </p>
                  </div>
                  <a
                    href="#championship"
                    className="btn btn-sm btn-light fw-semibold"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="tentang">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <SectionTitle
                small="Tentang Komunitas"
                title="Rumah untuk pembalap virtual yang kompetitif dan suportif"
                text="97 Sim Racing Community adalah komunitas untuk pecinta balap virtual yang ingin berkembang bersama, menikmati kompetisi yang sehat, dan membangun ekosistem sim racing yang aktif."
              />

              <div className="timeline-line mt-4">
                <div className="timeline-step">
                  <strong>Kompetitif & fair play</strong>
                  Setiap event didesain untuk menghadirkan balapan yang serius,
                  terstruktur, dan tetap menjunjung sportivitas.
                </div>
                <div className="timeline-step">
                  <strong>Terbuka untuk semua level</strong>
                  Dari rookie sampai driver berpengalaman, semua bisa belajar
                  dan bertanding bersama.
                </div>
                <div className="timeline-step">
                  <strong>Aktif & konsisten</strong>
                  Komunitas rutin mengadakan race mingguan, special event,
                  hingga championship musiman.
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="feature-card">
                    <div className="feature-icon">🏁</div>
                    <h5>Weekly Race</h5>
                    <p>
                      Ajang latihan rutin untuk meningkatkan racecraft,
                      konsistensi, dan adaptasi lintasan.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h5>Championship Series</h5>
                    <p>
                      Kompetisi multi-round dengan sistem event yang terstruktur
                      dan seri utama komunitas.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-card">
                    <div className="feature-icon">🎮</div>
                    <h5>Simulator Focused</h5>
                    <p>
                      Mendukung berbagai platform sim racing populer seperti
                      ACC, Assetto Corsa, dan Le Mans Ultimate.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-card">
                    <div className="feature-icon">🤝</div>
                    <h5>Komunitas Solid</h5>
                    <p>
                      Tempat berdiskusi setup, strategi, jadwal race, hingga
                      berbagi pengalaman sesama sim racer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kegiatan">
        <div className="container">
          <SectionTitle
            small="Kegiatan Komunitas"
            title="Agenda utama 97 Sim Racing Community"
            text="Jelajahi jadwal race, event mingguan, dan championship utama yang membentuk ekosistem kompetitif 97 Sim Racing Community."
            center
          />

          <div className="row g-4 mt-1">
            <div className="col-lg-6">
              <div className="schedule-card">
                <span className="track-pill">Setiap Kamis Malam</span>
                <h5>Weekly Sprint Race</h5>
                <p>
                  Race singkat dengan format practice, qualifying, dan sprint
                  race untuk menjaga ritme latihan member setiap minggu.
                </p>
                <div className="event-meta">
                  <span>20:00 WIB</span>
                  <span>20 Menit Race</span>
                  <span>Open Grid</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="schedule-card">
                <span className="track-pill">Jum'at - Minggu</span>
                <h5>Main Event Championship</h5>
                <p>
                  Seri balap utama komunitas dengan format musim penuh dan dua
                  identitas utama: endurance dan open wheel.
                </p>
                <div className="event-meta">
                  <span>Season Based</span>
                  <span>Multi Series</span>
                  <span>Stewarding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="championship">
        <div className="container">
          <SectionTitle
            small="Championship Berlangsung"
            title="Dua seri utama 97 Sim Racing Community"
            text="Landing page difokuskan untuk menampilkan dua championship aktif komunitas dengan identitas yang kuat, format kompetisi yang jelas, dan informasi yang mudah dipahami pengunjung."
            center
          />

          <div className="row g-4 mb-4 align-items-start mt-1">
            <div className="col-lg-5">
              <SectionTitle
                small="Championship 01"
                title="1H Trophy"
                text="Seri endurance utama komunitas dengan format balapan 2 jam, menonjolkan konsistensi, strategi pit, dan manajemen traffic antar class."
              />
              <div className="info-card info-card-compact mt-4">
                <h5>Detail Championship</h5>
                <div className="event-meta mt-3">
                  <span>1 Hour Endurance</span>
                  <span>Multi Class</span>
                  <span>GT3</span>
                  <span>GTC (992)</span>
                  <span>GT4</span>
                </div>
                <hr className="border-secondary-subtle my-4" />
                <p className="mb-2">
                  <strong className="text-white">Karakter seri:</strong> balapan
                  endurance dengan fokus pace consistency, strategy, dan clean
                  overtake.
                </p>
                <p className="mb-2">
                  <strong className="text-white">Class utama:</strong> GT3, GTC
                  (992), dan GT4
                </p>
                <p className="mb-0">
                  <strong className="text-white">Nuansa event:</strong>{" "}
                  kompetitif, rapi, dan cocok untuk driver yang ingin berkembang
                  dalam racecraft panjang.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="glass-card h-100">
                <h5 className="mb-4">Format 1H Trophy</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Class GT3</div>
                      <h6 className="text-white fw-bold">
                        Top-tier performance
                      </h6>
                      <p className="mb-0">
                        Untuk driver yang mengincar pace tertinggi, race
                        strategy agresif, dan persaingan terdepan.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Class GTC (992)</div>
                      <h6 className="text-white fw-bold">One-make challenge</h6>
                      <p className="mb-0">
                        Persaingan rapat dengan karakter mobil seragam,
                        menonjolkan skill driver dan konsistensi lap.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Class GT4</div>
                      <h6 className="text-white fw-bold">
                        Balanced competition
                      </h6>
                      <p className="mb-0">
                        Kelas ideal untuk driver yang ingin balapan ketat,
                        stabil, dan fokus pada momentum tikungan.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card border border-danger-subtle">
                      <div className="badge-soft">Race Focus</div>
                      <h6 className="text-white fw-bold">Endurance Mindset</h6>
                      <p className="mb-0">
                        Manajemen ban, kontrol traffic, dan strategi menjadi
                        kunci utama hasil akhir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <SectionTitle
                small="Championship 02"
                title="Open Wheel Trophy"
                text="Seri open wheel komunitas untuk pembalap yang menyukai presisi, downforce racing, dan duel cepat dengan mobil Formula Region."
              />
              <div className="info-card info-card-compact">
                <h5>Detail Championship</h5>
                <div className="event-meta mt-3">
                  <span>Formula Region</span>
                  <span>Open Wheel</span>
                  <span>High Downforce</span>
                  <span>Precision Racing</span>
                </div>
                <hr className="border-secondary-subtle my-4" />
                <p className="mb-2">
                  <strong className="text-white">Karakter seri:</strong> balapan
                  cepat dengan ritme intens, braking presisi, dan fokus besar
                  pada qualifying pace.
                </p>
                <p className="mb-2">
                  <strong className="text-white">Mobil yang digunakan:</strong>{" "}
                  Formula Region
                </p>
                <p className="mb-0">
                  <strong className="text-white">Nuansa event:</strong> tajam,
                  teknis, dan sangat menuntut konsentrasi di setiap lap.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="glass-card h-100">
                <h5 className="mb-4">Highlight Open Wheel Trophy</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Formula Region</div>
                      <h6 className="text-white fw-bold">
                        Feeder-style racing
                      </h6>
                      <p className="mb-0">
                        Cocok untuk driver yang menikmati mobil ringan,
                        responsif, dan menuntut presisi tinggi.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Qualifying Matters</div>
                      <h6 className="text-white fw-bold">
                        Grid position is key
                      </h6>
                      <p className="mb-0">
                        Format open wheel membuat posisi start dan kebersihan
                        duel jadi faktor yang sangat menentukan.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="badge-soft">Driver Development</div>
                      <h6 className="text-white fw-bold">
                        Racecraft & precision
                      </h6>
                      <p className="mb-0">
                        Seri ini ideal untuk membentuk disiplin balap, car
                        control, dan konsistensi lap time.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card border border-primary-subtle">
                      <div className="badge-soft">Series Identity</div>
                      <h6 className="text-white fw-bold">
                        Fast, technical, exciting
                      </h6>
                      <p className="mb-0">
                        Visual dan narasi seri diarahkan untuk menonjolkan
                        sensasi balap open wheel yang modern.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join">
        <div className="container">
          <div className="cta-box text-center">
            <SectionTitle
              small="Gabung Bersama Kami"
              title="Siap masuk ke grid 97 Sim Racing Community?"
              text="Ikuti weekly race komunitas, rasakan atmosfer endurance di 1H Trophy, atau uji presisi Anda di Open Wheel Trophy bersama pembalap lain yang sama-sama kompetitif."
              center
            />
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://s.id/97SimRacing"
                target="__blank"
                rel="noopener noreferrer"
                className="btn btn-brand"
              >
                Join Discord
              </a>
              <a href="#kegiatan" className="btn btn-outline-light-custom">
                Lihat Jadwal Event
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="sponsor-section pt-0">
        <div className="container">
          <SectionTitle
            small="Partner & Sponsor"
            title="Didukung oleh partner komunitas"
            text="Didukung oleh partner yang berkontribusi dalam perkembangan dan keberlangsungan kompetisi komunitas."
            center
          />

          <div className="sponsor-slider-wrap">
            <div
              className={`sponsor-slider-track ${
                isSponsorSlider
                  ? "sponsor-slider-animated"
                  : "sponsor-slider-static"
              }`}
            >
              {sponsorItems.map((sponsor, index) => (
                <div className="sponsor-card" key={`${sponsor.name}-${index}`}>
                  <div className="sponsor-logo-box">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="sponsor-logo"
                    />
                  </div>
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer text="Landing page React version untuk komunitas sim racing modern." />
    </>
  );
}
