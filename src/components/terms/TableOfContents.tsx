interface TableOfContentsProps {
  items: Array<{
    id: string;
    title: string;
  }>;
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <nav className="space-y-2">
        {items.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="block text-blue-600 hover:underline"
          >
            {title}
          </a>
        ))}
      </nav>
    </section>
  );
}
