// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../api/userService';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch profile');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;
