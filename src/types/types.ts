export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface PhotoState {
  photos: Photo[];
  loading: boolean;
  error: string | null;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

