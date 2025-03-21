import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  err: any;
}

function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=32")
      .then((res) => {
        setPhotos(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(`Failed to load photos: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Photo Gallery</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border p-2 rounded-lg shadow-lg">
            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full rounded" />
            <h3 className="text-sm mt-2 font-semibold">{photo.title}</h3>
            <Link
              to={`/photo/${photo.id}`}
              className="bg-blue-500 text-white px-3 py-1 mt-2 inline-block rounded hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
