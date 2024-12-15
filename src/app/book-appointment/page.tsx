// app/book-appointment/page.tsx
import AppointmentCalendar from '../components/AppointmentCalendar';

export default function BookAppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AppointmentCalendar />
    </div>
  );
}