import React from "react";
import PhotoCard from "./PhotoCard";
import { Photo } from "../types/types";

interface PhotoListProps {
  photos: Photo[];
  onViewDetails: (id: number) => void;
}
const PhotoList: React.FC<PhotoListProps> = ({ photos, onViewDetails }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default PhotoList;