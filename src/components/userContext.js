import React from "react";

// Perbaiki ejaan dari 'UserContetxt' menjadi 'UserContext'
const UserContext = React.createContext('Azhaa');

const UserProvider = UserContext.Provider;  // Menggunakan 'Provider' dari 'UserContext'
const UserConsumer = UserContext.Consumer;  // Menggunakan 'Consumer' dari 'UserContext'

export { UserProvider, UserConsumer };
export default UserContext
