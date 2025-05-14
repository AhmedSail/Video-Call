import React, { useState } from "react";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

const qesData = [
  {
    id: 1,
    question: "How to boost productivity at work?",
    answer: [
      {
        id: 1,
        text: "Making your workday more productive can lead to better results. Here are some tips: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 2,
    question: "What are the best books to read for personal growth?",
    answer: [
      { id: 1, text: "1. Atomic Habits – Helps build positive habits." },
      {
        id: 2,
        text: "2. The 7 Habits of Highly Effective People – Focuses on successful life principles.",
      },
      {
        id: 3,
        text: "3. Man’s Search for Meaning – Explores finding purpose in life.",
      },
      {
        id: 4,
        text: "4. How to Win Friends and Influence People – Enhances communication and social skills.",
      },
    ],
  },
  {
    id: 3,
    question: "How to maintain a healthy work-life balance?",
    answer: [
      {
        id: 1,
        text: "1. Set clear boundaries between work and personal life.",
      },
      { id: 2, text: "2. Exercise regularly to reduce stress." },
      { id: 3, text: "3. Make time for yourself to relax and recharge." },
      { id: 4, text: "4. Learn to say no to avoid overcommitment." },
      { id: 5, text: "5. Separate work from home life to prevent burnout." },
    ],
  },
  {
    id: 4,
    question: "How to stay motivated on a challenging project?",
    answer: [
      {
        id: 1,
        text: "1. Break the project into smaller tasks to make progress manageable.",
      },
      { id: 2, text: "2. Celebrate small wins to boost motivation." },
      { id: 3, text: "3. Seek support from colleagues or mentors." },
      { id: 4, text: "4. Keep your workspace organized to enhance focus." },
      {
        id: 5,
        text: "5. Stay focused on the end goal to maintain motivation.",
      },
    ],
  },
];

const Questions = () => {
  const [open, setOpen] = useState(null);

  const toggleClick = (index) => {
    setOpen(open === index ? null : index); // تغيير الحالة بناءً على العنصر المفتوح
  };

  return (
    <div className="container">
      <div className="md:w-[700px] mx-auto mt-52">
        <h1 className="font-bold text-6xl text-center">
          You Have Questions, We Have Answers!
        </h1>
        <p className="text-gray-500 text-center mt-4">
          Have a question in mind? Check out the most common ones below.
        </p>
      </div>

      {/* قائمة الأسئلة والأجوبة */}
      <div className="md:w-[700px] mx-auto mt-10">
        {qesData.map((item, index) => (
          <div key={index} className="p-5 bg-white shadow-md mb-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">{item.question}</h2>
              <button onClick={() => toggleClick(index)}>
                {open === index ? (
                  <RiArrowUpWideFill />
                ) : (
                  <RiArrowDownWideFill />
                )}
              </button>
            </div>
            {open === index && (
              <div className="text-gray-600 mt-2">
                {item.answer.map((i) => (
                  <p key={i.id}>{i.text}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center mt-16 text-gray-500">
        Still have questions on your mind?{" "}
        <a href="#" className="text-blue-700">
          Reach out
        </a>{" "}
        to us for personalized assistance.
      </p>
    </div>
  );
};

export default Questions;
