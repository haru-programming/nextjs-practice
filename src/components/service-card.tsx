type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
};

export function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <article className="border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-600">{description}</p>
      <p className="mt-6 border-t border-zinc-200 pt-4 text-sm font-semibold text-zinc-950">
        {price}
      </p>
    </article>
  );
}
