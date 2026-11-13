import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from "./pages/Home/HomePage";
import { ContactMe } from "./pages/contact/ContactMe";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { CertificationsPage } from "./pages/Certifications/CertificationsPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/about" element={<Navigate to="/#about" replace />} />
      <Route path="/skills" element={<Navigate to="/#skills" replace />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<Navigate to="/#experience" replace />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default App;