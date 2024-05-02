export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 xs:px-8 sm:px-20 md:px-32 lg:px-48">{children}</div>
  );
}
