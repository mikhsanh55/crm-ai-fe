import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false); // Controls mounting/unmounting
  const [isVisible, setIsVisible] = useState(false); // Controls visual transition

  useEffect(() => {
    if (isOpen) {
      setShowModal(true); // Mount the component
      // Give the DOM a moment to render before starting the transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true); // Start the enter animation
        });
      });
    } else {
      setIsVisible(false); // Start the exit animation
      // Wait for the transition to complete before unmounting
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 300); // Match Tailwind's duration-300
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [isOpen]);

  // Don't render anything if it's completely closed
  if (!showModal) return null;

  return (
    // Overlay: bg-opacity controlled by isVisible for smoother fade
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out
        ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
      onClick={onClose} // Close when clicking outside modal content
    >
      {/* Modal Content */}
      <div
        className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative transform transition-all duration-300 ease-in-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" // Increased text-2xl for better visibility
          onClick={onClose}
        >
          &#x2715; {/* Close button */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;