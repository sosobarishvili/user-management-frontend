// Logo.jsx or Logo.tsx
export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="120"
      viewBox="0 0 400 120"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="120" rx="20" ry="20" fill="url(#bgGradient)" />

      {/* User Icon */}
      <circle cx="60" cy="60" r="25" fill="#fff" />
      <circle cx="60" cy="50" r="10" fill="#4facfe" />
      <path d="M45 70c0-8 10-10 15-10s15 2 15 10" fill="#4facfe" />

      {/* Text */}
      <text x="120" y="55" fontFamily="Segoe UI, sans-serif" fontSize="24" fill="#ffffff" fontWeight="600">
        User Management
      </text>
      <text x="120" y="85" fontFamily="Segoe UI, sans-serif" fontSize="18" fill="#e0f7ff">
        Admin Dashboard App
      </text>
    </svg>
  );
}
