export default function Tooltip({
  children,
  element,
}: {
  children: React.ReactNode;
  element: React.ReactNode;
}) {
  return (
    <div className="inline-block relative group">
      <span className=" underline decoration-wavy decoration-neutral-400 group-hover:decoration-blue-500">
        {children}
      </span>
      <div className="absolute bottom-7 hidden group-hover:block">
        <p className="text-sm md:text-md bg-zinc-800 p-3 rounded-lg text-white">
          {element}
        </p>
        <div className="absolute w-2 h-2 bg-zinc-800 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
