'use client';
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { LenisRef, LenisProps as ReactLenisProps } from 'lenis/react';
import { LenisOptions } from 'lenis';

interface LenisProps extends Omit<ReactLenisProps, 'ref'> {
  root: boolean;
  options?: LenisOptions;
}

export const Lenis = ({ root, options }: LenisProps) => {
  const lenisRef = useRef<LenisRef>(null);
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <ReactLenis
      root={root}
      options={{
        ...options,
        autoRaf: false,
        lerp: options?.lerp ?? 0.125,
        anchors: true,
        autoToggle: true,
      }}
      ref={lenisRef}
    />
  );
};
