
interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  textColor?: string; 
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  text, 
  onClick, 
  textColor = "text-black", 
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${textColor} 
        ${className}
        group flex items-center gap-2 
        border-b border-gray-300 
        pb-1
        font-medium text-sm sm:text-base
        transition-all hover:border-black /* Darkens line on hover */
      `}
    >
      <span>{text}</span>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-5 h-5 transition-transform group-hover:translate-x-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
}

export default SecondaryButton;