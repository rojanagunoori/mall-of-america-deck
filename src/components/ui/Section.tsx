export default function Section({ children, id }: any) {
  return (
    <section id={id} className="py-32 px-6 max-w-6xl mx-auto">
      {children}
    </section>
  );
}
