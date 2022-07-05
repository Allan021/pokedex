import { useCallback, useState } from "react";

export const useOpenViewer = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const handleImageClick = (ind: number) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return {
    selectedImage,
    isViewerOpen,
    currentImage,

    openImageViewer,
    closeImageViewer,
    handleImageClick,
  };
};
