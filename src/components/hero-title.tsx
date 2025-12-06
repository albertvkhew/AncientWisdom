"use client";

import React from 'react';

export default function HeroTitle() {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center items-start p-6 sm:p-12 z-20">
            <div className="max-w-2xl">
                <h1 className="hero-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-teal-200 drop-shadow-lg">
                    <span className="block text-4xl sm:text-6xl mb-2 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                        Unlock
                    </span>
                    <span className="block text-5xl sm:text-7xl font-serif text-teal-50 mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                        Ancient Wisdom
                    </span>
                    <span className="block text-2xl sm:text-3xl font-light tracking-widest text-white/90 animate-slide-up opacity-0" style={{ animationDelay: '1.2s' }}>
                        TO ELEVATE MODERN LIVING & WELLNESS
                    </span>
                </h1>
                <div className="h-1 w-32 bg-teal-400 mt-6 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.6)] animate-grow-width opacity-0" style={{ animationDelay: '1.6s' }} />
            </div>
        </div>
    );
}
