import Image from 'next/image';

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="select-none">
      <Image
        src="/logo_black.png"
        alt="Logo"
        width={size}
        height={size}
        className="block dark:hidden"
      />

      <Image
        src="/logo_white.png"
        alt="Logo"
        width={size}
        height={size}
        className="hidden dark:block"
      />
    </div>
  );
}
