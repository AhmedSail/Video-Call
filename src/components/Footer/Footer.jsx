import React from "react";

const links = [
  {
    id: 1,
    title: "Discover",
    subTitls: [
      { id: 1, a: "About Us" },
      { id: 2, a: "Our Services" },
      { id: 3, a: "Testimonials" },
      { id: 4, a: "Careers" },
    ],
  },
  {
    id: 2,
    title: "Assistance",
    subTitls: [
      { id: 1, a: "Help Center" },
      { id: 2, a: "Return Policy" },
      { id: 3, a: "Terms of Service" },
      { id: 4, a: "Privacy Policy" },
    ],
  },
  {
    id: 3,
    title: "Explore",
    subTitls: [
      { id: 1, a: "Blog Articles" },
      { id: 2, a: "Guides & Tutorials" },
      { id: 3, a: "Partner with Us" },
      { id: 4, a: "Contact Us" },
    ],
  },
  {
    id: 4,
    title: "Connect",
    subTitls: [
      { id: 1, a: "Community Forum" },
      { id: 2, a: "Events & Webinars" },
      { id: 3, a: "Social Media" },
      { id: 4, a: "Newsletter" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 mt-10">
      <div className="container mx-auto px-6 relative ">
        {/* Background Effect */}
        <div
          className="absolute inset-0 opacity-30 blur-lg h-[150px]"
          style={{
            background:
              "linear-gradient(90deg, rgb(68, 255, 154) -0.55%, rgb(68, 176, 255) 22.86%, rgb(139, 68, 255) 48.36%, rgb(255, 102, 68) 73.33%, rgb(235, 255, 112) 99.34%)",
          }}
        ></div>

        {/* Subscription Section */}
        <div className="relative overflow-hidden text-center bg-gray-900 rounded-3xl lg:text-left shadow-lg p-6 lg:py-8 lg:px-14 ">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h5 className="max-w-md mx-auto text-3xl font-bold text-white xl:max-w-xl lg:mx-0">
              Get exclusive offers and updates directly to your inbox
            </h5>
            <div className="flex-1 mt-7 lg:mt-0 lg:ml-8">
              <form action="#" method="POST">
                <div className="md:flex">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 rounded-t-xl md:rounded-l-xl focus:ring-white focus:border-white "
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 text-base font-bold text-gray-900 bg-white border border-transparent xl:px-16 md:w-auto focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-b-xl md:rounded-r-xl transition-all duration-200 hover:bg-gray-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-white md:text-center text-start">
          {links.map((link) => (
            <div key={link.id}>
              <h2 className="font-bold text-xl">{link.title}</h2>
              <ul className="mt-4 space-y-2">
                {link.subTitls.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all"
                    >
                      {sub.a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
