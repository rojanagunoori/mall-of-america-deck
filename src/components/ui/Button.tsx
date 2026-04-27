export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-3 bg-[#D4AF37] text-black rounded-full font-medium hover:opacity-90 transition">
      {children}
    </button>
  );
}
