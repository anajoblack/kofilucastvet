"use strict";
import React from "react";
import { GraduationCap, MapPin, Award, Wrench } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      icon: MapPin,
      value: "9",
      label: "Districts & Municipalities",
      description: "Complete regional TVET coverage across Oti Region",
    },
    {
      icon: GraduationCap,
      value: "15+",
      label: "TVET Training Providers",
      description: "Accredited institutions and technical institutes",
    },
    {
      icon: Wrench,
      value: "30+",
      label: "Trades & Practical Courses",
      description: "From engineering to agriculture and digital skills",
    },
    {
      icon: Award,
      value: "#1",
      label: "National Best School",
      description: "41st National Farmers' Day Best Agric School Award",
    },
  ];

  return (
    <section className="bg-[#022852] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors shadow-sm group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#f7b500]/20 flex items-center justify-center text-[#f7b500] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#ffd000] mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-white/70 mt-2">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
