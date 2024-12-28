import { useEffect } from 'react';
import HubSpotForm from './BookTrial/components/HubSpotForm';
import PageTitle from './BookTrial/components/PageTitle';

const BookTrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <PageTitle />
        <HubSpotForm />
      </div>
    </section>
  );
};

export default BookTrial;