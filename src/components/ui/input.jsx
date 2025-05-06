import React from 'react';
import { cn } from '../../lib/utils';
import clsx from 'clsx';

export default function Input({ label, icon, className, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <label className="text-dark-tertiary">{label}</label> : null}
      <div className="flex bg-almost-white rounded-lg px-5">
        {icon ? (
          <img src={icon} alt="icon" className={clsx(' mr-1')}></img>
        ) : null}
        <input className={cn('py-4  outline-0', className)} {...props} />
      </div>
    </div>
  );
}
