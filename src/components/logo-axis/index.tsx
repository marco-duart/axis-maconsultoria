const LogoAxis = ({ width = 200, height = 200 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="axisGradient"
          x1="100"
          y1="40"
          x2="100"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D1FF" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <path
        d="M100 20L169.282 60V140L100 180L30.718 140V60L100 20Z"
        stroke="#1B1F24"
        strokeWidth="1"
      />

      <rect
        x="98"
        y="35"
        width="4"
        height="130"
        rx="2"
        fill="url(#axisGradient)"
        style={{ filter: "url(#glow)" }}
      />

      <path
        d="M50 140V70L75 95L100 70"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M100 70L125 140M110 115H140"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="100" cy="70" r="4" fill="#00D1FF" />
      <circle cx="125" cy="140" r="4" fill="#D4AF37" />
      <circle cx="50" cy="140" r="4" fill="#00D1FF" />
    </svg>
  );
};

export default LogoAxis;
