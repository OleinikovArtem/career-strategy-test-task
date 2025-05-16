import { useParams } from 'react-router-dom';
import useCamperById from '../hooks/useCamperById';

import CamperHeader from '../components/camper/header';
import Gallery from '../components/camper/gallery';

export default function CamperPage() {
  const { id } = useParams();
  const { error, isLoading, data } = useCamperById(id);

  console.log('CamperPage', id, data);

  if (error) {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center h-full">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <main className="container pt-12">
        <div className="flex items-center justify-center h-full">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container pt-12">
      <CamperHeader
        title={data.name}
        meta={{
          rating: data.rating,
          reviewsTotal: data.reviews?.length,
          location: data.location,
        }}
        price={data.price}
      />
      <Gallery list={data.gallery} />
      <p className="text-dark-secondary mt-7">{data.description}</p>
    </main>
  );
}
