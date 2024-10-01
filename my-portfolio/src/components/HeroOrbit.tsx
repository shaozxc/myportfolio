import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) => {
  return (
    <div className='bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className=' bg-transparent flex items-start justify-start'
        style={{
          transform: `rotate(${rotation}deg)`, // Rotation is transform
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className=' bg-transparent  inline-flex'>
          {children}
        </div>
      </div>
    </div>
  );
};
