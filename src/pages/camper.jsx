import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import useCamperById from '../hooks/useCamperById';

import CamperHeader from '../components/camper/header';
import Gallery from '../components/camper/gallery';
import Features from '../components/camper/features';
import Reviews from '../components/camper/reviews';
import BookForm from '../components/camper/book-form';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tab';

import { mapCategoriesByProduct } from '../lib/product';

export default function CamperPage() {
  const { id } = useParams();
  const { error, isLoading, data } = useCamperById(id);

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

  const characteristics = {
    form: data.form,
    length: data.length,
    width: data.width,
    height: data.height,
    tank: data.tank,
    consumption: data.consumption,
  };

  const handleBook = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Booking data:', data);
    toast.success('Booking successful!');

    event.target.reset();
  };

  return (
    <main className="container pt-12 pb-20">
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

      <Tabs defaultValue="features" className="mt-15">
        <TabsList className="flex gap-10 justify-start border-b border-gray-light">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-10 lg:flex-row justify-between pt-11">
          <div className="w-full lg:w-1/2">
            <TabsContent value="features">
              <Features categories={mapCategoriesByProduct(data)} characteristics={characteristics} />
            </TabsContent>

            <TabsContent value="reviews">
              <Reviews list={data.reviews} />
            </TabsContent>
          </div>
          <div className="w-full lg:w-1/2">
            <BookForm onSubmit={handleBook} />
          </div>
        </div>
      </Tabs>
    </main>
  );
}
