import { cn } from '../../lib/utils';

export default function Filter({ label, list, selected, toggleSelect }) {
  return (
    <div className="max-w-[360px]">
      <h3 className="text-2xl font-semibold">{label}</h3>
      <hr className="border-gray-light my-6" />
      <ul className="flex flex-wrap gap-3">
        {list.map((item) => (
          <li
            key={item.value}
            onClick={toggleSelect?.bind(null, item.value)}
            className={cn(
              'flex flex-col items-center justify-center text-center gap-2 border border-gray-light hover:border-red-primary rounded-lg cursor-pointer w-[112px] h-[96px]',
              'transition-all duration-200 ease-in-out',
              { ['border-red-primary']: selected.includes(item.value) },
            )}
          >
            <img src={item.icon} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
