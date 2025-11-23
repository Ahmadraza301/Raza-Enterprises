import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [bankApplications, setBankApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [bookingsRes, bankRes, usersRes] = await Promise.all([
        fetch('http://localhost:8081/api/bookings'),
        fetch('http://localhost:8081/api/bank-accounts'),
        fetch('http://localhost:8081/api/auth/users')
      ]);

      const bookingsData = await bookingsRes.json();
      const bankData = await bankRes.json();
      const usersData = await usersRes.json();

      setBookings(Array.isArray(bookingsData) ? bookingsData : []);
      setBankApplications(Array.isArray(bankData) ? bankData : []);
      setUsers(usersData.users || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      PENDING: 'status-pending',
      IN_PROGRESS: 'status-progress',
      COMPLETED: 'status-completed',
      REJECTED: 'status-rejected',
      CANCELLED: 'status-cancelled',
      INITIATED: 'status-pending',
      DOCUMENTS_PENDING: 'status-progress',
      CREATED: 'status-completed',
      FAILED: 'status-rejected'
    };
    return <span className={`status-badge ${statusColors[status]}`}>{status}</span>;
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="container">
          <h1>🔐 Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{bookings.length}</h3>
            <p>Total Bookings</p>
          </div>
          <div className="stat-card">
            <h3>{bookings.filter(b => b.status === 'PENDING').length}</h3>
            <p>Pending Requests</p>
          </div>
          <div className="stat-card">
            <h3>{bankApplications.length}</h3>
            <p>Bank Applications</p>
          </div>
          <div className="stat-card">
            <h3>{users.length}</h3>
            <p>Registered Users</p>
          </div>
        </div>

        <div className="admin-tabs">
          <button 
            className={activeTab === 'bookings' ? 'active' : ''} 
            onClick={() => setActiveTab('bookings')}
          >
            Service Bookings ({bookings.length})
          </button>
          <button 
            className={activeTab === 'bank' ? 'active' : ''} 
            onClick={() => setActiveTab('bank')}
          >
            Bank Applications ({bankApplications.length})
          </button>
          <button 
            className={activeTab === 'users' ? 'active' : ''} 
            onClick={() => setActiveTab('users')}
          >
            Users ({users.length})
          </button>
        </div>

        <div className="admin-content">
          {activeTab === 'bookings' && (
            <div className="bookings-table">
              <h2>Service Bookings</h2>
              {bookings.length === 0 ? (
                <p className="no-data">No bookings yet</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Reference No</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(booking => (
                      <tr key={booking.id}>
                        <td><strong>{booking.referenceNo}</strong></td>
                        <td>{booking.customerName}</td>
                        <td>{booking.customerEmail}</td>
                        <td>{booking.customerPhone}</td>
                        <td>{getStatusBadge(booking.status)}</td>
                        <td>{new Date(booking.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="bank-table">
              <h2>Bank Account Applications</h2>
              {bankApplications.length === 0 ? (
                <p className="no-data">No bank applications yet</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Applicant Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Account Type</th>
                      <th>Status</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankApplications.map(app => (
                      <tr key={app.id}>
                        <td>{app.id}</td>
                        <td>{app.applicantName}</td>
                        <td>{app.applicantEmail}</td>
                        <td>{app.applicantPhone}</td>
                        <td>{app.accountType}</td>
                        <td>{getStatusBadge(app.status)}</td>
                        <td>{new Date(app.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="users-table">
              <h2>Registered Users</h2>
              {users.length === 0 ? (
                <p className="no-data">No users yet</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Registered At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><span className="role-badge">{user.role}</span></td>
                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
