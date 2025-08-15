import React, { useEffect } from 'react';
import { useCountUp, useScrollAnimation } from '../hooks/useScrollAnimation';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  suffix = '',
  duration = 2000,
  delay = 0,
  className = '',
  style = {}
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLSpanElement>({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { count, start } = useCountUp(end, duration, delay);

  useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  return (
    <span
      ref={elementRef}
      className={`${className} ${isVisible ? 'number-glow' : ''}`}
      style={style}
    >
      {count}{suffix}
    </span>
  );
};

export default CountUp;
