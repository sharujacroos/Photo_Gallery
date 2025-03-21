import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPhotos } from "../redux/photoSlice";
import { useNavigate } from "react-router-dom";
import PhotoList from "../components/PhotoList";
import Pagination from "../components/Pagination"; 
import SearchInput from "../components/SearchInput"; 

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { photos, loading, error } = useSelector((state: RootState) => state.photos);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const photosPerPage = 10;

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleViewDetails = (id: number) => {
    navigate(`/photo/${id}`);
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Photos:", filteredPhotos); 

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg animate-fade-in">
        Photo Gallery
      </h1>
      <SearchInput
        placeholder="Search photos by title..."
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <PhotoList photos={currentPhotos} onViewDetails={handleViewDetails} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;