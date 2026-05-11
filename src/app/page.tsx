import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Background Image with Cyan Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tea-bg.png"
          alt="Premium Tea Background"
          fill
          className="object-cover scale-110 brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-cyan-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-cyan-900/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl glass rounded-3xl p-8 md:p-16 flex flex-col items-center text-center animate-fade-in">
        <div className="mb-8 animate-fade-in animate-delay-1">
          <h2 className="text-cyan-200 font-sans tracking-[0.3em] text-sm uppercase mb-4">Welcome to</h2>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl">
            Manojaas
          </h1>
          <div className="h-1 w-24 bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mb-12 animate-fade-in animate-delay-2">
          <p className="text-xl md:text-2xl text-cyan-50 font-light leading-relaxed">
            Curators of the finest <span className="text-cyan-300 font-semibold italic">Chaipatti</span>. 
            We are hand-selecting the most exquisite tea leaves from across the estates to bring an unparalleled brewing experience to your doorstep.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 w-full animate-fade-in animate-delay-3">
          <div className="inline-block px-6 py-2 border border-cyan-400/30 bg-cyan-900/40 rounded-full">
            <p className="text-cyan-300 font-sans tracking-widest text-xs md:text-sm uppercase">
              Launching Soon • Summer 2026
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/20"
            >
              Notify Me
            </button>
          </form>

          <div className="flex gap-6 mt-4">
            {[
              { name: "Instagram", url: "https://www.instagram.com/anantmanojaas/" },
              { name: "Twitter", url: "https://x.com/manoxjaas" },
              { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61589338872322" },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-white transition-colors text-sm font-sans tracking-wider"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-700/30 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}
