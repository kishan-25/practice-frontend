import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) {
      alert('You are not logged in');
      return;
    }

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get('https://reqres.in/api/users?page=2', headers)
      .then((res) => {
        setUsers(res.data.data); // array of users
      })
      .catch(() => {
        alert('Failed to fetch profile data');
      });
  }, []);

  const handleLogout = () => {
    setUsers([]);
    localStorage.removeItem('token');
    alert('Log out success');
  };

  return (
    <div className="p-4">
      <Link to="/">
      <button onClick={handleLogout} className="m-2 p-2 bg-red-500 text-white rounded">
        Log Out
      </button>
      </Link>

      {users.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold my-4">User List:</h2>
          {users.map((user) => (
            <div key={user.id} className="my-4 border-b pb-2">
              <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <img className='rounded-full h-20 w-20 mt-2' src={user.avatar} alt="Avatar" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Loading user data...</p>
      )}
    </div>
  );
}
