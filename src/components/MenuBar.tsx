import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV = [
    { label: '~/home', href: '#home' },
    { label: 'projects', href: '#projects' },
    { label: 'skills', href: '#skills' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
];

export default function MenuBar() {
    const [time, setTime] = useState('');
    const [active, setActive] = useState('home');

    useEffect(() => {
        const tick = () => {
            const n = new Date();
            const p = (v: number) => String(v).padStart(2, '0');
            setTime(`${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const handler = () => {
            const sections = ['home', 'projects', 'skills', 'about', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom > 80) { setActive(id); break; }
            }
        };
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4 }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                height: 36,
                background: 'rgba(10,10,10,0.85)',
                borderBottom: '0.5px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
            }}
        >
            {/* left — logo */}
            <div style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '.08em', fontWeight: 500 }}>
                AVI.OS
            </div>

            {/* center — nav */}
            <nav style={{ display: 'flex', gap: 24 }}>
                {NAV.map(({ label, href }) => {
                    const id = href.replace('#', '');
                    const isActive = active === id;
                    return (
                        <a
                            key={label}
                            href={href}
                            style={{
                                fontSize: 11,
                                letterSpacing: '.04em',
                                color: isActive ? 'var(--accent)' : 'var(--ink-2)',
                                transition: 'color .15s',
                                textDecoration: 'none',
                            }}
                        >
                            {label}
                        </a>
                    );
                })}
            </nav>

            {/* right — clock + status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 10, color: 'var(--green)', letterSpacing: '.06em' }}>
                    ● kernel: running
                </span>
                <span style={{ fontSize: 10, color: 'var(--ink-4)', letterSpacing: '.04em' }}>
                    {time}
                </span>
            </div>
        </motion.header>
    );
}