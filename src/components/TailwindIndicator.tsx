const breakpoints = [
  { name: 'xs', className: 'block sm:hidden' },
  { name: 'sm', className: 'hidden sm:block md:hidden' },
  { name: 'md', className: 'hidden md:block lg:hidden' },
  { name: 'lg', className: 'hidden lg:block xl:hidden' },
  { name: 'xl', className: 'hidden xl:block 2xl:hidden' },
  { name: '2xl', className: 'hidden 2xl:block 3xl:hidden' },
  { name: '3xl', className: 'hidden 3xl:block 4xl:hidden' },
  { name: '4xl', className: 'hidden 4xl:block 5xl:hidden' },
  { name: '5xl', className: 'hidden 5xl:block' },
];

export function TailwindIndicator() {
  return (
    <div className="fixed bottom-1 right-1 z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-white text-xs">
      {breakpoints.map(({ name, className }) => (
        <div key={name} className={className}>
          {name}
        </div>
      ))}
    </div>
  );
}
