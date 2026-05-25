'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className='min-h-screen safe-top safe-bottom px-6 py-10 bg-gradient-to-b from-brand-ice to-brand-lavender flex items-center justify-center'>
      <motion.section
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65 }}
        className='glass rounded-3xl p-6 w-full max-w-sm text-center'
      >
        <p className='text-brand-vibrant text-sm mb-2'>Lupy Nails</p>
        <h1 className='text-2xl font-bold text-brand-deep mb-2'>Página não encontrada</h1>
        <p className='text-brand-subtext mb-5'>Essa rota não existe na agenda pessoal privada.</p>
        <Link href='/' className='inline-flex items-center justify-center rounded-2xl bg-brand-purple text-white px-5 py-3'>
          Voltar ao início
        </Link>
      </motion.section>
    </main>
  );
}
