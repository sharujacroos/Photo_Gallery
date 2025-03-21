import React from "react";
import { Photo } from "../types/types";
import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: Photo;
  onViewDetails: (id: number) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-40 to-purple-50 rounded-lg shadow-md p-4 flex flex-col items-center"
    >
      <img
        src={photo.thumbnailUrl}
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-sm mt-2 font-poppins flex-grow text-black px-3 py-2 rounded-lg">
        {photo.title}
      </h3>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onViewDetails(photo.id)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-2 mt-2 rounded transition-all duration-300 shadow-md hover:shadow-xl"
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

export default PhotoCard;