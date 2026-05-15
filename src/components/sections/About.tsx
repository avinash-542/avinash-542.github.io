import { motion } from 'framer-motion';
import { PROFILE, EXPERIENCE } from '../../data/portfolio';

export default function About() {
    return (
        <section id="about" style={{ padding: '80px 0', borderBottom: '0.5px solid var(--border)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .4 }}
                    style={{ marginBottom: 40 }}
                >
                    <p className="section-label">// ABOUT</p>
                    <h2 style={{
                        fontSize: 28, fontWeight: 500, color: 'var(--ink-1)',
                        letterSpacing: '-.02em'
                    }}>
                        cat about.md
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

                    {/* bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .45 }}
                    >
                        <p style={{
                            fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em',
                            opacity: .65, marginBottom: 16
                        }}>
              // BIO
                        </p>
                        <p style={{
                            fontFamily: 'var(--serif)', fontSize: 14,
                            color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20
                        }}>
                            I'm a software engineer with deep roots in systems programming, Android, and iOS.
                            I care about how things work at the lowest level — which is why I'm writing
                            an operating system from scratch in my spare time.
                        </p>
                        <p style={{
                            fontFamily: 'var(--serif)', fontSize: 14,
                            color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: 20
                        }}>
                            I've shipped production Android apps, redesigned CI/CD pipelines that cut
                            build times by 75%, and built shared component libraries used by teams of ten.
                            I work across the stack — from kernel assembly to product UI.
                        </p>
                        <p style={{
                            fontFamily: 'var(--serif)', fontSize: 14,
                            color: 'var(--ink-2)', lineHeight: 1.85
                        }}>
                            When I'm not at work, I'm running a self-hosted LLM stack, contributing to
                            AeonOS, or exploring Rust and Go. Originally from India, now based in the US.
                        </p>

                        {/* quick facts */}
                        <div style={{
                            marginTop: 28, display: 'grid',
                            gridTemplateColumns: '1fr 1fr', gap: 10
                        }}>
                            {[
                                ['LOCATION', 'United States'],
                                ['ORIGIN', 'India'],
                                ['FOCUS', 'Systems · Mobile . Full-Stack . AI/ML'],
                                ['LEARNING', 'Rust · Go'],
                            ].map(([k, v]) => (
                                <div key={k} style={{
                                    background: 'var(--bg-raised)',
                                    border: '0.5px solid var(--border)', borderRadius: 6,
                                    padding: '10px 12px'
                                }}>
                                    <p style={{
                                        fontSize: 9, color: 'var(--ink-3)', letterSpacing: '.1em',
                                        marginBottom: 4
                                    }}>{k}</p>
                                    <p style={{ fontSize: 12, color: 'var(--ink-1)' }}>{v}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .45 }}
                    >
                        <p style={{
                            fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em',
                            opacity: .65, marginBottom: 16
                        }}>
              // EXPERIENCE
                        </p>
                        {EXPERIENCE.map(exp => (
                            <div key={exp.role}>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'flex-start', marginBottom: 16
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: 14, fontWeight: 500,
                                            color: 'var(--ink-1)', marginBottom: 3
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{ fontSize: 12, color: 'var(--accent)' }}>{exp.company}</p>
                                    </div>
                                    <span style={{
                                        fontSize: 11, color: 'var(--ink-3)',
                                        letterSpacing: '.04em', flexShrink: 0
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <ul style={{
                                    listStyle: 'none', display: 'flex',
                                    flexDirection: 'column', gap: 8
                                }}>
                                    {exp.points.map((pt, i) => (
                                        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                            <span style={{
                                                color: 'var(--accent)', marginTop: 2,
                                                fontSize: 10, flexShrink: 0
                                            }}>→</span>
                                            <span style={{
                                                fontSize: 12, color: 'var(--ink-2)',
                                                lineHeight: 1.65
                                            }}>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}