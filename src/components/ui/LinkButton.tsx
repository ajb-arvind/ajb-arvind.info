import Link from 'next/link';

export const LinkButton = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className="cursor-pointer underline bg-bottom-right hover:bg-bottom-left transition-all duration-300 ease-in-out bg-linear-to-r from-[#ffef8d] to-transparent to-50% from-50% bg-size-[205%_100%]"
      {...props}
    />
  );
};
