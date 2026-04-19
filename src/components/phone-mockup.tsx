import Image from "next/image";

interface PhoneMockupProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
}

export function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative w-[280px] sm:w-[300px] ${className}`}>
      <div className="relative rounded-[3rem] border-[6px] border-surface-light bg-black p-2 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-2xl z-10" />
        <div className="relative aspect-[9/19.5] rounded-[2.4rem] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-top"
            sizes="300px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
