// Star background moved to a global component (src/components/StarField.jsx)
import React from "react";
import Button from "../components/Button";
import heroImage from "../assets/AcruxSiriusHeroimg.png";

const heroCards = [
  {
    numbers: "100+",
    title: "Clients Served",
  },
  {
    numbers: "98%",
    title: "Satisfaction Rate",
  },
  {
    numbers: "3+",
    title: "Years in Tech",
  },
  {
    numbers: "24/7",
    title: "Support Available",
  },
];

const Hero = () => {
  return (
    <section className="relative mt-40 sm:mt-60 z-10">
      {/* Hero Section Contents */}
      <div className="container mx-auto px-6 text-white">
        <div className="flex items-center gap-3 mb-4 mx-auto w-fit py-1 px-6 rounded-full bg-[#2d2355] border-2 border-solid border-[#463b73] animate-smooth-bounce">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <h1 className="font-bold text-text-secondary">
            AI & Digital Solutions - Akure, NG
          </h1>
        </div>
        <h1 className="text-center text-3xl leading-relaxed sm:text-5xl sm:leading-tight bg-linear-to-r from-purple-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
          <span className="text-text-primary">The </span>Leading Light{" "}
          <span className="block text-text-primary">
            of Digital Transformation
          </span>
        </h1>
        <p className="text-center text-lg sm:text-xl mt-6 max-w-2xl mx-auto text-text-muted">
          Solving everyday problems through accessible digital solutions — AI,
          robotics, digital marketing, and urban development for the next
          generation.
        </p>
        <div className="flex flex-col justify-center mt-7 sm:flex-row items-center gap-4">
          <Button className="hover:shadow-[0, 0, 50px, rgba(131, 84, 242, 0.6)] hover:-translate-y-0.5 transition-transform duration-300">
            Explore Our Solutions
          </Button>
          <button className="ml-4 bg-transparent border border-solid border-text-primary text-text-primary rounded-full px-6 py-3 hover:bg-[#2d2355] hover:border-[#cd93ff] transition-colors duration-300">
            Learn More
          </button>
        </div>

        <div className="w-full mt-10 mb-10 sm:w-4/5 sm:mx-auto">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="mx-auto w-fit mt-20 animate-smooth-bounce sm:scale-110 lg:scale-125 xl:scale-150 sm:mt-40 origin-center">
          <svg
            width="120"
            height="140"
            viewBox="0 0 120 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="60"
              cy="115"
              rx="30"
              ry="10"
              fill="rgba(131,84,242,0.15)"
            />
            <path
              d="M60 10 C60 10 35 50 35 85 L60 95 L85 85 C85 50 60 10 60 10Z"
              fill="#F0EEF8"
            />
            <circle
              cx="60"
              cy="55"
              r="10"
              fill="#1D1B3A"
              stroke="#8354F2"
              stroke-width="2"
            />
            <circle cx="60" cy="55" r="5" fill="#8354F2" opacity="0.5" />
            <path d="M35 85 L18 105 L35 98Z" fill="#8354F2" />
            <path d="M85 85 L102 105 L85 98Z" fill="#8354F2" />
            <path
              d="M45 96 C45 96 38 120 60 130 C82 120 75 96 75 96Z"
              fill="rgba(131,84,242,0.4)"
            />
            <path
              d="M50 97 C50 97 45 115 60 122 C75 115 70 97 70 97Z"
              fill="rgba(205,147,255,0.6)"
            />
            <path
              d="M55 98 C55 98 52 110 60 115 C68 110 65 98 65 98Z"
              fill="#BCFEE3"
              opacity="0.9"
            />
            <circle cx="20" cy="30" r="1.5" fill="#BCFEE3" opacity="0.8" />
            <circle cx="100" cy="20" r="1" fill="#CD93FF" opacity="0.9" />
            <circle cx="15" cy="70" r="1" fill="#F0EEF8" opacity="0.6" />
            <circle cx="108" cy="60" r="1.5" fill="#BCFEE3" opacity="0.7" />
            <circle cx="25" cy="50" r="1" fill="#CD93FF" opacity="0.5" />
          </svg>
        </div>

        <div className="mt-10 sm:mt-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-10">
            {heroCards.map((card, idx) => {
              return (
                <div key={idx}>
                  <div className="flex flex-col items-center gap-2 text-center mt-10 bg-card-bg border border-solid border-card-border rounded-lg py-12">
                    <h2
                      className="font-bold text-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-brand-secondary), #BCFEE3)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {card.numbers}
                    </h2>
                    <p className="text-text-muted">{card.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
