import Star from '../ui/icons/star';
import Map from '../ui/icons/map';

export default function Meta({ rating, reviewsTotal, location }) {
  return (
    <>
      <div className="flex items-center gap-1">
        <Star active />
        {rating}({reviewsTotal} Reviews)
      </div>
      <div className="flex items-center gap-1">
        <Map active />
        {location}
      </div>
    </>
  );
}
