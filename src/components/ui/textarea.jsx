import { cn } from '../../lib/utils';

export default function Textarea({ label, className, ...props }) {
  return (
    <div className="flex flex-col gap-2 group">
      {label ? <label className="text-dark-tertiary">{label}</label> : null}
      <div className="flex bg-almost-white rounded-lg px-5 items-center gap-2">
        <textarea
          className={cn('py-4  outline-0 w-full resize-none', className)}
          {...props}
        />
      </div>
    </div>
  );
}
