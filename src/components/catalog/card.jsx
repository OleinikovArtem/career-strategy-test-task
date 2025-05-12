export default function Card({ img }) {
  return (
    <div className="p-6 border-gray-light border-1 rounded-2xl flex">
      <div>
        <img src={img} />
      </div>
      <div></div>
    </div>
  );
}
