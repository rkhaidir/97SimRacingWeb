import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ChampionshipCard from "../components/ChampionshipCard";

function getStatusClass(status) {
  const normalized = (status || "").toLowerCase();
  if (
    normalized.includes("live") ||
    normalized.includes("active") ||
    normalized.includes("berlangsung")
  ) {
    return "status-live";
  }
  if (
    normalized.includes("upcoming") ||
    normalized.includes("soon") ||
    normalized.includes("coming")
  ) {
    return "status-upcoming";
  }
  if (
    normalized.includes("completed") ||
    normalized.includes("finished") ||
    normalized.includes("ended")
  ) {
    return "status-completed";
  }
  return "";
}

export default function ChampionshipPage() {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/championship-data.json");
        if (!response.ok) throw new Error("Gagal memuat file JSON");
        const json = await response.json();
        setData(json);
        setSelectedYear(json.defaultYear || json.years?.[0] || "");
      } catch (err) {
        setError(err.message);
      }
    }

    loadData();
  }, []);

  const years = data?.years || [];
  const championships = data?.seasons?.[selectedYear]?.championships || [];
  const rounds = championships.flatMap((championship) =>
    (championship.rounds || []).map((round) => ({
      championshipName: championship.name,
      championshipColor: championship.color || "#ff3b30",
      ...round,
    })),
  );

  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Halaman Championship"
        title="Championship 97 Sim Racing Community"
        lead="Daftar championship lengkap dengan detail series dan kalender race untuk memantau musim aktif maupun arsip kompetisi."
        actions={[
          <a key="champ" href="#championship-list" className="btn btn-brand">
            Lihat Championship
          </a>,
          <a
            key="calendar"
            href="#calendar"
            className="btn btn-outline-light-custom"
          >
            Buka Kalender
          </a>,
        ]}
        stats={[
          <div className="col-6 col-lg-12" key="year">
            <div className="hero-stat">
              <strong>{selectedYear || "--"}</strong>
              <span>Tahun aktif</span>
            </div>
          </div>,
          <div className="col-6 col-lg-12" key="count">
            <div className="hero-stat">
              <strong>{championships.length}</strong>
              <span>Jumlah championship</span>
            </div>
          </div>,
        ]}
      />

      <section id="overview">
        <div className="container">
          <SectionTitle
            small="Data Championship"
            title="Filter musim dan lihat detail tiap series"
            text="Pilih musim untuk melihat daftar series yang pernah dan sedang berlangsung, lengkap dengan detail kompetisi, kalender race, dan perkembangan setiap championship."
          />

          <div className="filter-bar">
            <div>
              <label htmlFor="yearSelect" className="form-label">
                Pilih Tahun Championship
              </label>
              <select
                id="yearSelect"
                className="form-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-md-end">
              <div className="badge-soft">Updated Championship Info</div>
              <p className="muted-text mb-0">
                Menampilkan informasi musim, kalender race, dan status
                championship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="championship-list">
        <div className="container">
          <SectionTitle
            small="Daftar Championship"
            title="Series per tahun"
            text="Ringkasan setiap series mencakup class, format, status, dan informasi penting lainnya dalam satu tampilan."
            center
          />

          {error ? (
            <div className="empty-state mt-4">
              <h4 className="fw-bold text-white mb-2">
                Gagal memuat data championship
              </h4>
              <p className="mb-0">
                Pastikan file <strong>championship-data.json</strong> berada di
                folder public.
              </p>
            </div>
          ) : championships.length === 0 ? (
            <div className="empty-state mt-4">
              <h4 className="fw-bold text-white mb-2">
                Belum ada data championship
              </h4>
              <p className="mb-0">
                Tambahkan data baru pada file JSON untuk menampilkan
                championship di tahun ini.
              </p>
            </div>
          ) : (
            <div className="row g-4 mt-1">
              {championships.map((item) => (
                <div className="col-lg-6" key={item.name}>
                  <ChampionshipCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="calendar">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <SectionTitle
                small="Kalender Series"
                title="Round dan jadwal event"
                text="Kalender akan otomatis berubah sesuai championship yang dipilih melalui filter tahun, dan menampilkan semua round dari semua series di tahun tersebut."
              />
              <div className="info-card info-card-compact mt-4">
                <h5 className="fw-bold mb-3">Informasi kalender kompetisi</h5>
                <p className="mb-2">
                  Menampilkan jadwal setiap round dalam satu musim untuk
                  membantu driver mengikuti alur kompetisi dengan jelas dan
                  terstruktur.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="calendar-card">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                  <div>
                    <div className="badge-soft">Round Calendar</div>
                    <h4 className="fw-bold mb-1">
                      Kalender Championship {selectedYear || "--"}
                    </h4>
                    <p className="mb-0 muted-text">
                      {rounds.length} round terdata dari semua series pada tahun{" "}
                      {selectedYear || "--"}.
                    </p>
                  </div>
                </div>

                {rounds.length === 0 ? (
                  <div className="empty-state">
                    <h5 className="fw-bold text-white mb-2">
                      Belum ada kalender
                    </h5>
                    <p className="mb-0">
                      Tambahkan array rounds di file JSON untuk menampilkan
                      jadwal event.
                    </p>
                  </div>
                ) : (
                  rounds.map((round, index) => (
                    <div
                      className="calendar-item mb-2"
                      key={`${round.championshipName}-${index}`}
                      style={{ "--champ-color": round.championshipColor }}
                    >
                      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                        <div>
                          <div className="round-title style={{ color: round.color }}">
                            {round.round || "-"} • {round.track || "-"}
                          </div>
                          <p className="mb-1">{round.championshipName}</p>
                        </div>
                        <div
                          className={`status-pill ${getStatusClass(round.status)}`}
                        >
                          {round.status || "Scheduled"}
                        </div>
                      </div>
                      <div className="round-meta">
                        <span>{round.date || "-"}</span>
                        <span>{round.type || "Race Day"}</span>
                        {round.server ? <span>{round.server}</span> : null}
                      </div>
                    </div>
                  ))
                )}
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
              title="Ikuti championship 97 Sim Racing Community"
              text="Bergabunglah dalam championship 97 Sim Racing Community dan rasakan pengalaman kompetisi yang terstruktur, kompetitif, dan menjunjung tinggi fair play di setiap musimnya."
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
              <a
                href="#championship-list"
                className="btn btn-outline-light-custom"
              >
                Lihat Series
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer text="Championship page React version dengan data terpisah menggunakan JSON." />
    </>
  );
}
