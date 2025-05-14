import React from "react";
import person from "../../assets/images.jpeg";
const Reviews = () => {
  return (
    <div>
      <div className="container mt-32 md:mt-0">
        <div className="relative">
          {/* خلفية الجريدينت */}
          <div
            className="absolute top-36 blur-2xl w-full h-[1300px] md:h-[300px] mx-auto shadow-2xl rounded-3xl opacity-30"
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #440bff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>

          {/* المحتوى الأمامي */}
          <div className="relative z-10 text-center">
            <p className="font-semibold text-gray-500">
              3,421 people loved our amazing services
            </p>
            <h1 className="text-4xl font-semibold mb-10">
              See what our awesome clients have to say
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 bg-white shadow-md rounded-xl">
                <p className="mb-10">⭐⭐⭐</p>
                <p className="text-xl">
                  “Absolutely amazing! Their services exceeded my expectations.
                  I'm thrilled with the results.”
                </p>
                <div className="flex items-center mt-24">
                  <img
                    src={person}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">Michael Kim</h1>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white shadow-md rounded-xl">
                <p className="mb-10">⭐⭐⭐⭐⭐</p>
                <p className="text-xl">
                  “Impressed beyond words! Their professionalism and attention
                  to detail are unmatched. I highly recommend them.”
                </p>
                <div className="flex items-center mt-16">
                  <img
                    src={person}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">Melissa Reynolds</h1>
                    <p className="text-gray-500">UX Designer</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white shadow-md rounded-xl">
                <p className="mb-10">⭐⭐⭐⭐</p>

                <p className="text-xl">
                  “Outstanding experience! Their support team is exceptional and
                  the quality of their work is top-notch. I'm a delighted
                  customer.”
                </p>
                <div className="flex items-center mt-16">
                  <img
                    src={person}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">Sarah Morgan</h1>
                    <p className="text-gray-500">Content Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold mt-10 underline hover:no-underline hover:scale-105 transition-all duration-300 text-center line-clamp-5 mb-10">
              <a href="#">Check all 3,421 reviews</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
