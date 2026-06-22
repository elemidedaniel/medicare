import { useState, useMemo } from "react";
import DoctorsHeader from "../components/doctors/Doctorsheader";
import DoctorFilter from "../components/doctors/DoctorFilter";
import DoctorGrid from "../components/doctors/DoctorGrid";
import DoctorProfileModal from "../components/doctors/DoctorProfileModal";
import CTASection from "../components/home/CTASection";
import { doctors, specialties } from "../data/doctors";

export default function DoctorsPage() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = useMemo(() => {
    if (activeSpecialty === "All") return doctors;
    return doctors.filter((d) => d.specialty === activeSpecialty);
  }, [activeSpecialty]);

  return (
    <>
      <DoctorsHeader />
      <DoctorFilter
        specialties={specialties}
        active={activeSpecialty}
        onChange={setActiveSpecialty}
      />

      <section className="bg-warm px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm text-slate">
            Showing <span className="font-semibold text-charcoal">{filteredDoctors.length}</span>{" "}
            {filteredDoctors.length === 1 ? "doctor" : "doctors"}
            {activeSpecialty !== "All" && (
              <>
                {" "}
                in <span className="font-semibold text-primary">{activeSpecialty}</span>
              </>
            )}
          </p>

          <DoctorGrid doctors={filteredDoctors} onViewProfile={setSelectedDoctor} />
        </div>
      </section>

      <DoctorProfileModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />

      <CTASection />
    </>
  );
}