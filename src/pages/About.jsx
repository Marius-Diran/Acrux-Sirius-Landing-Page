import React from "react";
import Button from "../components/Button";
import robotIcon from "../assets/icons8-robot-100.png";
import cellphoneIcon from "../assets/icons8-cellphone-100.png";
import analyticsIcon from "../assets/icons8-analytics-100.png";
import cityIcon from "../assets/icons8-city-buildings-96.png";

const aboutCards = [
  {
    icon: robotIcon,
    title: "AI Solutions",
    description:
      "Custom artificial intelligence tools and automation systems that transform how your business operates day-to-day.",
  },
  {
    icon: cellphoneIcon,
    title: "Mobile & Web Apps",
    description:
      "Accessible, beautiful digital products built for real users — fast, reliable, and designed to scale.",
  },
  {
    icon: analyticsIcon,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow your brand — social media, SEO, content, and performance marketing.",
  },
  {
    icon: cityIcon,
    title: "Urban Tech",
    description:
      "Industrial revolution through technology — smart city solutions and digital transformation for urban development.",
  },
];

const About = () => {
  return (
    <section className="relative mt-20 sm:mt-30">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-md font-bold text-mint">WHAT WE DO</h1>
          <h2 className="text-3xl font-bold mt-4 text-text-primary">
            Digital Solutions Built for{" "}
            <span className="text-text-secondary sm:block">Tomorrow</span>
          </h2>
          <p className="text-md mt-6 text-text-muted max-w-2xl sm:text-lg">
            We build capacity through technology — from AI-powered apps to
            digital marketing strategies that drive real growth.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutCards.map((card, idx) => {
              return (
                <div
                  className="about-card bg-card-bg border border-solid border-card-border p-6 rounded-lg"
                  key={idx}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-12 h-12 mb-4 bg-[#8354F233] p-2 rounded-lg"
                  />
                  <h3 className="text-xl font-bold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="text-text-muted mt-2">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
