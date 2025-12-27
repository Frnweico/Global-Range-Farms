import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  href?: string; 
  textColor?: string;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  onClick,
  href,
  textColor = "text-black",
  className = "",
}) => {
  const baseClasses = `
    ${textColor} 
    ${className}
    group flex! items-center gap-2 
    border-b border-[#0A0A0A33] 
    pb-1 w-fit
    font-medium text-sm sm:text-base
    transition-all hover:border-black cursor-pointer font-geist font-medium text-base leading-[150%] tracking-[-1%] text-[#0E0E0E]
  `;

  const content = (
    <>
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 transition-transform group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default SecondaryButton;