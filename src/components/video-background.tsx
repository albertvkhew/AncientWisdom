export default function VideoBackground() {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full -z-1 overflow-hidden"
            style={{
                zIndex: -1,
                background: 'linear-gradient(135deg, #a8c0d8 0%, #7eb8d6 25%, #89b4e0 50%, #b8a4c9 75%, #c9a8c0 100%)'
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/poster.jpg"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            >
                <source src="/BaziMeetBotany.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        </div>
    );
}
