export default function Badge({ label, icon }) {
  return (
    <li className="bg-gray-lightest rounded-full px-4 py-3 text-sm text-dark capitalize">
      <img src={icon} alt={label} className="w-5 h-5 inline-block mr-1" />
      {label}
    </li>
  );
}
