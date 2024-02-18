import React, { useEffect, useState } from 'react';

const PageProgressBar = ({ color = '#4caf50', height = '5px', showPercentage = true }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="horizontal-progress-bar-container">
      <div className="horizontal-progress-bar" style={{ height }}>
        <div className="progress" style={{ width: `${scrollProgress}%`, backgroundColor: color }} />
        {showPercentage && <div className="progress-label">{Math.round(scrollProgress)}%</div>}
      </div>
    </div>
  );
};

export default PageProgressBar;