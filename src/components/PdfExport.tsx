'use client';

import { Printer } from 'lucide-react';
import { useState } from 'react';

export default function PdfExport() {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        setIsExporting(true);

        try {
            // Dynamic import to avoid SSR issues with html2pdf
            const html2pdf = (await import('html2pdf.js')).default;

            const element = document.getElementById('presentation-root');
            if (!element) return;

            const opt = {
                margin: 0,
                filename: 'Pharmacoepidemiology_Slides.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: '16:9', orientation: 'landscape' }
            };

            // Temporarily show all slides for printing
            const originalDisplay = element.style.display;
            element.classList.add('print-mode');

            await html2pdf().set(opt).from(element).save();

            element.classList.remove('print-mode');
            element.style.display = originalDisplay;

        } catch (error) {
            console.error('Failed to export PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className={`fixed bottom-6 right-6 p-4 rounded-full bg-glass-bg border border-glass-border shadow-lg backdrop-blur-xl hover:scale-110 transition-transform z-50 text-white flex items-center justify-center ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Download as PDF"
        >
            <Printer size={24} className={isExporting ? 'animate-pulse' : ''} />
        </button>
    );
}
