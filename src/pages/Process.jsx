const processSteps = [
  {
    steps: 1,
    title: "Discover & Define",
    description:
      "We dive deep into your goals, challenges, and audience to understand exactly what needs to be built.",
  },
  {
    steps: 2,
    title: "Design & Architect",
    description:
      "Our team crafts the blueprint — UI designs, system architecture, and a clear roadmap aligned to your brand.",
  },
  {
    steps: 3,
    title: "Build & Launch",
    description:
      "We execute with speed and precision, delivering a polished, production-ready product on schedule.",
  },
  {
    steps: 4,
    title: "Grow & Iterate",
    description:
      "Post-launch support, analytics, and continuous improvements to keep you ahead of the curve.",
  },
];

const Process = () => {
  return (
    <section className="relative mt-20 sm:mt-30">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-md font-bold text-mint">OUR PROCESS</h1>
          <h2 className="text-3xl font-bold mt-4 text-text-primary">
            How We <span className="text-text-secondary">Launch</span> Your
            Vision
          </h2>
          <p className="text-text-muted mt-4 text-md max-w-2xl sm:text-lg">
            A clear, proven process from first conversation to launch and
            beyond.
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-10 flex-1/2">
            <div>
              {processSteps.map((step) => {
                return (
                  <div>
                    <div className="flex items-center gap-4 mt-10">
                      <div className="w-10 h-10 rounded-full bg-card-bg border border-card-border flex items-center justify-center text-sm font-bold text-text-primary sm:w-12 sm:h-12">
                        <span>{step.steps}</span>
                      </div>
                      <div>
                        <h1 className="text-lg font-bold text-text-primary">
                          {step.title}
                        </h1>
                        <p className="text-text-muted text-sm mt-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-card-bg border border-solid border-card-border w-[20%] h-10 rounded-xl flex items-center justify-center">
              <h1>Project Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
