import classNames from "classnames";

export default function Tooltip({
  children,
  element,
  noUnderline,
  leftArrow,
}: {
  children: React.ReactNode;
  element: React.ReactNode;
  noUnderline?: boolean;
  leftArrow?: boolean;
}) {
  return (
    <div className="inline-block relative group">
      <span
        className={classNames(
          "decoration-wavy decoration-neutral-400 group-hover:decoration-blue-500",
          {
            underline: !noUnderline,
          }
        )}
      >
        {children}
      </span>
      <div className="absolute bottom-8 hidden group-hover:block min-w-[200px] w-full">
        <p className="text-sm md:text-md bg-zinc-800 p-3 rounded-lg text-white">
          {element}
        </p>
        {/* Arrow in the middle of the square */}
        {!leftArrow && (
          <div data-testid="center-arrow" className="absolute w-2 h-2 bg-zinc-800 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        )}
        {/* Arrow on the left side */}
        {leftArrow && (
          <div data-testid="left-arrow" className="absolute w-2 h-2 bg-zinc-800 transform rotate-45 -bottom-1 left-2"></div>
        )}
      </div>
    </div>
  );
}
