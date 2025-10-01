import React, { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: "google-rating.svg",
    value: 4.5,
    suffix: "", // optional suffix
    label: "Our Official Rating On Google.",
  },
  {
    icon: "repair.svg",
    value: 10000,
    suffix: "+",
    label: "Total Repairing Completed.",
  },
  {
    icon: "business.svg",
    value: 15,
    suffix: "+",
    label: "Businesses We’re Running.",
  },
  {
    icon: "award.svg",
    value: 90,
    suffix: "%",
    label: "CSAT All Over Countries We Serve.",
  },
];

// ✅ CountUp hook with formatting
const useCountUp = (
  end: number,
  start: number = 0,
  duration: number = 2000
) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            let startTime: number | null = null;
            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(progress * (end - start) + start);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.disconnect(); // only once
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }
    return () => observer?.disconnect();
  }, [end, start, duration, isVisible]);

  // Format number (e.g., 10000 → 10k)
  const formatValue = (num: number) => {
    if (end >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    if (end % 1 !== 0) {
      return num.toFixed(1); // decimals like 4.5
    }
    return Math.floor(num).toString();
  };

  return { ref, displayValue: formatValue(count) };
};

const Achievements: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-tr from-white via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12 uppercase tracking-wide relative inline-block">
          Our Achievement
          <span className="block h-1 w-20 mx-auto mt-3 bg-gradient-to-r from-[#0088FF] via-[#FB6609] to-[#8A38F5] rounded-full"></span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {achievements.map((item, index) => {
            const { ref, displayValue } = useCountUp(item.value);
            return (
              <div
                key={index}
                className="relative w-full max-w-[320px] rounded-2xl p-[2px] transition-transform duration-300 hover:scale-105"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0088FF] via-[#FB6609] via-[#FC4798] via-[#5BBBA9] to-[#8A38F5] bg-[length:300%_300%] animate-borderMove"></div>

                {/* Inner Card */}
                <div className="relative bg-white rounded-2xl shadow-lg w-full h-full flex flex-col items-center justify-center p-10 transition-all duration-300 hover:shadow-2xl">
                  {/* Icon with gradient circle */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#0088FF]/10 via-[#FC4798]/10 to-[#8A38F5]/10 mb-6">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Animated Value */}
                  <h3
                    ref={ref}
                    className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#0088FF] via-[#FB6609] to-[#8A38F5] bg-clip-text text-transparent"
                  >
                    {displayValue}
                    {item.suffix}
                  </h3>

                  {/* Label */}
                  <p className="text-gray-600 mt-3 text-base sm:text-lg font-medium leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-borderMove {
          animation: borderMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
