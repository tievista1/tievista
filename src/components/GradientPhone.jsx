import { Phone } from "lucide-react";


function GradientPhone() {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="33%" stopColor="#feca57" />
          <stop offset="66%" stopColor="#48dbfb" />
          <stop offset="100%" stopColor="#5f27cd" />
        </linearGradient>
      </defs>

      <Phone
        size={40}
        fill="url(#phoneGradient)"
        stroke="url(#phoneGradient)"
      />
    </svg>
  );
}

export default GradientPhone;