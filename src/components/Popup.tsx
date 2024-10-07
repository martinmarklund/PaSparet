const Popup: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-slate-500 p-4 rounded shadow.lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-4 p-2 bg-blue-950 text-black rounded"
      >
        OK
      </button>
    </div>
  </div>
);

export default Popup;
