import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/portfolio';

/* PCB trace SVG — decorative */
const PCBTraces = () => (
    <svg
        style={{ position: 'absolute', top: 24, right: 48, opacity: .13, pointerEvents: 'none' }}
        width="140" height="110" viewBox="0 0 140 110" fill="none"
    >
        <line x1="0" y1="22" x2="65" y2="22" stroke="#d4891a" strokeWidth=".8" />
        <line x1="65" y1="22" x2="65" y2="75" stroke="#d4891a" strokeWidth=".8" />
        <line x1="65" y1="75" x2="140" y2="75" stroke="#d4891a" strokeWidth=".8" />
        <circle cx="65" cy="22" r="3" fill="#d4891a" />
        <circle cx="65" cy="75" r="3" fill="#d4891a" />
        <line x1="95" y1="0" x2="95" y2="48" stroke="#d4891a" strokeWidth=".8" />
        <circle cx="95" cy="48" r="3" fill="#d4891a" />
        <line x1="118" y1="35" x2="140" y2="35" stroke="#d4891a" strokeWidth=".8" />
        <circle cx="118" cy="35" r="3" fill="#d4891a" />
        <line x1="25" y1="0" x2="25" y2="22" stroke="#d4891a" strokeWidth=".8" />
        <circle cx="25" cy="22" r="3" fill="#d4891a" />
        <line x1="0" y1="55" x2="40" y2="55" stroke="#d4891a" strokeWidth=".8" />
        <line x1="40" y1="55" x2="40" y2="90" stroke="#d4891a" strokeWidth=".8" />
        <circle cx="40" cy="55" r="3" fill="#d4891a" />
    </svg>
);

/* Blinking cursor */
const Cursor = () => (
    <span style={{
        display: 'inline-block',
        width: 3,
        height: '0.85em',
        background: 'var(--accent)',
        marginLeft: 4,
        verticalAlign: 'middle',
        animation: 'cursorBlink 1.1s step-end infinite',
    }} />
);

export default function Hero({ avatar }: { avatar: string }) {
    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '80px 0 60px',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '0.5px solid var(--border)',
            }}
        >
            <PCBTraces />

            {/* subtle dot grid bg */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
            }} />

            <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>

                    {/* LEFT — text content */}
                    <div>
                        {/* comment label */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: .2 }}
                            style={{
                                fontSize: 11, color: 'var(--accent)', opacity: .65,
                                letterSpacing: '.1em', marginBottom: 20
                            }}
                        >
              // SOFTWARE_ENGINEER · SYSTEMS · ANDROID · iOS
                        </motion.div>

                        {/* name */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .32, duration: .55 }}
                            style={{
                                fontSize: 'clamp(52px, 8vw, 84px)', fontWeight: 500,
                                color: 'var(--ink-1)', lineHeight: 1, letterSpacing: '-.025em'
                            }}
                        >
                            AVINASH
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .44, duration: .55 }}
                            style={{
                                fontSize: 'clamp(52px, 8vw, 84px)', fontWeight: 500,
                                lineHeight: 1, letterSpacing: '-.025em', marginBottom: 28,
                                display: 'flex', alignItems: 'center'
                            }}
                        >
                            <span style={{ color: 'var(--accent)' }}>NUTHALAPATI</span>
                            <Cursor />
                        </motion.div>

                        {/* bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .56, duration: .5 }}
                            style={{
                                fontFamily: 'var(--serif)', fontSize: 15,
                                color: 'var(--ink-2)', lineHeight: 1.8,
                                maxWidth: 480, marginBottom: 36,
                            }}
                        >
                            {PROFILE.tagline} I write C for AArch64 kernels, ship production
                            Android apps in Kotlin, and run a self-hosted LLM stack on my home lab.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .66, duration: .45 }}
                            style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}
                        >
                            <a href="#projects" style={{
                                background: 'var(--accent)', color: '#0a0a0a',
                                fontSize: 11, fontWeight: 500, padding: '9px 22px',
                                borderRadius: 4, letterSpacing: '.08em', textDecoration: 'none',
                                transition: 'opacity .15s',
                            }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = '.85')}
                                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                            >
                                ./view_projects
                            </a>

                            <a href="#about" style={{
                                border: '0.5px solid var(--border-md)',
                                color: 'var(--ink-2)', fontSize: 11,
                                padding: '9px 22px', borderRadius: 4,
                                letterSpacing: '.08em', textDecoration: 'none',
                                transition: 'background .15s, color .15s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--ink-1)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; }}
                            >
                                cat about.md
                            </a>

                            <a
                                href={PROFILE.linkedin}
                                target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.06em', textDecoration: 'none' }}
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href={PROFILE.github}
                                target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.06em', textDecoration: 'none' }}
                            >
                                GitHub ↗
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT — avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: .92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: .5, duration: .55 }}
                        style={{ flexShrink: 0 }}
                    >
                        <div style={{
                            width: 180, height: 180,
                            border: '0.5px solid var(--accent-border)',
                            borderRadius: 10,
                            overflow: 'hidden',
                            background: 'var(--green)',
                            animation: 'pulse 2s ease-out infinite',
                            position: 'relative',
                        }}>
                            <img
                                src={avatar}
                                alt="Avinash Nuthalapati"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {/* amber corner accent */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                height: 3, background: 'var(--accent)', opacity: .7,
                            }} />
                        </div>
                        {/* available badge */}
                        <div style={{
                            marginTop: 10, display: 'flex', alignItems: 'center',
                            gap: 6, justifyContent: 'center',
                        }}>
                            <div style={{
                                width: 6, height: 6, borderRadius: '50%', background: 'var(--green)',
                                animation: 'pulse 2s ease-in-out infinite'
                            }} />
                            <span style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.08em' }}>
                                open to opportunities
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}