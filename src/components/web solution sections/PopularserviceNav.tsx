import React from "react";
import { Link } from "react-router-dom"; // if Next.js -> use: import Link from "next/link";

const PopularServices = () => {
  const services = [
    [
      { name: "Network And Wifi Services", href: "/network-wifi" },
      { name: "Website Development Company In Dubai", href: "/website-development" },
      { name: "Laptop Repair In Dubai", href: "/laptop-repair" },
    ],
    [
      { name: "نظام ميكنة (أتمتة) المنازل: تبني مستقبل الحياة الذكية", href: "/home-automation" },
      { name: "Data Recovery Services In Dubai", href: "/data-recovery-dubai" },
    ],
    [
      { name: "اصلاح اي فون في دبي", href: "/iphone-repair" },
      { name: "Buy Back Trade In UAE", href: "/buy-back" },
      { name: "Data Recovery Abu Dhabi", href: "/data-recovery-abu-dhabi" },
      { name: "Computer Repair Service In Dubai", href: "/computer-repair" },
    ],
    [
      { name: "صلاح الكمبيوتر المحمول", href: "/laptop-service" },
      { name: "iMac Repair Dubai", href: "/imac-repair" },
    ],
    [
      { name: "إعادة البيانات", href: "/data-restore" },
      { name: "Additional Services", href: "/additional-services" },
    ],
    [
      { name: "خدمات اصلاح البيانات المتقدمة في دبي", href: "/advanced-data-recovery" },
      { name: "iPad Repair In Dubai", href: "/ipad-repair" },
    ],
  ];

  // helper: detect Arabic
  const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

  return (
    <aside className="relative w-full border-l-[5px] border-[#003B5A] pl-6">
      <h3 className="text-lg font-bold text-[#003B5A] uppercase mb-6 tracking-wide text-center">
        Popular Services
      </h3>
      <ul className="space-y-6 text-center text-gray-800">
        {services.map((group, index) => (
          <li key={index} className="space-y-1">
            {group.map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className={`transition block ${
                  isArabic(service.name)
                    ? "text-[#003B5A] font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {service.name}
              </Link>
            ))}
            {/* divider except last */}
            {index < services.length - 1 && (
              <div className="border-t border-gray-300 mt-4"></div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PopularServices;
