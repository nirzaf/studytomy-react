interface TermsSectionProps {
  id: string;
  title: string;
  content: string;
}

export default function TermsSection({ id, title, content }: TermsSectionProps) {
  const renderComplexContent = (content: string) => {
    const parts = content.split('\n\n');
    return parts.map((part, index) => {
      if (part.includes(':')) {
        const [subTitle, ...subContent] = part.split(':');
        return (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{subTitle.trim()}</h3>
            <p className="text-gray-700">{subContent.join(':').trim()}</p>
          </div>
        );
      }
      return (
        <p key={index} className="text-gray-700 mb-4">
          {part.trim()}
        </p>
      );
    });
  };

  return (
    <section id={id} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {renderComplexContent(content)}
    </section>
  );
}
