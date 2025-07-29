import { FaUserShield, FaUnlock, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const Toolbar = ({ onAction, onLogout, selectionCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">User Management</h2>
      <div className="flex flex-wrap justify-center sm:justify-end gap-3">
        <button
          onClick={() => onAction('BLOCK')}
          disabled={selectionCount === 0}
          className={`flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out
            ${selectionCount === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white shadow-sm'}`}
        >
          <FaUserShield className="mr-2" /> Block
        </button>
        <button
          onClick={() => onAction('UNBLOCK')}
          disabled={selectionCount === 0}
          className={`flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out
            ${selectionCount === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white shadow-sm'}`}
        >
          <FaUnlock className="mx-2" /></button>
        <button
          onClick={() => onAction('DELETE')}
          disabled={selectionCount === 0}
          className={`flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out
            ${selectionCount === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800 text-white shadow-sm'}`}
        >
          <FaTrash className="mx-2" /></button>
        <button
          onClick={onLogout}
          className="flex items-center px-4 py-2 rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition duration-150 ease-in-out"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
