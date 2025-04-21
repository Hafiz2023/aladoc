import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

const services = [
  {
    title: 'Consult Online Now',
    desc: 'Instantly connect with Specialists through Video call.',
    image: '/HealthServies/online-now-home-2x_highly-compressed.webp',
    badge: '35 Doctors Online Now',
    badgeColor: 'bg-orange-500',
    live: true,
  },
  {
    title: 'In-Clinic Appointments',
    desc: "Book an In-Person visit to doctor's clinic.",
    image: '/HealthServies/home-appt-2xx_compressed.webp',
  },
  {
    title: 'Laboratory Tests',
    desc: 'Avail Exclusive discounts on lab tests.',
    image: '/HealthServies/home-lab-2x_compressed.webp',
  },
  {
    title: 'Procedures & Surgeries',
    desc: 'Plan your surgeries at discounted rates.',
    image: '/HealthServies/home-surgeries-2xx_compressed.webp',
  },
  {
    title: 'Medicines',
    desc: 'Know your medicines better',
    image: '/HealthServies/medicine-home-card.webp',
  },
];

export default function HealthServices() {
  return (
    <section className="px-4 py-10 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
        <div className="relative w-full aspect-[4/3] overflow-hidden group">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
    quality={85}
  />
  {item.badge && (
    <div className={`absolute bottom-0 left-0 right-0 px-3 py-1.5 text-xs text-white font-medium ${item.badgeColor} flex items-center justify-center gap-1.5`}>
      {item.live && (
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      )}
      {item.badge}
    </div>
  )}
</div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
