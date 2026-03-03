'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Option {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
}

export default function MCQ({
    question,
    options
}: {
    question: string;
    options: Option[];
}) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedOption = options.find(o => o.id === selectedId);

    return (
        <div className="w-full max-w-3xl mx-auto mt-8">
            <p className="text-2xl mb-6">{question}</p>

            <div className="flex flex-col gap-4">
                {options.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => setSelectedId(opt.id)}
                        className={`mcq-btn ${selectedId === opt.id ? (opt.isCorrect ? 'border-accent bg-accent/20' : 'border-secondary bg-secondary/20') : ''}`}
                    >
                        {opt.text}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {selectedOption && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mcq-feedback text-left mt-6 ${selectedOption.isCorrect ? 'correct' : 'incorrect'} !block`}
                    >
                        <span dangerouslySetInnerHTML={{ __html: selectedOption.feedback }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
