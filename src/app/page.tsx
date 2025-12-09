import GlassCard from "@/components/glass-card";
import VideoBackground from "@/components/video-background";
// import HeroTitle from "@/components/hero-title"; // Disabled

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-[family-name:var(--font-family-base)] overflow-hidden z-0">
      <VideoBackground />

      {/* Left Side Hero Text */}
      <div
        className="absolute top-0 left-0 h-full flex items-center z-10 pointer-events-none"
        style={{ width: '10%', paddingLeft: '1rem' }}
      >
        <h2
          className="font-bold uppercase tracking-widest text-white drop-shadow-lg"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '0.2em',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Ancient Wisdom
        </h2>
      </div>

      {/* Right Side Hero Text */}
      <div
        className="absolute top-0 right-0 h-full flex items-center z-10 pointer-events-none"
        style={{ width: '10%', paddingRight: '1rem', justifyContent: 'flex-end' }}
      >
        <h2
          className="font-bold uppercase tracking-widest text-white drop-shadow-lg"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '0.2em',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Thrive Every Day
        </h2>
      </div>

      <div
        className="absolute flex flex-col sm:flex-row gap-6 sm:gap-12 items-end z-50"
        style={{ bottom: '15%', right: '5%', zIndex: 50 }}
      >
        <GlassCard
          title="GUEST"
          description={
            <>
              Claim your reward
              <br />
              It is free
            </>
          }
          type="guest"
          buttonText="Click Here"
          href="https://muyaguestlogin.zeabur.app/index.html"
        />
        <GlassCard
          title="MEMBER"
          description="Claim your benefits"
          type="member"
          buttonText="Click Here"
        />
      </div>
    </main>
  );
}
