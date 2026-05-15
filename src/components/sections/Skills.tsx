import { motion } from 'framer-motion';
import { SKILLS } from '../../data/portfolio';

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '80px 0', borderBottom: '0.5px solid var(--border)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .4 }}
                    style={{ marginBottom: 36 }}
                >
                    <p className="section-label">// SYSTEM_SPECS</p>
                    <h2 style={{
                        fontSize: 28, fontWeight: 500, color: 'var(--ink-1)',
                        letterSpacing: '-.02em', marginBottom: 8
                    }}>
                        Skills
                    </h2>
                    <p style={{ fontSize: 13, color: 'var(--ink-2)', fontFamily: 'var(--serif)' }}>
                        What I work with — from assembler to product.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12
                }}>
                    {SKILLS.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * .05, duration: .35 }}
                            style={{
                                background: 'var(--bg-raised)',
                                border: '0.5px solid var(--border)',
                                borderRadius: 8,
                                padding: '16px 18px',
                            }}
                        >
                            <p style={{
                                fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em',
                                opacity: .65, marginBottom: 12
                            }}>
                                {group.category}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {group.items.map(item => (
                                    <span
                                        key={item}
                                        style={{
                                            fontSize: 11,
                                            color: group.category === 'LEARNING'
                                                ? 'var(--accent)' : 'var(--ink-1)',
                                            background: group.category === 'LEARNING'
                                                ? 'var(--accent-dim)' : 'rgba(255,255,255,0.04)',
                                            border: `0.5px solid ${group.category === 'LEARNING'
                                                ? 'var(--accent-border)' : 'var(--border)'}`,
                                            padding: '3px 9px',
                                            borderRadius: 3,
                                            letterSpacing: '.03em',
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}