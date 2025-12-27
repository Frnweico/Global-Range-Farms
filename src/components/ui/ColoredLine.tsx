import React from 'react';

interface LineProps {
  bgColor: string;
  width: string;
  className?: string;
}

const ColoredLine: React.FC<LineProps> = ({ bgColor, width, className = "" }) => {
  return (
    <div 
      className={`h-2 ${className}`} 
      style={{ 
        backgroundColor: bgColor, 
        width: width 
      }}
    />
  )
}

export default ColoredLine