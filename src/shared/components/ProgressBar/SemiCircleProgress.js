import React from 'react';

 export function SemiCircleProgress ({
  stroke = '#01DB83',
  strokeWidth = 10,
  background = '#FBFAFA',
  diameter = 180,
  orientation = 'up',
  direction = 'right',
  showPercentValue = false,
  percentage
}) {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;

  let percentageValue;
  if (percentage > 100) {
    percentageValue = 100;
  } else if (percentage < 0) {
    percentageValue = 0;
  } else {
    percentageValue = percentage;
  }
  const semiCirclePercentage = percentageValue * (circumference / 100);

  let rotation;
  if (orientation === 'down') {
    if (direction === 'left') {
      rotation = 'rotate(180deg) rotateY(180deg)';
    } else {
      rotation = 'rotate(180deg)';
    }
  } else {
    if (direction === 'right') {
      rotation = 'rotateY(180deg)';
    }
  }

  return (
    <div className="semicircle-container" style={{ position: 'relative' }}>
      <svg
        width={diameter}
        height={diameter / 2}
        style={{ transform: rotation, overflow: 'hidden' }}
      >
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
          }}
        />
      </svg>
      {showPercentValue && (
        <span
          className="semicircle-percent-value"
          style={{
            width: '100%',
            left: '0',
            textAlign: 'center',
            bottom: orientation === 'down' ? 'auto' : '0',
            position: 'absolute'
          }}
        >
          {percentage}%
        </span>
      )}
    </div>
  );
}