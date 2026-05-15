import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '../../data/portfolio';

const STATUS_LABEL: Record<string, string> = {
    active: '● active',
    shipped: '● shipped',
    wip: '◐ wip',
    archived: '○ archived',
};

const FILTERS = ['all', 'active', 'shipped', 'wip', 'archived'];

function ProjectCard({ p, index }: { p: Project; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ delay: index * .04, duration: .35 }}
            className="card"
            style={{
                position: 'relative',
                cursor: 'default',
                ...(p.highlight ? { borderColor: 'rgba(212,137,26,0.18)' } : {}),
            }}
        >
            {/* highlight accent bar */}
            {p.highlight && (
                <div style={{
                    position: 'absolute', top: 0, left: 0,
                    width: 3, height: '100%',
                    background: 'var(--accent)', borderRadius: '8px 0 0 8px', opacity: .6,
                }} />
            )}

            <div style={{ paddingLeft: p.highlight ? 10 : 0 }}>
                {/* header row */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', marginBottom: 6, gap: 12
                }}>
                    <div>
                        <h3 style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-1)', marginBottom: 2 }}>
                            {p.title}
                        </h3>
                        <p style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.04em' }}>
                            {p.subtitle}
                        </p>
                    </div>
                    <span className={`status-${p.status}`}
                        style={{ fontSize: 10, letterSpacing: '.06em', flexShrink: 0, marginTop: 2 }}>
                        {STATUS_LABEL[p.status]}
                    </span>
                </div>

                {/* description */}
                <p style={{
                    fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.7,
                    fontFamily: 'var(--serif)', marginBottom: 12
                }}>
                    {p.description}
                </p>

                {/* tags */}
                <div className="tags-wrap">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* links */}
                {(p.github || p.link) && (
                    <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
                        {p.github && (
                            <a href={p.github} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.06em' }}>
                                GitHub ↗
                            </a>
                        )}
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '.06em' }}>
                                Live ↗
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.status === filter);

    return (
        <section id="projects" style={{ padding: '80px 0', borderBottom: '0.5px solid var(--border)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>

                {/* section header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .4 }}
                    style={{ marginBottom: 36 }}
                >
                    <p className="section-label">// PROJECTS</p>
                    <h2 style={{
                        fontSize: 28, fontWeight: 500, color: 'var(--ink-1)',
                        letterSpacing: '-.02em', marginBottom: 8
                    }}>
                        Things I've built
                    </h2>
                    <p style={{ fontSize: 13, color: 'var(--ink-2)', fontFamily: 'var(--serif)' }}>
                        From OS kernels to production pipelines — a few things I'm proud of.
                    </p>
                </motion.div>

                {/* filter pills */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                background: filter === f ? 'var(--accent-dim)' : 'transparent',
                                border: `0.5px solid ${filter === f ? 'var(--accent-border)' : 'var(--border)'}`,
                                color: filter === f ? 'var(--accent)' : 'var(--ink-3)',
                                fontSize: 10, letterSpacing: '.08em',
                                padding: '4px 12px', borderRadius: 3,
                                cursor: 'pointer', fontFamily: 'var(--mono)',
                                transition: 'all .15s',
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 14
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.id} p={p} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}