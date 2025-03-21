import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

function Details() {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        setPhoto(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load photo details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-xl font-bold">{photo?.title}</h2>
      <img src={photo?.url} alt={photo?.title} className="w-full max-w-lg mx-auto mt-4 rounded-lg" />
      <p className="mt-2">Album ID: {photo?.albumId}</p>
      <p>Photo ID: {photo?.id}</p>
    </div>
  );
}

export default Details;
