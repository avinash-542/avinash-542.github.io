import { motion } from 'framer-motion';
import { PROFILE } from '../../data/portfolio';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '80px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .4 }}
                    style={{ maxWidth: 580 }}
                >
                    <p className="section-label">// CONTACT</p>
                    <h2 style={{
                        fontSize: 28, fontWeight: 500, color: 'var(--ink-1)',
                        letterSpacing: '-.02em', marginBottom: 12
                    }}>
                        Get in touch
                    </h2>
                    <p style={{
                        fontFamily: 'var(--serif)', fontSize: 14,
                        color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: 36
                    }}>
                        Open to new opportunities, interesting problems, and good
                        conversations about systems, mobile, or anything low-level.
                        Reach out via email or LinkedIn.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <a
                            href={`mailto:${PROFILE.email}`}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                background: 'var(--bg-raised)',
                                border: '0.5px solid var(--border)',
                                borderRadius: 8, padding: '14px 18px',
                                textDecoration: 'none',
                                transition: 'border-color .2s, background .2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--accent-border)';
                                e.currentTarget.style.background = 'var(--accent-dim)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.background = 'var(--bg-raised)';
                            }}
                        >
                            <div>
                                <p style={{
                                    fontSize: 9, color: 'var(--ink-3)', letterSpacing: '.1em',
                                    marginBottom: 4
                                }}>EMAIL</p>
                                <p style={{ fontSize: 13, color: 'var(--ink-1)' }}>{PROFILE.email}</p>
                            </div>
                            <span style={{ fontSize: 16, color: 'var(--accent)' }}>→</span>
                        </a>

                        <a
                            href={PROFILE.linkedin}
                            target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                background: 'var(--bg-raised)',
                                border: '0.5px solid var(--border)',
                                borderRadius: 8, padding: '14px 18px',
                                textDecoration: 'none',
                                transition: 'border-color .2s, background .2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--accent-border)';
                                e.currentTarget.style.background = 'var(--accent-dim)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.background = 'var(--bg-raised)';
                            }}
                        >
                            <div>
                                <p style={{
                                    fontSize: 9, color: 'var(--ink-3)', letterSpacing: '.1em',
                                    marginBottom: 4
                                }}>LINKEDIN</p>
                                <p style={{ fontSize: 13, color: 'var(--ink-1)' }}>
                                    avinash-reddy-nuthalapati
                                </p>
                            </div>
                            <span style={{ fontSize: 16, color: 'var(--accent)' }}>→</span>
                        </a>

                        <a
                            href={PROFILE.github}
                            target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                background: 'var(--bg-raised)',
                                border: '0.5px solid var(--border)',
                                borderRadius: 8, padding: '14px 18px',
                                textDecoration: 'none',
                                transition: 'border-color .2s, background .2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--accent-border)';
                                e.currentTarget.style.background = 'var(--accent-dim)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.background = 'var(--bg-raised)';
                            }}
                        >
                            <div>
                                <p style={{
                                    fontSize: 9, color: 'var(--ink-3)', letterSpacing: '.1em',
                                    marginBottom: 4
                                }}>GITHUB</p>
                                <p style={{ fontSize: 13, color: 'var(--ink-1)' }}>avinash-542</p>
                            </div>
                            <span style={{ fontSize: 16, color: 'var(--accent)' }}>→</span>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}