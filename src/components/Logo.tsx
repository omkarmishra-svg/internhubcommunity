import logoImage from "figma:asset/1daa135f4290d86cac69d18bda4c6fb0b8d02bb8.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-sm" },
    md: { container: "w-10 h-10", text: "text-base" },
    lg: { container: "w-16 h-16", text: "text-xl" },
    xl: { container: "w-24 h-24", text: "text-3xl" },
  };

  const { container, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${container} relative group cursor-pointer`}>
        {/* Outer circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 rounded-2xl animate-pulse-slow shadow-lg group-hover:shadow-xl transition-shadow"></div>
        
        {/* Inner design */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* InternHub Logo */}
          <img 
            src={logoImage}
            alt="InternHub Logo"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>

        {/* Sparkle effect */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <div className={`${text} font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight`}>
            InternHub
          </div>
          <div className={`text-xs text-muted-foreground -mt-0.5`}>
            Powered by AI Guru
          </div>
        </div>
      )}
    </div>
  );
}
