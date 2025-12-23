

interface ButtonProps {
  text: string;
  onClick?: () => void;
  showIcon?: boolean; 
  bgColor?: string;  
  textColor?: string; 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  showIcon = true,
  bgColor = 'bg-[#3ed634]', 
  textColor = 'text-black',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} 
        ${textColor} 
        ${className}
        group flex items-center justify-between 
        rounded-full 
        font-medium text-sm sm:text-base
        transition-transform active:scale-95  cursor-pointer

        ${showIcon ? 'pl-6 pr-2 py-2 gap-4' : 'px-8 py-3'}
      `}
    >
      <span className="font-medium">{text}</span>

      {showIcon && (
        <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;