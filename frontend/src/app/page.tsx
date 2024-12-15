// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Barbershop Booking</h1>
      <nav className="mb-4">
        <Link 
          href="/book-appointment" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book an Appointment
        </Link>
      </nav>
      <p>Welcome to our barbershop. Click above to book your appointment!</p>
    </div>
  )
}