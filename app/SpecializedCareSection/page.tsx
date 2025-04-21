"use client";
import Image from "next/image";

export default function SpecializedCareSection() {
  return (
    <section className="px-4 py-10 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Get specialized health care
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Haleon Oral Health Care */}
        <div className="bg-blue-50 rounded-xl p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Haleon Oral Health Care
            </h3>
            <p className="text-blue-900 mt-1">
              Your ultimate guide to oral health
            </p>
          </div>
          <Image
            src="/HealthServies/sensodyne.webp" // Place this image in public/sensodyne.png
            alt="Sensodyne Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Card 2 - BOLO Health */}
        <div className="bg-pink-100 rounded-xl p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              BOLO Health for Youth
            </h3>
            <p className="text-blue-900 mt-1">
              Family planning & reproductive health services
            </p>
          </div>
          <Image
            src="/HealthServies/bolo.webp" // Place this image in public/bolo.png
            alt="BOLO Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
