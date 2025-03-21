import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPhotos } from "../redux/photoSlice";
import { useNavigate } from "react-router-dom";
import PhotoList from "../components/PhotoList";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { photos, loading, error } = useSelector((state: RootState) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos()); 
  }, [dispatch]);

  const handleViewDetails = (id: number) => {
    navigate(`/photo/${id}`);
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg animate-fade-in">
        Photo Gallery</h1>
      <PhotoList photos={photos} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default Home;
