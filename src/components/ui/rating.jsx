import Star from './icons/star';

export default function Rating({ max, value }) {
  const list = new Array(max).fill(0);
  return (
    <div className="flex gap-1">
      {list.map((_, index) => (
        <Star active={index < value} />
      ))}
    </div>
  );
}
