import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { X } from "lucide-react";

interface SuccessToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export function SuccessToast({ message, show, onClose }: SuccessToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  if (!show) return null;

  return (
    <>
      {/* Confetti Animation */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: [
                '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', 
                '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'
              ][Math.floor(Math.random() * 8)],
            }}
          />
        ))}
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed top-20 right-4 z-[101] transition-all duration-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <Card className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-2xl max-w-sm border-0">
          <div className="flex items-start gap-4">
            <div className="text-4xl animate-bounce">🎉</div>
            <div className="flex-1">
              <h3 className="text-xl mb-2">Congratulations!</h3>
              <p className="text-green-50">{message}</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </Card>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0;
          animation: confetti-fall 3s linear forwards;
        }
      `}</style>
    </>
  );
}
