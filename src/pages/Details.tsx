import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PhotoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const photo = useSelector((state: RootState) =>
    state.photos.photos.find((p) => p.id === Number(id))
  );

  if (!photo) return <p className="text-center text-gray-500">Photo not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-4">{photo.title}</h2>
      <p className="text-gray-600 mt-2">Album ID: {photo.albumId}</p>
      <p className="text-gray-600">Photo ID: {photo.id}</p>
    </div>
  );
};

export default PhotoDetails;
