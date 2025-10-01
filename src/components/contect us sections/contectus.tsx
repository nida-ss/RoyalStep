import React from "react";
import { Link } from "react-router-dom";
const ContactSection = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-pink-50 via-blue-50 to-orange-50">
      {/* Background decorative blobs */}
      <div className="absolute w-[250px] h-[250px] left-[10%] top-[10%] bg-[#FF8952] rounded-full blur-[150px] opacity-80"></div>
      <div className="absolute w-[200px] h-[200px] right-[5%] top-[20%] bg-[#FF3B30] rounded-full blur-[130px] opacity-80"></div>
      <div className="absolute w-[180px] h-[180px] left-[40%] bottom-[5%] bg-[#FFD54F] rounded-full blur-[120px] opacity-90"></div>

      <div className="relative container mx-auto px-4">
        {/* ✅ align items top so form doesn’t stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If You Have Any Question, Fill Out The Form Please. Feel Free To
              Contact Us If You Want To Ask Queries Or Any Request From Our
              Services. We Are 24/7 Available For Our Customers!
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <Link to={'/services'}><button className="bg-[#003B5A] text-white px-5 py-2 rounded-md hover:bg-[#002f46] transition">
                See Services
              </button></Link>
              <button className="bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300 transition">
                More
              </button>
            </div>

            {/* Timings & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">OUR TIMINGS</h3>
                <p>Monday: 8:00 AM To 5:00 PM</p>
                <p>Tuesday: 8:00 AM To 5:00 PM</p>
                <p>Wednesday: 8:00 AM To 5:00 PM</p>
                <p>Thursday: 8:00 AM To 5:00 PM</p>
                <p>Friday: 8:00 AM To 5:00 PM</p>
                <p>Saturday: 8:00 AM To 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">CONTACT DETAILS</h3>
                <p>
                  Marsisi Drive St, DAMAC <br />
                  Business Tower 907 - Business Bay - Dubai UAE
                </p>

                <h3 className="font-bold mt-4 mb-2">DROPOFF LOCATION</h3>
                <p>
                  Al Barsha Business Centre - <br />
                  Al Barsha - Al Barsha 1 - Dubai
                </p>
              </div>
            </div>

            {/* Pickup + Contact */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">PICKUP LOCATION</h3>
              <p>
                Al Barsha Business Centre - <br />
                Al Barsha - Al Barsha 1 - Dubai
              </p>

              <div className="mt-4 space-y-2">
                <p>📞 Phone: 04 3420080, 050 5088819</p>
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:Support@Royalstep.Ae"
                    className="text-blue-600 hover:underline"
                  >
                    Support@Royalstep.Ae
                  </a>
                </p>
                <p>📍 Check Location</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gradient-to-br from-white/95 to-white/80 shadow-lg rounded-xl p-6 border border-gray-200 h-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Repair Services
            </h3>
            <form
              action="https://formsubmit.co/support@royalstep.ae"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="device"
                placeholder="Device Name"
                className="w-full border rounded-md p-3"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-full border rounded-md p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full border rounded-md p-3"
                required
              />
              <input
                type="text"
                name="number"
                placeholder="Number*"
                className="w-full border rounded-md p-3"
                required
              />
              <textarea
                name="message"
                placeholder="SMS*"
                rows="3"
                className="w-full border rounded-md p-3"
                required
              ></textarea>

              {/* Hidden config */}
              <input
                type="hidden"
                name="_subject"
                value="New Repair Service Request!"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="bg-[#003B5A] text-white px-6 py-3 rounded-md w-full hover:bg-[#002f46] transition"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
