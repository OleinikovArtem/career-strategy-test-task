// import HeartIcon from '../../assets/icons/heart.svg';
import Heart from '../ui/icons/heart';
import Star from '../ui/icons/star';
import Map from '../ui/icons/map';

import Button from '../ui/button';

const TRUNCATE_LENGTH = 66;

export default function Card({ img, title, price, id, description }) {
  return (
    <li className="p-6 border-gray-light border-1 rounded-2xl flex gap-6">
      <div className="w-[292px] h-[320px] overflow-hidden rounded-2xl">
        <img src={img} className="object-cover h-full object-center" />
      </div>

      <div className="flex flex-col gap-6">
        <header>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-2xl">€{price}</span>
              <Button
                variant="icon"
                onClick={() => console.log('clicked heard', id)}
              >
                <Heart hover />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Star active />
              4.4(2 Reviews)
            </div>
            <div className="flex items-center gap-1">
              <Map active />
              Kyiv, Ukraine
            </div>
          </div>
        </header>

        <p className="text-dark-secondary">
          {description.length > TRUNCATE_LENGTH
            ? description.slice(0, TRUNCATE_LENGTH).trim() + '...'
            : description}
        </p>
      </div>
    </li>
  );
}
