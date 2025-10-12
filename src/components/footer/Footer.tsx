import { COPYRIGHT_REMARK } from '@/lib/constant';
import { Separator } from '../ui/Separator';

const COLORS = ['red', 'blue', 'green', 'yellow', 'gray', 'black'];

export const Footer = () => {
  return (
    <section className="px-4 group">
      <Separator className="h-1! my-4" />
      <footer className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {COLORS.map((item) => (
            <span
              key={item}
              className="size-4 bg-[#c5c5c5]"
              style={{
                background: item,
              }}
            />
          ))}
        </div>
        <p>{COPYRIGHT_REMARK}</p>
      </footer>
      <div className="h-20"></div>
    </section>
  );
};
