import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.svg"
        alt="Topslice"
        width={120}
        height={33}
        priority
      />
    </div>
  );
}
