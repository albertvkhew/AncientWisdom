import GlassCard from "@/components/glass-card";
import VideoBackground from "@/components/video-background";
import HeroTitle from "@/components/hero-title";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-[family-name:var(--font-family-base)] overflow-hidden z-0">
      <VideoBackground />
      <HeroTitle />

      <div
        className="absolute flex flex-col sm:flex-row gap-6 sm:gap-12 items-end z-50"
        style={{ bottom: '10%', right: '5%', zIndex: 50 }}
      >
        <GlassCard
          title="If you are a guest"
          description="You will be rewarded. It is free"
          type="guest"
          buttonText="Click Here"
        />
        <GlassCard
          title="If you are a member"
          description="Claim your benefits. It is free"
          type="member"
          buttonText="Click Here"
        />
      </div>
    </main>
  );
}
