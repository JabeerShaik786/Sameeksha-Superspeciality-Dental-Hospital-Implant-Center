"use client";

import { UserRound } from "lucide-react";

export default function AboutDoctor() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target =
      document.querySelector("#contact") ||
      document.querySelector("#appointment") ||
      document.querySelector("#about");
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="doctor"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative Background: Soft Tooth Outline */}
      <div
        className="absolute right-[-2%] top-[12%] w-[380px] h-[460px] opacity-[0.06] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-[#0AA8DE]"
          strokeWidth="1.6"
        >
          <path d="M20,35 C20,15 35,8 50,15 C65,8 80,15 80,35 C80,55 75,70 70,105 C68,112 60,112 56,98 C53,86 47,86 44,98 C40,112 32,112 30,105 C25,70 20,55 20,35 Z" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT SIDE: Content & Typography ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small label: ABOUT OUR DOCTOR */}
            <div className="mb-3">
              <span className="relative inline-block text-xs md:text-sm font-extrabold tracking-[0.16em] uppercase pb-1 text-[#0f2942]">
                <span className="relative text-[#E71B1E]">
                  ABOUT
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0AA8DE] rounded-full" />
                </span>
                <span className="ml-2 font-bold text-[#0f2942]">OUR DOCTOR</span>
              </span>
            </div>

            {/* Main heading: Expert Care for Healthier Smiles */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f2942] tracking-tight leading-[1.18] mb-3">
              Expert Care for<br className="hidden sm:inline" />{" "}
              <span className="text-[#E71B1E]">Healthier Smiles</span>
            </h2>

            {/* Tagline: Experienced. Compassionate. Dedicated to Your Smile. */}
            <p className="text-base sm:text-lg font-semibold text-[#0AA8DE] mb-4 tracking-tight">
              Experienced. Compassionate. Dedicated to Your Smile.
            </p>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl">
              With years of experience in advanced dental care, our doctor is
              committed to providing personalized, gentle, and high-quality
              treatment. Every patient is cared for with expertise, compassion,
              and a focus on achieving a healthy, confident smile.
            </p>

            {/* Primary button: Know More → */}
            <div>
              <a
                href="#about"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E71B1E] hover:bg-[#c41215] text-white font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Know More</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE: Doctor Image Placeholder & Decorative Elements ================= */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] flex items-center justify-center">
              
              {/* Decorative 1: Soft Light-Blue Circular / Curved Background Shape */}
              <div
                className="absolute inset-0 -m-4 sm:-m-6 rounded-full bg-gradient-to-tr from-[#0AA8DE]/15 via-[#0AA8DE]/8 to-transparent -z-10 blur-xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#0AA8DE]/10 -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Decorative 2: Small Blue Decorative Dots Grid */}
              <div
                className="absolute -top-6 -left-4 sm:-left-8 w-24 h-24 grid grid-cols-5 gap-2.5 opacity-40 pointer-events-none -z-10"
                aria-hidden="true"
              >
                {[...Array(25)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#0AA8DE]"
                  />
                ))}
              </div>

              {/* Decorative 3: Thin Red Curved Accent Line */}
              <svg
                className="absolute -bottom-6 -left-6 sm:-left-10 w-28 sm:w-36 h-20 pointer-events-none -z-10"
                viewBox="0 0 140 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 70 Q 70 10 130 50"
                  stroke="#E71B1E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Doctor Image Placeholder Container */}
              <div className="relative w-full aspect-[4/5] min-h-[400px] sm:min-h-[460px] lg:min-h-[490px] rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#0AA8DE]/12 via-[#0AA8DE]/5 to-[#0AA8DE]/15 border-2 border-dashed border-[#0AA8DE]/40 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center p-8 text-center overflow-hidden group">
                
                {/* Subtle internal background glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/60 blur-2xl pointer-events-none" />

                {/* Doctor Silhouette / Medical Avatar Placeholder Icon */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-md border-2 border-[#0AA8DE]/30 flex items-center justify-center mb-6 text-[#0AA8DE]">
                  <UserRound className="w-14 h-14 sm:w-16 sm:h-16 text-[#0AA8DE]/75" strokeWidth={1.5} />
                </div>

                {/* Badge Label */}
                <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#0AA8DE]/30 shadow-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E71B1E] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0f2942]">
                    Doctor Image Placeholder
                  </span>
                </div>

                {/* Dimension hint / helper text */}
                <p className="relative z-10 text-xs text-slate-500 font-medium max-w-[240px] leading-relaxed">
                  Reserved frame for doctor portrait photograph
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
