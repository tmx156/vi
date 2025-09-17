import { lazy } from 'react';

export const loadThreeJS = async () => {
  const THREE = await import('three');
  return THREE;
};

export const loadFramerMotion = async () => {
  const { motion, AnimatePresence } = await import('framer-motion');
  return { motion, AnimatePresence };
};

export const loadCarousel = async () => {
  const module = await import('embla-carousel-react');
  return module;
};

export const loadCharts = async () => {
  const module = await import('recharts');
  return module;
};

export type ThreeJS = typeof import('three');
export type FramerMotion = typeof import('framer-motion');