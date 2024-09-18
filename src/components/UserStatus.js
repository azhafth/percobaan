import React, { useState } from 'react';

function UserStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        {isLoggedIn ? (
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Selamat Datang, Pengguna!</h1>
        ) : (
          <h1 className="text-2xl font-bold text-yellow-600 mb-4">Silakan Login</h1>
        )}
        <button
          className={`px-6 py-2 text-white rounded-md transition duration-300 ease-in-out ${
            isLoggedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default UserStatus;
