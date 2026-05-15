import { motion } from 'framer-motion';

export default function StatusBar() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
                borderTop: '0.5px solid rgba(212,137,26,0.15)',
                background: 'rgba(212,137,26,0.04)',
                padding: '8px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div style={{ display: 'flex', gap: 20 }}>
                {[
                    '● KERNEL: AeonOS v0.1-alpha',
                    '● BRANCH: main',
                    '● STATUS: building in public',
                ].map(t => (
                    <span key={t} style={{
                        fontSize: 9, color: 'rgba(212,137,26,0.6)',
                        letterSpacing: '.07em'
                    }}>
                        {t}
                    </span>
                ))}
            </div>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.18)' }}>
                avinash-542.github.io
            </span>
        </motion.footer>
    );
}