import { formatDistanceToNowStrict, format } from 'date-fns';

const UserTable = ({ users, selectedUserIds, onSelectAll, onSelectOne }) => {
  const allUsersSelected = users.length > 0 && selectedUserIds.length === users.length;

  const formatRelative = (dateString) => {
    if (!dateString) return 'N/A';
    return formatDistanceToNowStrict(new Date(dateString), { addSuffix: true });
  };

  const formatFull = (dateString) => {
    if (!dateString) return 'N/A';
    return format(new Date(dateString), 'MMMM dd, yyyy HH:mm:ss');
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                onChange={onSelectAll}
                checked={allUsersSelected}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out rounded cursor-pointer"
              />
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.length === 0 ? (
            <tr>
              <td colSpan="7" className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className={selectedUserIds.includes(user.id) ? 'bg-blue-50' : 'hover:bg-gray-50'}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedUserIds.includes(user.id)}
                    onChange={(e) => onSelectOne(e, user.id)}
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out rounded cursor-pointer"
                  />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span title={formatFull(user.lastLogin)}>
                    {formatRelative(user.lastLogin)}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${user.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span title={formatFull(user.createdAt)}>
                    {formatRelative(user.createdAt)}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
