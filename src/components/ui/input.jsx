import { cn } from '../../lib/utils';

export default function Input({ label, icon = null, className, ...props }) {
  return (
    <div className="flex flex-col gap-2 group">
      {label ? <label className="text-dark-tertiary">{label}</label> : null}
      <div className="flex bg-almost-white rounded-lg px-5 items-center gap-2">
        {icon}
        <input className={cn('py-4  outline-0 w-full', className)} {...props} />
      </div>
    </div>
  );
}
