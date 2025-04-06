import { useEffect } from 'react';

const useEscape = (closeModal) => {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [closeModal]);
};

export default useEscape;
