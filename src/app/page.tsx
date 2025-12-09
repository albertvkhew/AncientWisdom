import GlassCard from "@/components/glass-card";
import VideoBackground from "@/components/video-background";
// import HeroTitle from "@/components/hero-title"; // Disabled

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-[family-name:var(--font-family-base)] overflow-hidden z-0">
      <VideoBackground />
      {/* <HeroTitle /> Disabled */}

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
