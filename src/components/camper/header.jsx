import Meta from '../common/meta';

export default function CamperHeader({ title, meta, price }) {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
      </div>
      <div className="flex gap-4 mt-2">
        <Meta {...meta} />
      </div>
      <div className="font-semibold text-2xl mt-4">€{price}</div>
    </header>
  );
}
