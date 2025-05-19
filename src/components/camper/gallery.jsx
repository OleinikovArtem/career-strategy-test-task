export default function Gallery({ list }) {
  return (
    <div className="flex gap-12 mt-7">
      {list?.map(({ thumb }) => (
        <img key={thumb} src={thumb} className="max-w-[292px] h-[312px] object-cover rounded-lg mt-4" />
      ))}
    </div>
  );
}
