export default function Details({ characteristics }) {
  return (
    <div>
      <h3 className="text-xl pb-6 border-b border-gray-light">
        Vehicle details
      </h3>
      <ul>
        {Object.entries(characteristics).map(([key, value]) => (
          <li
            key={key}
            className="flex justify-between py-4 font-medium capitalize"
          >
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
