export default function VideoBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-1 overflow-hidden" style={{ zIndex: -1 }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
                <source src="/BaziMeetBotany.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        </div>
    );
}
