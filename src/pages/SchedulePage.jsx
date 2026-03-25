import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import MonthBlock from "../components/MonthBlock";

export default function SchedulePage() {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/schedule-data.json");
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
  const allEvents = data?.seasons?.[selectedYear]?.events || [];

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesType = selectedType === "all" || event.type === selectedType;
      const haystack = [
        event.title,
        event.track,
        event.description,
        event.month,
        event.day,
        event.time,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchTerm || haystack.includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [allEvents, searchTerm, selectedType]);

  const grouped = useMemo(() => {
    return filteredEvents.reduce((acc, event) => {
      if (!acc[event.month]) acc[event.month] = [];
      acc[event.month].push(event);
      return acc;
    }, {});
  }, [filteredEvents]);

  const weeklyCount = filteredEvents.filter(
    (event) => event.type === "weekly-race",
  ).length;
  const practiceCount = filteredEvents.filter(
    (event) => event.type === "practice-session",
  ).length;
  const specialCount = filteredEvents.filter(
    (event) => event.type === "special-event",
  ).length;

  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Schedule & Calendar"
        title="Jadwal Weekly Race & Special Event"
        lead="Halaman ini dirancang untuk menampilkan seluruh agenda komunitas secara rapi, mulai dari weekly race, practice session, hingga special event. Semua data dibaca dari file JSON agar mudah di-update tanpa mengubah struktur halaman."
        actions={[
          <a key="calendar" href="#calendar" className="btn btn-brand">
            Buka Kalender
          </a>,
          <a
            key="filter"
            href="#filters"
            className="btn btn-outline-light-custom"
          >
            Atur Filter
          </a>,
        ]}
        stats={[
          <div className="col-6 col-lg-12" key="year">
            <div className="hero-stat">
              <strong>{selectedYear || "--"}</strong>
              <span>Tahun terpilih</span>
            </div>
          </div>,
          <div className="col-6 col-lg-12" key="count">
            <div className="hero-stat">
              <strong>{filteredEvents.length}</strong>
              <span>Jumlah event tampil</span>
            </div>
          </div>,
        ]}
      />

      <section id="overview">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <SectionTitle
                small="Overview Schedule"
                title="Satu halaman untuk seluruh agenda komunitas"
                text="Berbeda dengan halaman championship, halaman ini fokus pada event komunitas harian dan musiman. Pengunjung bisa melihat weekly race reguler maupun special event dalam satu tampilan yang mudah dipindai."
              />
            </div>
            <div className="col-lg-4">
              <div className="highlight-card">
                <h5 className="fw-bold mb-2">JSON Driven Schedule</h5>
                <p className="mb-0">
                  Tambah event baru cukup lewat file{" "}
                  <strong>schedule-data.json</strong>. Frontend akan langsung
                  merender event berdasarkan tahun dan kategori yang dipilih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="filters">
        <div className="container">
          <div className="filter-card">
            <SectionTitle
              small="Filter Jadwal"
              title="Sesuaikan tampilan kalender"
              text="Pilih tahun dan kategori event untuk melihat agenda komunitas dengan lebih cepat."
            />

            <div className="filter-bar">
              <div>
                <label htmlFor="yearSelect" className="form-label">
                  Pilih Tahun
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

              <div>
                <label htmlFor="typeSelect" className="form-label">
                  Kategori Event
                </label>
                <select
                  id="typeSelect"
                  className="form-select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">Semua Event</option>
                  <option value="weekly-race">Weekly Race</option>
                  <option value="practice-session">Practice Session</option>
                  <option value="special-event">Special Event</option>
                </select>
              </div>

              <div>
                <label htmlFor="searchInput" className="form-label">
                  Cari Event / Track
                </label>
                <input
                  id="searchInput"
                  className="form-control"
                  type="text"
                  placeholder="Contoh: Monza, Endurance, Weekly"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <div className="calendar-card">
                <div className="badge-soft">Calendar Summary</div>
                <h4 className="fw-bold mb-2">
                  Jadwal Tahun {selectedYear || "--"}
                </h4>
                <p className="mb-0 muted-text">
                  {filteredEvents.length} event ditemukan berdasarkan filter
                  aktif.
                </p>
                <div className="quick-meta mt-4">
                  <span>Total {filteredEvents.length}</span>
                  <span>Weekly {weeklyCount}</span>
                  <span>Practice {practiceCount}</span>
                  <span>Special {specialCount}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              {error ? (
                <div className="empty-state">
                  <h4 className="fw-bold text-white mb-2">
                    Gagal memuat data schedule
                  </h4>
                  <p className="mb-0">
                    Pastikan file <strong>schedule-data.json</strong> berada di
                    folder public.
                  </p>
                </div>
              ) : filteredEvents.length === 0 ? (
                <div className="empty-state">
                  <h4 className="fw-bold text-white mb-2">
                    Tidak ada event ditemukan
                  </h4>
                  <p className="mb-0">
                    Coba ganti filter atau tambahkan event baru di file JSON.
                  </p>
                </div>
              ) : (
                <div className="calendar-stack">
                  {Object.entries(grouped).map(([month, events]) => (
                    <MonthBlock key={month} month={month} events={events} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="join">
        <div className="container">
          <div className="cta-box text-center">
            <SectionTitle
              small="Join The Grid"
              title="Lihat jadwal komunitas dan ikut event berikutnya"
              text="Gunakan halaman ini untuk menampilkan weekly race, practice session, dan special event dalam format yang lebih rapi, mudah dikelola, dan konsisten dengan tema utama website."
              center
            />
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="btn btn-brand">
                Join Discord
              </a>
              <a href="#calendar" className="btn btn-outline-light-custom">
                Lihat Kalender
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer text="Schedule page React version dengan data event terpisah menggunakan JSON." />
    </>
  );
}
