'use client';

import { motion } from 'framer-motion';

export default function SlideWrapper({
    children,
    isActive,
}: {
    children: React.ReactNode;
    isActive: boolean;
}) {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 w-full h-full text-center"
            style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}
        >
            {children}
        </motion.div>
    );
}
