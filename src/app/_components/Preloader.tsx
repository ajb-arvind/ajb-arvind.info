'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { GREETINGS } from '@/lib/constant';
import { cn } from '@/lib/utils';

export const Preloader: React.FC = () => {
  const greetings = Array.isArray(GREETINGS) ? GREETINGS : [GREETINGS];

  const [index, setIndex] = useState(0);

  const isLast = index >= greetings.length - 1;

  useEffect(() => {
    if (isLast) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(id);
  }, [greetings.length, isLast]);

  const currentText = greetings[index] ?? greetings[0];

  return (
    <AnimatePresence>
      {!isLast && (
        <motion.div
          key="preloader-overlay"
          className={cn(
            'fixed h-dvh w-dvw z-50 inset-0 bg-foreground overflow-hidden'
          )}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-background text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText.text ?? index}
                // initial={{ opacity: 0, y: -1 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <h1 className="text-6xl md:text-9xl font-semibold">
                  {currentText.text}
                </h1>
                <p className="mt-2 text-sm md:text-base opacity-80">
                  {currentText.language}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
