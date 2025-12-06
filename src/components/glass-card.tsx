"use client";

import Link from 'next/link';
import React from 'react';

interface GlassCardProps {
    title: string;
    description: string;
    buttonText?: string;
    type: 'guest' | 'member';
}

export default function GlassCard({ title, description, buttonText = "Click Here", type }: GlassCardProps) {
    return (
        <div
            className="glass-card flex flex-col items-center justify-center p-6 text-center"
            style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                color: '#1f1f1f',
                width: '280px',
                maxWidth: '100%'
            }}
        >
            <div className="mb-4">
                <h3 className="text-sm uppercase tracking-wider font-light mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: '#111' }}>
                    {title}
                </h3>
            </div>

            <Link href="/next-page" className="mb-4 inline-block">
                <div
                    className="btn-glow inline-block"
                >
                    {buttonText}
                </div>
            </Link>

            <div>
                <p className="text-xs font-light" style={{ fontSize: '0.75rem', color: '#333' }}>
                    {description}
                </p>
            </div>
        </div>
    );
}
