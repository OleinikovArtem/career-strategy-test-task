import { cn } from '../../lib/utils';

export default function Price({ value, className }) {
  return <span className={cn('font-semibold text-2xl inline-block', className)}>€{value.toFixed(2)}</span>;
}
