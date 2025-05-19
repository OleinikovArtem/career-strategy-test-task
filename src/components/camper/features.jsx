import BadgeList from '../ui/badge-list';
import Details from './details';

export default function Features({ categories, characteristics }) {
  return (
    <div className="bg-almost-white py-11 px-13 flex flex-col gap-25 rounded-2xl">
      <BadgeList list={categories} />
      <Details characteristics={characteristics} />
    </div>
  );
}
