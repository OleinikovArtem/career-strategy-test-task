import Heart from '../ui/icons/heart';

import BadgeList from '../ui/badge-list';
import Button from '../ui/button';
import Price from '../ui/price';

import Meta from '../common/meta';

const TRUNCATE_LENGTH = 66;

export default function Card({
  img,
  title,
  price,
  id,
  description,
  categories,
  rating,
  location,
  reviewsTotal,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <li className="p-6 border-gray-light border-1 rounded-2xl flex gap-6 flex-col md:flex-row">
      <div className="min-w-[292px] md:w-[292px] h-[320px] overflow-hidden rounded-2xl">
        <img src={img} className="object-cover h-full object-center" />
      </div>

      <div className="flex flex-col gap-6 items-start">
        <header className="w-full">
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <div className="flex gap-3 md:items-center">
              <Price value={price} />
              <Button className="h-6" variant="icon" onClick={() => toggleFavorite(id)}>
                <Heart hover isActive={isFavorite} />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <Meta rating={rating} location={location} reviewsTotal={reviewsTotal} />
          </div>
        </header>

        <p className="text-dark-secondary">
          {description.length > TRUNCATE_LENGTH ? description.slice(0, TRUNCATE_LENGTH).trim() + '...' : description}
        </p>

        <BadgeList list={categories} />

        <Button variant="primary" className="mt-auto" asLink to={`/catalog/${id}`}>
          Show more
        </Button>
      </div>
    </li>
  );
}
