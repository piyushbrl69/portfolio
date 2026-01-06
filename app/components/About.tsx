export default function About() {
  const stats = [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Completed", value: "7+" },
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
            About Me
          </h2>
          <h3 className="text-4xl font-bold tracking-tighter text-white">
            Driven by <br />{" "}
            <span className="text-zinc-700">Design & Code.</span>
          </h3>
        </div>

        <div className="md:col-span-8 space-y-8">
          <p className="text-xl text-zinc-400 leading-relaxed font-medium">
            I am a Frontend Developer based in India, specializing in building
            highly interactive and visually stunning web applications. I bridge
            the gap between complex backend logic and pixel-perfect user
            interfaces.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            My journey started with a curiosity for how things work on the web,
            which led me to master modern tools like Next.js, TypeScript, and
            Tailwind CSS. I focus on performance, accessibility, and writing
            maintainable code that scales.Currently Im learning to databases for
            betterment of my journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-900">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
