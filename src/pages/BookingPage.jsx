import { useState, useEffect } from "react";
import BookingStepper from "../components/booking/BookingStepper";
import BookingSummary from "../components/booking/BookingSummary";
import ServiceSelect from "../components/booking/ServiceSelect";
import DoctorSelect from "../components/booking/DoctorSelect";
import DateTimePicker from "../components/booking/DateTimePicker";
import BookingForm from "../components/booking/BookingForm";
import BookingConfirmation from "../components/booking/BookingConfirmation";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [patient, setPatient] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // If the user changes the service after picking a doctor, the doctor
  // may no longer match — reset downstream selections to avoid a broken state.
  function handleServiceSelect(newService) {
    if (service?.id !== newService.id) {
      setDoctor(null);
      setDate(null);
      setTime(null);
    }
    setService(newService);
  }

  function handleFormSubmit(data) {
    setPatient(data);
    setIsConfirmed(true);
  }

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  // Smoothly scroll to the top of the form when moving between steps —
  // without this, advancing from a long step (like step 2's doctor list)
  // leaves the user stranded mid-page on the next step.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  if (isConfirmed) {
    return (
      <section className="bg-warm px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <BookingConfirmation service={service} doctor={doctor} date={date} time={time} patient={patient} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-warm px-6 pb-20 pt-2">
      <BookingStepper currentStep={step} />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
        {/* Main step content */}
        <div className="rounded-[2rem] border border-border bg-white p-6 sm:p-9">
          {step === 1 && (
            <ServiceSelect selected={service} onSelect={handleServiceSelect} onNext={next} />
          )}
          {step === 2 && (
            <DoctorSelect
              service={service}
              selected={doctor}
              onSelect={setDoctor}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 3 && (
            <DateTimePicker
              selectedDate={date}
              selectedTime={time}
              onSelectDate={(d) => {
                setDate(d);
                setTime(null); // reset time when date changes — different day, different slots
              }}
              onSelectTime={setTime}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 4 && <BookingForm onBack={back} onSubmit={handleFormSubmit} />}
        </div>

        {/* Live summary sidebar — hidden on mobile to save space, shown from lg up */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <BookingSummary service={service} doctor={doctor} date={date} time={time} />
          </div>
        </div>
      </div>
    </section>
  );
}