import React from "react";
import { Photo } from "../types/types";

interface PhotoCardProps {
  photo: Photo;
  onViewDetails: (id: number) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-sm mt-2 font-poppins  flex-grow  text-black px-3 py-2 rounded-lg shadow-md">
        {photo.title}
      </h3>
      <button
        onClick={() => onViewDetails(photo.id)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 mt-2 inline-block rounded hover:bg-blue-600 transition text-left w-fit"
      >
        View Details
      </button>
    </div>
  );
};

export default PhotoCard;