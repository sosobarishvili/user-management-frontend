import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Toolbar from '../components/Toolbar';
import UserTable from '../components/UserTable';

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.get('/api/users', config);
      setUsers(data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Session expired. Please log in.');
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAction = async (action) => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.post('/api/users/manage', { action, userIds: selectedUserIds }, config);
      toast.success(data.message);
      setSelectedUserIds([]);
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred.');
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.info('You are logged out.');
    navigate('/login');
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUserIds(users.map(user => user.id));
    } else {
      setSelectedUserIds([]);
    }
  };

  const handleSelectOne = (e, id) => {
    if (e.target.checked) {
      setSelectedUserIds(prev => [...prev, id]);
    } else {
      setSelectedUserIds(prev => prev.filter(userId => userId !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-20">
      <Toolbar
        onAction={handleAction}
        onLogout={handleLogout}
        selectionCount={selectedUserIds.length}
      />
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <UserTable
          users={users}
          selectedUserIds={selectedUserIds}
          onSelectAll={handleSelectAll}
          onSelectOne={handleSelectOne}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
