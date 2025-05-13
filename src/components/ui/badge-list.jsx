import Badge from './badge';

export default function BadgeList({ list }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {list?.map((item) => (
        <Badge key={item.label} label={item.label} icon={item.icon} />
      ))}
    </ul>
  );
}
