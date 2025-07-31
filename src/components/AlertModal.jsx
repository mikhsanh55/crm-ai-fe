import Modal from "./Modal";

const AlertModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-3">Alert</h2> {/* Added mb-3 for spacing */}
      <p className="text-gray-700">
        This is an important message.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Added hover/focus styles
        onClick={onClose}
      >
        OK
      </button>
    </Modal>
  );
};

export default AlertModal;