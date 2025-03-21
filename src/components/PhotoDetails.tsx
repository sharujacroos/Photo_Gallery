import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Photo } from "../types/types";

const PhotoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get<Photo>(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        setPhoto(response.data);
      } catch (err) {
        setError("Failed to load photo details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-lg p-6 max-h-[90vh] overflow-y-auto transform transition-all duration-500 hover:scale-105">
        {photo && (
          <>
            <img
              src={photo.url}
            //   alt={photo.title}
              className="w-full h-60 object-cover rounded-lg shadow-sm"
            />
            <h2 className="text-xl font-bold mt-4 text-center text-gray-800">{photo.title}</h2>
            
            <div className="flex justify-between items-center mt-4 border-t pt-3">
              <p className="text-gray-700 font-medium">📂 Album ID: {photo.albumId}</p>
              <p className="text-gray-700 font-medium">🆔 Photo ID: {photo.id}</p>
            </div>

            <div className="flex justify-center mt-6">
              <a
                href="/"
                className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-purple-500 hover:shadow-lg"
              >
                🔙 Back to Gallery
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoDetails;
