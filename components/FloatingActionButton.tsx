import { motion } from 'framer-motion';

export default function FloatingActionButton() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='glass rounded-2xl p-3 text-sm text-brand-subtext'>
      FloatingActionButton
    </motion.div>
  );
}
