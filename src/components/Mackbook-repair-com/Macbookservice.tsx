// src/pages/ServicesAll/Mackbook-repair-dubai.tsx
import React from "react";
import Popularsidbar from "../../components/web solution sections/PopularserviceNav";

export default function MacbookRepairDubai() {
  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="md:col-span-2">
        {/* Top Image */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
          <img
            src="/macbookrepair.webp"
            alt="Macbook Repair Dubai"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Macbook Repair Dubai
        </h1>

        {/* Paragraphs */}
        <p className="text-gray-700 leading-relaxed mb-4">
          You're buzzing along, firing off emails, and zooming through your
          digital world on your MacBook. Suddenly, disaster strikes...
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          That's where the need for professional Macbook repair services in
          Dubai comes in...
        </p>

        {/* Button */}
        <button className="bg-[#003B5A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#004d73] transition mb-10">
          Book Your Repair
        </button>

        {/* --- Our Services Section --- */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* All service cards inline */}
          {/* Screen */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Screen Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Screen Repair/Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Do you have a MacBook with a cracked or broken screen? You're in
                the right place. Get your MacBook back in working order with our
                MacBook repair Dubai service...
              </p>
            </div>
          </div>
          {/* Camera */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Camera Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Camera Repair
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A faulty camera or one that won’t turn on can ruin your video
                calls and meetings. Our MacBook repair Dubai team...
              </p>
            </div>
          </div>
          {/* Trackpad */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Trackpad Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Trackpad Repair/Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Is your MacBook trackpad not working properly? Our service can
                fix sensitivity issues or damage so it works smoothly again...
              </p>
            </div>
          </div>
          {/* Power Jack */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Power Jack"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Power Jack
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If your MacBook isn’t charging properly, it may be the power
                jack. We diagnose and fix faulty connections...
              </p>
            </div>
          </div>
          {/* RAM */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook RAM Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook RAM Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Boost your MacBook’s performance with high-speed RAM upgrades
                installed by our experts...
              </p>
            </div>
          </div>
          {/* Thermal Paste */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Thermal Paste Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Thermal Paste Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Overheating? We replace old thermal paste with high-quality
                compound to keep your MacBook cooler and faster...
              </p>
            </div>
          </div>
          {/* USB */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook USB Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook USB Repair/Replace
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Damaged USB ports? We repair or replace them to restore full
                connectivity...
              </p>
            </div>
          </div>
          {/* GPU */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Video Card Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Video Card Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We replace faulty video cards to restore graphics performance
                and fix display issues...
              </p>
            </div>
          </div>
          {/* Virus Removal */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Virus Removal"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Virus Removal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our virus removal service secures your MacBook by eliminating
                malware and unwanted software...
              </p>
            </div>
          </div>
          {/* WiFi */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook WiFi Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook WiFi Repair
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We fix WiFi issues, whether hardware or software, to restore
                stable and fast internet connections...
              </p>
            </div>
          </div>
          {/* Keyboard */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Keyboard Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Keyboards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether single key replacement or full keyboard, we restore your
                typing comfort and efficiency...
              </p>
            </div>
          </div>
          {/* Speakers */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Speaker Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Speaker Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Distorted or no sound? We replace faulty speakers so you can
                enjoy crystal-clear audio...
              </p>
            </div>
          </div>
          {/* Bluetooth */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Bluetooth Repair"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Bluetooth Repair
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We fix Bluetooth connectivity problems so you can pair
                headphones, speakers, and devices easily...
              </p>
            </div>
          </div>
          {/* SSD/HDD */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook SSD/HDD Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook SSD/HDD Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Need more storage or speed? Our SSD/HDD replacements upgrade
                your MacBook’s performance and capacity...
              </p>
            </div>
          </div>
          {/* Motherboard */}
          <div className="rounded-lg shadow bg-gray-50 overflow-hidden">
            <img
              src="/servicesmacbook.webp"
              alt="MacBook Motherboard Replacement"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#003B5A] mb-2">
                MacBook Motherboard Replacement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From diagnostics to full replacements, our experts handle all
                motherboard issues to restore full functionality...
              </p>
            </div>
          </div>
        </div>

        {/* --- How to Reach Section --- */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Reach Royal Step for MacBook Screen Repair Dubai
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Customers visiting Royal Step for MacBook Repair Abu Dhabi benefit from
          our multiple convenient service options, ensuring a hassle-free
          experience. You can either visit our store or enjoy our MacBook Repair
          Abu Dhabi services from the comfort of your home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gray-100  p-6 shadow-sm text-center">
            <div className="mx-auto mb-4  flex items-center justify-center  ">
             <img src="/Icon-03.webp" alt="" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Carry-in repair</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              For those who need a quick solution, just schedule an advance call
              to the store or walk in. No appointment required!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 shadow-sm text-center">
            <div className="mx-auto mb-4  flex items-center justify-center ">
            <img src="/Icon-04.webp" alt="" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Pickup & Delivery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We offer pickup and delivery services in Dubai for a small
              additional fee. Great for busy customers who can’t visit the store.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100  p-6 shadow-sm text-center">
            <div className="mx-auto mb-4 flex items-center justify-center ">
              <img src="/Icon-05.webp" alt="" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Courier Service</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are in Abu Dhabi, Sharjah, or nearby, send your device by
              courier. We’ll repair it and return it at the earliest.
            </p>
          </div>
        </div>

{/* --- Featured Services --- */}
<h2 className="text-2xl font-bold text-gray-900 mb-6">
  Featured Services
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Card 1 */}
  <div className="bg-[#ebebeb] p-6 shadow-sm flex flex-col items-center text-center rounded-lg">
    {/* Icon/Image */}
    <div className="w-16 h-16 mb-4 flex items-center justify-center">
      <img
        src="/common-02.webp"
        alt="MacBook Screen Replacement"
        className=" object-contain"
      />
    </div>
    {/* Text */}
    <h3 className="font-semibold text-lg mb-2">
      MacBook Screen Replacement
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      We offer MacBook screen replacement services for cracked or damaged
      screens. AppleCare+ users may be eligible for discounts.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#ebebeb] p-6 shadow-sm flex flex-col items-center text-center rounded-lg">
    {/* Icon/Image */}
    <div className="w-14 h-14 mb-4 flex items-center justify-center">
      <img
        src="/common-01.webp"
        alt="Pickup & Delivery"
        className=" object-contain"
      />
    </div>
    {/* Text */}
    <h3 className="font-semibold text-lg mb-2">Pickup & Delivery</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Convenient pickup & delivery service for MacBook repairs. Stay stress-free
      while we handle the logistics.
    </p>
  </div>
</div>

</div>


      {/* Sidebar with Sticky */}
      <div className="md:col-span-1">
        <div className="sticky top-24">
          <Popularsidbar />
        </div>
      </div>
    </div>
  );
}
