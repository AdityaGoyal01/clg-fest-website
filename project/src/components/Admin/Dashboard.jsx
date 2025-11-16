import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../Hooks/useAdmin';



export default function Dashboard() {
  const { isLoggedIn } = useAdmin();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/admin/registrations', {
          headers: { Authorization: token }
        });

        if (Array.isArray(res.data)) {
          setRegistrations(res.data);
        } else {
          console.error('Unexpected response format:', res.data);
          setRegistrations([]);
        }
      } catch (err) {
        console.error('Error fetching registrations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Registered Participants</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : registrations.length === 0 ? (
        <p className="text-gray-500">No participants registered yet.</p>
      ) : (
        <ul className="space-y-2">
          {registrations.map((reg) => (
            <li
              key={reg._id}
              className="bg-white border border-gray-300 p-3 rounded shadow-sm"
            >
              <span className="font-semibold text-gray-500">{reg.name}</span> -
              <span className="font-semibold text-gray-500">{reg.branch}</span> - 
              <span className="font-semibold text-gray-500">{reg.phone}</span> -
              <span className="font-semibold text-gray-500">{reg.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
