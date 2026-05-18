import paypassMockup from '../assets/images/paypass-mockup.png';
import avaMockup from '../assets/images/ava-mockup.png';
import ava1 from '../assets/images/ava-1.png';
import petshopMockup from '../assets/images/petshop-mockup.png';
import r3Mockup from '../assets/images/r3-mockup.png';

export const projects = [
    {
        id: 'paypass',
        i18nKey: 'paypass',
        cover: paypassMockup,
        gallery: [paypassMockup],
        badges: ['interno', 'empresa'],
        stack: ['flutter', 'firebase', 'postgres', 'dotnet'],
        link: 'https://www.paypassbr.com/',
    },
    {
        id: 'avaEducacao',
        i18nKey: 'avaEducacao',
        cover: avaMockup,
        gallery: [avaMockup, ava1],
        badges: ['empresa'],
        stack: ['vite', 'shadcn', 'supabase', 'nodejs', 'fastify', 'typescript', 'prisma', 'zod'],
        link: 'https://studra-ava.vercel.app/login',
    },
    {
        id: 'r3Educacao',
        i18nKey: 'r3Educacao',
        cover: r3Mockup,
        gallery: [r3Mockup],
        badges: ['empresa'],
        stack: ['react', 'rhf', 'dotnet', 'postgres'],
        link: null,
    },
    {
        id: 'petshop',
        i18nKey: 'petshop',
        cover: petshopMockup,
        gallery: [petshopMockup],
        badges: ['empresa', 'em_dev'],
        stack: ['nextjs', 'typescript', 'supabase', 'prisma', 'shadcn'],
        link: null,
    },
];
