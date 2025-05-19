import { cn } from '../../lib/utils';

export default function Filter({ label, list, selected, onChange, ...props }) {
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = selected.includes(value);

    if (props.type === 'radio') {
      onChange(checked ? [] : [value]);
      return;
    }

    // For checkboxes
    if (checked) {
      const newSelected = selected.filter((item) => item !== value);
      onChange(newSelected);
      return;
    } else {
      const newSelected = [...selected, value];
      onChange(newSelected);
      return;
    }
  };

  return (
    <div className="max-w-[360px]">
      <h3 className="text-2xl font-semibold">{label}</h3>
      <hr className="border-gray-light my-6" />
      <ul className="flex flex-wrap gap-3">
        {list.map((item) => {
          const checked = selected.includes(item.value);
          return (
            <li key={item.value}>
              <input
                id={item.value}
                hidden
                checked={checked}
                value={item.value}
                onChange={handleChange}
                {...props}
                type="checkbox"
              />
              <label
                htmlFor={item.value}
                className={cn(
                  'flex flex-col items-center justify-center text-center gap-2 border border-gray-light hover:border-red-primary rounded-lg cursor-pointer w-[112px] h-[96px]',
                  'transition-all duration-200 ease-in-out',
                  { ['border-red-primary']: checked },
                )}
              >
                <img src={item.icon} />
                <span>{item.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
