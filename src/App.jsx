import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ChampionshipPage from "./pages/ChampionshipPage";
import SchedulePage from "./pages/SchedulePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/activity" element={<ActivitiesPage />} />
      <Route path="/championship" element={<ChampionshipPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
    </Routes>
  );
}
