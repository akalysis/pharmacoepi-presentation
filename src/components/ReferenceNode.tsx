'use client';

import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReferenceNode({
    title,
    content,
    citation
}: {
    title: string;
    content: string;
    citation: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 p-4 rounded-full bg-glass-bg border border-glass-border shadow-lg backdrop-blur-xl hover:scale-110 transition-transform z-40 text-white flex items-center justify-center"
                title="View Sources"
            >
                <BookOpen size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card max-w-2xl w-full relative"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
                            <div className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content }} />

                            <div className="bg-black/30 p-4 rounded-lg border border-white/10 text-sm font-mono text-gray-300">
                                <strong>Citation:</strong> {citation}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
