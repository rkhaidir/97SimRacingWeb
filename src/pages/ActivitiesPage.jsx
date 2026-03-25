import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Halaman Kegiatan Komunitas"
        title="Kegiatan 97 Sim Racing Community"
        lead="Rangkaian aktivitas komunitas mulai dari latihan, weekly race, hingga championship dalam satu ekosistem balap yang kompetitif dan suportif."
        actions={[
          <a key="agenda" href="#agenda" className="btn btn-brand">
            Lihat Agenda
          </a>,
          <a
            key="routine"
            href="#routine"
            className="btn btn-outline-light-custom"
          >
            Cek Rutinitas
          </a>,
        ]}
        stats={[
          <div className="col-6 col-lg-12" key="s1">
            <div className="quick-info">
              <strong>1x / minggu</strong>
              <span>Aktivitas komunitas aktif</span>
            </div>
          </div>,
          <div className="col-6 col-lg-12" key="s2">
            <div className="quick-info">
              <strong>Weekly</strong>
              <span>Race, practice, & event prep</span>
            </div>
          </div>,
        ]}
      />

      <section id="overview">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <SectionTitle
                small="Overview Kegiatan"
                title="Komunitas yang aktif, terstruktur, dan terus bergerak"
                text="Lebih dari sekadar balapan, 97 Sim Racing Community membangun ekosistem latihan dan pengembangan driver melalui sesi practice, setup discussion, dan racecraft improvement untuk menjaga performa di level kompetitif."
              />
              <div className="highlight-banner mt-4 p-3">
                <h5>Aktivitas dirancang untuk semua level pembalap</h5>
                <p>
                  Baik untuk rookie yang baru mulai, maupun driver berpengalaman
                  yang ingin menjaga performa dan konsistensi dalam kompetisi
                  resmi komunitas.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  {
                    icon: "🏁",
                    title: "Weekly Race",
                    text: "Balapan rutin untuk menjaga ritme, chemistry antar member, dan racecraft dalam situasi kompetitif.",
                    pills: ["Competitive", "Routine Event"],
                  },
                  {
                    icon: "🏆",
                    title: "Event Preparation",
                    text: "Simulasi race weekend menuju 1H Trophy dan Open Wheel Trophy dengan pendekatan yang lebih serius.",
                    pills: ["Focused", "Championship Ready"],
                  },
                ].map((item) => (
                  <div className="col-sm-6" key={item.title}>
                    <div className="activity-card">
                      <div className="icon-box">{item.icon}</div>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                      <div className="meta-pills">
                        {item.pills.map((pill) => (
                          <span key={pill}>{pill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda">
        <div className="container">
          <SectionTitle
            small="Agenda Utama"
            title="Highlight kegiatan yang berjalan di komunitas"
            text="Menampilkan kegiatan inti yang sedang berjalan di 97 Sim Racing Community—mulai dari weekly race hingga championship—dalam format yang terstruktur dan mudah dipahami, sehingga setiap member dapat mengikuti perkembangan kompetisi dengan jelas."
            center
          />
          <div className="row g-4 mt-1">
            {[
              {
                icon: "🔥",
                title: "Weekly Sprint Session",
                text: "Race pendek dengan format practice, qualifying, dan sprint race untuk membangun pace dan adaptasi lintasan secara konsisten.",
                meta: ["Midweek", "Short Format", "Open Entry"],
              },
              {
                icon: "⚡",
                title: "Main Event Preparation",
                text: "Aktivitas yang mengarahkan member ke atmosfer championship, baik endurance multi-class maupun open wheel formula style.",
                meta: ["1H Trophy", "Open Wheel Trophy", "Race Focused"],
              },
            ].map((item) => (
              <div className="col-lg-6" key={item.title}>
                <div className="schedule-card">
                  <div className="icon-box">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <div className="event-meta">
                    {item.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="routine">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <SectionTitle
                small="Rutinitas Mingguan"
                title="Alur kegiatan komunitas dari latihan sampai race"
                text="Menunjukkan alur aktivitas komunitas yang terstruktur—mulai dari sesi latihan, persiapan, hingga race—sebagai bagian dari sistem yang dirancang untuk membangun performa dan konsistensi setiap driver."
              />
              <div className="info-card info-card-compact mt-4">
                <h5 className="mb-4">Flow Aktivitas</h5>
                <div className="timeline-wrapper">
                  <div className="timeline-item">
                    <strong>Practice & setup preparation</strong>
                    <p>
                      Member memulai minggu dengan latihan, penyesuaian setup,
                      dan pengenalan track.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <strong>Weekly community race</strong>
                    <p>
                      Balapan rutin menjaga engagement komunitas sekaligus
                      memberi ruang untuk mengasah racecraft.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <strong>Championship readiness</strong>
                    <p>
                      Driver masuk ke fase yang lebih serius menjelang event
                      utama seperti 1H Trophy dan Open Wheel Trophy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-3 h-100">
                {[
                  {
                    icon: "🧠",
                    title: "Driver Briefing",
                    text: "Pembahasan format event, etika balap, dan ekspektasi perilaku di track agar kualitas race tetap terjaga.",
                  },
                  {
                    icon: "📈",
                    title: "Performance Review",
                    text: "Ruang evaluasi sederhana untuk membahas konsistensi lap, incident, dan peluang improvement tiap driver.",
                  },
                  {
                    icon: "⏱️",
                    title: "Qualifying Simulation",
                    text: "Khusus untuk event yang menuntut presisi tinggi, termasuk Open Wheel Trophy dengan Formula Region.",
                  },
                  {
                    icon: "🚥",
                    title: "Endurance Preparation",
                    text: "Simulasi traffic management, tire saving, dan race discipline untuk menghadapi 1H Trophy multi-class.",
                  },
                ].map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div className="activity-card">
                      <div className="icon-box">{item.icon}</div>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

                <div className="col-12">
                  <div className="highlight-banner h-100 d-flex flex-column justify-content-center p-3">
                    <h5>Tujuan utama halaman kegiatan</h5>
                    <p>
                      Menunjukkan bahwa 97 Sim Racing Community adalah komunitas
                      yang aktif, punya ritme yang konsisten, dan serius
                      membangun pengalaman balap virtual yang berkualitas.
                    </p>
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
              small="Join The Grid"
              title="Masuk ke komunitas yang hidup setiap minggu"
              text="Gabung untuk ikut weekly race, sesi latihan, dan persiapan menuju championship utama 97 Sim Racing Community dalam suasana yang kompetitif dan suportif."
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
              <a href="/championship" className="btn btn-outline-light-custom">
                Lihat Championship
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer text="Halaman kegiatan React version dengan tema konsisten dari landing page utama." />
    </>
  );
}
