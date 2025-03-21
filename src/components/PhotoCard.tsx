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
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-sm mt-2 font-poppins  flex-grow  text-black px-3 py-2 rounded-lg">
        {photo.title}
      </h3>
      <button
        onClick={() => onViewDetails(photo.id)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-2 mt-2 rounded transition-all duration-300 transform hover:scale-110 hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-xl"
      >
        View Details
      </button>
    </div>
  );
};

export default PhotoCard;