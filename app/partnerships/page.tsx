"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Partnerships() {
  const [selectedPartner, setSelectedPartner] = useState<{
    id: number;
    title: string;
    description: string;
    logo: string;
    details: {
      content: string;
      date: string;
      stats: string;
      highlights: string[];
    };
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partnerships = [
    {
      id: 1,
      title: "Pro Pakistani partners with oladoc",
      description: "Bringing premium healthcare news to tech-savvy audiences",
      logo: "/Partnerships/pro-pakistani.png",
      details: {
        content: "Pro Pakistani, the leading tech news portal, has partnered with oladoc to deliver cutting-edge healthcare technology news to its 2M+ monthly readers. This collaboration will feature weekly health tech updates, doctor interviews, and digital healthcare innovations.",
        date: "January 15, 2023",
        stats: "Reached 1.2M users in first month",
        highlights: [
          "Weekly health tech columns",
          "Exclusive doctor interviews",
          "Digital healthcare innovation spotlights"
        ]
      }
    },
    {
      id: 2,
      title: "The Nation features oladoc initiative",
      description: "National newspaper highlights digital healthcare transformation",
      logo: "/Partnerships/the-nation.png",
      details: {
        content: "The Nation's health editorial team has launched a monthly column featuring oladoc's digital healthcare initiatives. The series focuses on telemedicine success stories, patient experiences, and interviews with top doctors using the platform.",
        date: "March 3, 2023",
        stats: "Featured in 6 print editions",
        highlights: [
          "Monthly healthcare columns",
          "Telemedicine case studies",
          "Doctor and patient interviews"
        ]
      }
    },
    {
      id: 3,
      title: "Business Recorder analyzes oladoc growth",
      description: "Financial publication covers healthcare platform's expansion",
      logo: "/Partnerships/business-recorder.png",
      details: {
        content: "Business Recorder's tech analysts published an in-depth report on oladoc's business model and market expansion strategy. The feature includes interviews with company executives and data on Pakistan's growing digital health sector.",
        date: "May 22, 2023",
        stats: "12-page special report",
        highlights: [
          "Market analysis report",
          "Executive interviews",
          "Growth metrics and projections"
        ]
      }
    },
    {
      id: 4,
      title: "Dawn News covers oladoc health campaign",
      description: "Leading English daily features nationwide health awareness drive",
      logo: "/Partnerships/dawn-news.png",
      details: {
        content: "Dawn News partnered with oladoc for a 3-month health awareness campaign, publishing weekly articles on preventive healthcare. The series included contributions from 45 specialists and reached over 3M readers across print and digital.",
        date: "July 10, 2023",
        stats: "12-week featured series",
        highlights: [
          "Preventive healthcare focus",
          "45 specialist contributors",
          "Multi-platform distribution"
        ]
      }
    },
    {
      id: 5,
      title: "Geo News televises oladoc health segments",
      description: "Prime time health discussions with top medical experts",
      logo: "/Partnerships/geo-news.png",
      details: {
        content: "Geo News's morning show 'Health Today' now features weekly segments with oladoc doctors. The partnership brings live consultations and health Q&A sessions to television audiences, reaching 8M weekly viewers.",
        date: "September 5, 2023",
        stats: "32 episodes aired",
        highlights: [
          "Weekly TV segments",
          "Live doctor consultations",
          "Audience Q&A sessions"
        ]
      }
    },
    {
      id: 6,
      title: "ARY Digital partners for health awareness",
      description: "National network launches digital health education program",
      logo: "/Partnerships/ary-digital.png",
      details: {
        content: "ARY Digital has collaborated with oladoc to produce a 13-episode health education series. Each episode focuses on a different specialty, with demonstrations of the oladoc platform and patient success stories.",
        date: "November 18, 2023",
        stats: "Averaged 4.2M viewers per episode",
        highlights: [
          "13-episode series",
          "Specialty-focused content",
          "Platform demonstrations"
        ]
      }
    }
  ];

  const openModal = (partner: { id: number; title: string; description: string; logo: string; details: { content: string; date: string; stats: string; highlights: string[] } }) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            #<span className="text-blue-600">p</span>@pakistani
          </h1>
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <span>news</span>
            <span>channels</span>
            <span>partners</span>
            <span>coverage</span>
          </div>
        </motion.div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Partner Logo */}
              <div className="p-6 pb-0">
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.title}
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Partner Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  {partner.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 font-bold text-sm flex items-center"
                  onClick={() => openModal(partner)}
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={closeModal}
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {selectedPartner && (
                  <div className="p-6">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Partner Logo */}
                    <div className="relative h-20 w-48 mb-6">
                      <Image
                        src={selectedPartner.logo}
                        alt={selectedPartner.title}
                        fill
                        className="object-contain object-left"
                      />
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedPartner.title}
                    </h2>
                    
                    <div className="flex items-center text-gray-500 mb-6">
                      <span>{selectedPartner.details.date}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium text-blue-600">{selectedPartner.details.stats}</span>
                    </div>

                    <p className="text-gray-700 mb-6">{selectedPartner.description}</p>
                    <p className="text-gray-700 mb-8">{selectedPartner.details.content}</p>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Partnership Highlights</h3>
                      <ul className="space-y-3">
                        {selectedPartner.details.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={closeModal}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}