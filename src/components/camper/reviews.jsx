import Rating from '../ui/rating';

const TOTAL_COUNT_OF_STARS = 5;

export default function Reviews({ list }) {
  return (
    <ul className="flex flex-col gap-11 pt-3">
      {list.map(({ comment, reviewer_name, reviewer_rating }) => (
        <li key={comment} className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-15 h-15 rounded-full bg-gray-lightest capitalize flex items-center justify-center text-2xl text-red-primary font-semibold">
              {reviewer_name[0]}
            </div>
            <div className="flex flex-col gap-1">
              <div className="capitalize font-semibold">{reviewer_name}</div>
              <Rating max={TOTAL_COUNT_OF_STARS} value={reviewer_rating} />
            </div>
          </div>

          <p className="text-dark-secondary">{comment}</p>
        </li>
      ))}
    </ul>
  );
}
