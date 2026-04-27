export default function EventCard({ title, description }: any) {
  return (
    <div className="p-6 bg-[#111] rounded-xl">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
