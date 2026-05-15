export const PROFILE = {
    name: 'Avinash Reddy',
    nameShort: 'AVINASH',
    nameLast: 'REDDY',
    title: 'Software Engineer',
    tagline: 'Building things from the metal up — OS kernels to production mobile apps.',
    bio: `I'm a software engineer with deep roots in systems programming, Android, and iOS.
I write C for AArch64 kernels, build production Android apps in Kotlin, and run
a self-hosted LLM stack on my home lab. I care about how things work at the lowest level.`,
    email: 'reddyavinash419@gmail.com',
    github: 'https://github.com/avinash-542',
    linkedin: 'https://www.linkedin.com/in/avinash-reddy-nuthalapati',
    location: 'United States',
    available: true,
};

export const SKILLS = [
    { category: 'LANGUAGES', items: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'Swift', 'Go', 'Rust'] },
    { category: 'MOBILE', items: ['Android', 'iOS', 'Jetpack Compose', 'SwiftUI', 'React Native'] },
    { category: 'SYSTEMS', items: ['Linux Kernel', 'AArch64 ASM', 'QEMU', 'GCC', 'ARM', 'KVM'] },
    { category: 'BACKEND', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'MySQL', 'Redis'] },
    { category: 'DEVOPS', items: ['Nginx', 'Cloudflare', 'Docker', 'PM2', 'CI/CD', 'Artifactory'] },
    { category: 'AI / ML', items: ['Ollama', 'MLX', 'RAG', 'LLM Fine-tuning', 'DeepSeek', 'Qwen'] },
    { category: 'OBSERV.', items: ['Splunk', 'Logging', 'Crash analysis', 'Root cause analysis'] },
    { category: 'LEARNING', items: ['Rust', 'Go'] },
];

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    status: 'active' | 'shipped' | 'archived' | 'wip';
    github?: string;
    link?: string;
    highlight?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: 'aeonos',
        title: 'AeonOS',
        subtitle: 'OS kernel for AArch64',
        description:
            'Futuristic operating system built from scratch targeting ARM/AArch64 hardware (Android devices). Custom kernel cross-compiled with aarch64-elf-gcc and tested via QEMU on MacBook. Name rooted in "indestructible/eternal" — inspired by my own name Avinash.',
        tags: ['C', 'AArch64 ASM', 'QEMU', 'GCC', 'ARM'],
        status: 'active',
        github: 'https://github.com/avinash-542/AeonOS',
        highlight: true,
    },
    {
        id: 'llm-stack',
        title: 'Local LLM Stack',
        subtitle: 'Self-hosted AI infrastructure',
        description:
            'Task-specialised model routing on Mac Mini M5 with 24GB unified memory. Qwen2.5-Coder 14B for coding, DeepSeek-R1 distilled for reasoning, Llama 3.1 8B for general chat. Runs via Ollama, MLX, and Open WebUI.',
        tags: ['Python', 'Ollama', 'MLX', 'Open WebUI', 'Mac Mini M5'],
        status: 'active',
        link: 'https://ai.arndevs.com',
        highlight: true,
    },
    {
        id: 'arndevs',
        title: 'ARNDevs Platform',
        subtitle: 'Self-hosted portfolio & AI service',
        description:
            'Full-stack personal platform running on a home Ubuntu server. Node.js + Express + EJS + MySQL + Redis + Nginx + PM2. Secured behind Cloudflare Tunnel — home IP never exposed. Includes a separate ARNDevs AI service with auto-routing to the best model per message.',
        tags: ['Node.js', 'Express', 'MySQL', 'Redis', 'Nginx', 'Cloudflare'],
        status: 'shipped',
        link: 'https://www.arndevs.com',
        highlight: true,
    },
    // {
    //     id: 'ci-cd',
    //     title: 'CI/CD Pipeline Redesign',
    //     subtitle: '75% build time reduction',
    //     description:
    //         'Redesigned Android CI/CD pipeline so builds upload to Artifactory immediately upon completion rather than waiting for all builds to finish. Reduced pipeline time from 1 hour to 15 minutes. Unblocked engineers and QA to start testing sooner. Entirely self-initiated.',
    //     tags: ['Kotlin', 'Artifactory', 'CI/CD', 'Android', 'Gradle'],
    //     status: 'shipped',
    //     highlight: true,
    // },
    // {
    //     id: 'shared-components',
    //     title: 'Shared Component Library',
    //     subtitle: 'Android UI system',
    //     description:
    //         'Independently identified the need for shared components during a 4–6 screen redesign. Proactively created the library before MR merged, coordinated with other devs to gather requirements. Currently used by 2 engineers, scaling to team of 10. Saves an estimated 7–10 days of future dev time over 6 months.',
    //     tags: ['Kotlin', 'Jetpack Compose', 'Android', 'UI Systems'],
    //     status: 'shipped',
    // },
    // {
    //     id: 'location-tracking',
    //     title: 'Adaptive Location Tracker',
    //     subtitle: 'Battery-aware GPS system',
    //     description:
    //         'Built an adaptive location tracking system using FusedLocationProviderClient. Battery-aware algorithm switches GPS poll interval from 5s to 30s at threshold — 6x reduction. Added 50m point deduplication filter and programmatic path interpolation for smooth rendering.',
    //     tags: ['Kotlin', 'Android', 'FusedLocationProvider', 'GPS'],
    //     status: 'archived',
    // },
    // {
    //     id: 'bff-api',
    //     title: 'BFF / API Unification',
    //     subtitle: 'Cross-team architecture',
    //     description:
    //         'Led a complex cross-team project to unify old and new frontend flows with the same codebase. Added a discriminator key in JSON response to dynamically switch between flows. Implemented dynamic option handling so future additions require minimal code changes.',
    //     tags: ['Architecture', 'Android', 'API Design', 'JSON', 'Cross-team'],
    //     status: 'shipped',
    // },
    {
        id: 'e2ee-keyboard',
        title: 'E2EE Keyboard App',
        subtitle: 'Privacy layer for messaging',
        description:
            'Concept: Android/iOS keyboard that layers end-to-end encryption on top of existing platforms like Instagram. Dual-mode architecture — secure local vault for solo users, full E2EE when both parties have the app. Uses Signal Protocol.',
        tags: ['Kotlin', 'Swift', 'Signal Protocol', 'E2EE', 'Android', 'iOS'],
        status: 'wip',
    },
    {
        id: 'Point-Ping',
        title: 'Point-Ping',
        subtitle: 'Encoded Text messaging Ios Application',
        description:
            'A complete native iOS app that need a pre-determined, shared pin to add encryption text exchnages. The text messages recieved by user will be shown in encrypted form and can only be decrypted by using the same the pin. Also, it will never have same encrypted test for two same text messages sent by either of the user.',
        tags: ['Swift', 'iOS', 'Encryption', 'AES-256', 'HMAC-SHA256'],
        status: 'shipped',
        github: 'https://github.com/avinash-542/Point-Ping',
        highlight: true,
    },
    // {
    //     id: 'observability',
    //     title: 'Production Observability',
    //     subtitle: 'Logging & crash diagnosis',
    //     description:
    //         'Added comprehensive internal and external log entries for both noticeable and unnoticeable user actions in production. Directly enabled diagnosis of a hard-to-reproduce shortcuts feature crash during a heavy release cycle — logs traced the root cause and the fix shipped by next release.',
    //     tags: ['Splunk', 'Android', 'Logging', 'Crash Analysis', 'Production'],
    //     status: 'shipped',
    // },
];

export const EXPERIENCE = [
    {
        role: 'Software Engineer III',
        company: 'Paycom',
        period: '2024 — 2026',
        points: [
            'Led redesign of CI/CD pipeline reducing build time from 1hr to 15min',
            'Built shared Android component library used across team of 10',
            'Architected BFF API unification across old and new frontend flows',
            'Built adaptive GPS tracking with 6x battery poll reduction',
            'Added production observability enabling root cause analysis of hard crashes',
            'Worked across web and mobile ensuring feature consistency on both surfaces',
        ],
    },
];