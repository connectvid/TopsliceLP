interface LogoProps {
  variant?: "dark" | "white";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const fill = variant === "dark" ? "#09090b" : "#ffffff";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Three stacked planes with a diagonal slice through the top */}
        <rect x="1" y="16" width="22" height="4.5" rx="1" fill={fill} opacity="0.1" />
        <rect x="1" y="10" width="22" height="4.5" rx="1" fill={fill} opacity="0.3" />
        <rect x="1" y="4" width="22" height="4.5" rx="1" fill="#6366f1" />
        <path d="M15 4h7a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-1L15 4z" fill="#4f46e5" />
      </svg>
      <span
        className={`text-[1.05rem] font-semibold tracking-[-0.025em] ${
          variant === "dark" ? "text-[#09090b]" : "text-white"
        }`}
      >
        Topslice
      </span>
    </div>
  );
}
