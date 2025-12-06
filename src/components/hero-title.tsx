"use client";

import React from 'react';

export default function HeroTitle() {
    return (
        <div className="absolute bottom-0 left-0 w-full pointer-events-none flex flex-col justify-end pb-8 z-20 overflow-hidden">
            <div className="w-full overflow-hidden">
                <h1 className="hero-title font-bold drop-shadow-lg animate-marquee whitespace-nowrap">
                    <span className="text-4xl sm:text-6xl text-white mr-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Unlock the Ancient Wisdom to elevate Modern Living and Family Wellness
                    </span>
                </h1>
            </div>
        </div>
    );
}
