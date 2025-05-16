export const createGalleryNavigator = (items) => {
  return {
    next: (currentIndex) => (currentIndex + 1) % items.length,
    prev: (currentIndex) => (currentIndex - 1 + items.length) % items.length
  };
};

export const handleGalleryNavigation = (e, currentIndex, items, setCurrentIndex) => {
  e.stopPropagation();
  const navigator = createGalleryNavigator(items);
  setCurrentIndex(navigator.next(currentIndex));
};

export const handleGalleryPrev = (e, currentIndex, items, setCurrentIndex) => {
  e.stopPropagation();
  const navigator = createGalleryNavigator(items);
  setCurrentIndex(navigator.prev(currentIndex));
}; 