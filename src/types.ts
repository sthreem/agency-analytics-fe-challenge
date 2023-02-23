// Interfaces
interface PhotoMetrics {
  height: number;
  width: number;
}

interface SharedUser {
  id: string;
  name: string;
  avatar: string;
}

export interface Photo {
  id: string;
  url: string;
  filename: string;
  description: string
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  dimensions: PhotoMetrics;
  resolution: PhotoMetrics;
  sizeInBytes: number;
  sharedWith: SharedUser[];
  favorited: boolean;
}

export interface PhotosState {
  status: 'idle' | 'loading' | 'failed';
  photos: Photo[];
  error: string | null;
  selectedPhoto: Photo | null;
  favorites: Photo[];
}

export interface TabHeaderProps {
  isActive: boolean;
}

export interface TabGridProps {
  index: number;
  isHidden: boolean;
  isFavorites: boolean;
}

export interface GridPhotoProps {
  photo: Photo;
  key: number;
}

export interface PhotoProps {
  loaded: boolean;
}