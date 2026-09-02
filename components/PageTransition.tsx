'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'wipe-in' | 'wipe-out'>('idle');
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Skip transition on first render
    if (isFirstRender) {
      setIsFirstRender(false);
      setDisplayChildren(children);
      return;
    }
    // Start wipe-in
    setTransitionStage('wipe-in');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Page wipe overlay */}
      <AnimatePresence>
        {transitionStage === 'wipe-in' && (
          <motion.div
            key="wipe"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1, transformOrigin: 'left' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
              setDisplayChildren(children);
              setTransitionStage('wipe-out');
            }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
              zIndex: 8000,
              pointerEvents: 'none',
            }}
          />
        )}
        {transitionStage === 'wipe-out' && (
          <motion.div
            key="wipe-out"
            initial={{ scaleX: 1, transformOrigin: 'right' }}
            animate={{ scaleX: 0, transformOrigin: 'right' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => setTransitionStage('idle')}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
              zIndex: 8000,
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>

      {/* Page content with fade-up entrance */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {displayChildren}
      </motion.div>
    </div>
  );
}
