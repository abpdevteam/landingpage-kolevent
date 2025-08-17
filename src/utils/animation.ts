// Animation classes for different effects
export const fadeInUp = "animate-[fadeInUp_0.8s_ease-out_forwards]";
export const fadeInLeft = "animate-[fadeInLeft_0.8s_ease-out_forwards]";
export const fadeInRight = "animate-[fadeInRight_0.8s_ease-out_forwards]";
export const fadeIn = "animate-[fadeIn_0.8s_ease-out_forwards]";
export const scaleIn = "animate-[scaleIn_0.6s_ease-out_forwards]";
export const slideInUp = "animate-[slideInUp_0.7s_ease-out_forwards]";
export const bounceIn = "animate-[bounceIn_0.9s_ease-out_forwards]";
export const slideInScale = "animate-[slideInScale_0.8s_ease-out_forwards]";

// Base classes for initial states
export const animationBase = "opacity-0 transform";
export const translateYUp = "translate-y-8";
export const translateYUpMobile = "translate-y-4"; // Smaller movement for mobile
export const translateXLeft = "-translate-x-8";
export const translateXRight = "translate-x-8";
export const scaleSmall = "scale-95";
export const scaleTiny = "scale-90";

// Stagger delays for multiple elements
export const staggerDelays = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-500",
  "delay-700",
  "delay-900",
  "delay-[1100ms]",
  "delay-[1300ms]",
];

// Animation utility functions
export const getAnimationClasses = (
  isVisible: boolean,
  animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'slideInUp' | 'bounceIn' | 'slideInScale' = 'fadeInUp',
  delay: number = 0
) => {
  const baseClasses = [animationBase];
  
  switch (animationType) {
    case 'fadeInUp':
      baseClasses.push("md:translate-y-8 translate-y-4"); // Responsive transform
      break;
    case 'fadeInLeft':
      baseClasses.push("md:-translate-x-8 -translate-x-4"); // Smaller movement on mobile
      break;
    case 'fadeInRight':
      baseClasses.push("md:translate-x-8 translate-x-4"); // Smaller movement on mobile
      break;
    case 'scaleIn':
      baseClasses.push(scaleSmall);
      break;
    case 'slideInUp':
      baseClasses.push("md:translate-y-12 translate-y-6");
      break;
    case 'bounceIn':
      baseClasses.push(scaleTiny);
      break;
    case 'slideInScale':
      baseClasses.push("md:translate-y-8 translate-y-4", scaleTiny);
      break;
    default:
      break;
  }

  if (delay > 0 && delay < staggerDelays.length) {
    baseClasses.push(staggerDelays[delay]);
  }

  if (isVisible) {
    switch (animationType) {
      case 'fadeInUp':
        baseClasses.push(fadeInUp);
        break;
      case 'fadeInLeft':
        baseClasses.push(fadeInLeft);
        break;
      case 'fadeInRight':
        baseClasses.push(fadeInRight);
        break;
      case 'scaleIn':
        baseClasses.push(scaleIn);
        break;
      case 'slideInUp':
        baseClasses.push(slideInUp);
        break;
      case 'bounceIn':
        baseClasses.push(bounceIn);
        break;
      case 'slideInScale':
        baseClasses.push(slideInScale);
        break;
      default:
        baseClasses.push(fadeIn);
        break;
    }
  }

  return baseClasses.join(' ');
};

// Mobile-specific animation helper
export const getMobileAnimationClasses = (
  isVisible: boolean,
  animationType: 'gentle' | 'scale' | 'slide' = 'gentle',
  delay: number = 0
) => {
  const baseClasses = ["opacity-0 transform"];
  
  switch (animationType) {
    case 'gentle':
      baseClasses.push("translate-y-2 scale-98");
      break;
    case 'scale':
      baseClasses.push("scale-95");
      break;
    case 'slide':
      baseClasses.push("translate-y-4");
      break;
  }

  if (delay > 0 && delay < staggerDelays.length) {
    baseClasses.push(staggerDelays[delay]);
  }

  if (isVisible) {
    baseClasses.push("animate-[gentleFadeIn_0.6s_ease-out_forwards]");
  }

  return baseClasses.join(' ');
};

// Animation timing presets
export const animationPresets = {
  fast: { duration: 300, ease: 'ease-out' },
  normal: { duration: 600, ease: 'ease-out' },
  slow: { duration: 1000, ease: 'ease-out' },
  bounce: { duration: 800, ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
};