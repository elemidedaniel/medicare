import { useState } from "react";
import PortalLogin from "../components/portal/PortalLogin";
import PortalSidebar from "../components/portal/PortalSidebar";
import {
  OverviewPanel,
  AppointmentsPanel,
  PrescriptionsPanel,
  RecordsPanel,
  ProfilePanel,
} from "../components/portal/PortalPanels";

const PANELS = {
  overview: OverviewPanel,
  appointments: AppointmentsPanel,
  prescriptions: PrescriptionsPanel,
  records: RecordsPanel,
  profile: ProfilePanel,
};

export default function PatientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientEmail, setPatientEmail] = useState("");
  const [activePanel, setActivePanel] = useState("overview");

  function handleLogin(email) {
    setPatientEmail(email);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setPatientEmail("");
    setActivePanel("overview");
  }

  if (!isLoggedIn) {
    return <PortalLogin onLogin={handleLogin} />;
  }

  const ActivePanel = PANELS[activePanel];

  return (
    <div className="flex min-h-[calc(100vh-73px)] flex-col bg-warm lg:flex-row">
      <PortalSidebar
        active={activePanel}
        onChange={setActivePanel}
        onLogout={handleLogout}
        patientEmail={patientEmail}
      />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-3xl">
          <ActivePanel patientEmail={patientEmail} />
        </div>
      </main>
    </div>
  );
}