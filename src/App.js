import React from 'react';
import { AuthProvider } from './components/AuthContext'; // Updated path
import EventList from './components/EventList'; // Updated path
import Login from './components/Login'; // Updated path

const App = () => {
  return (
    <AuthProvider>
      <h1>Event Booking System</h1>
      <Login />
      <EventList />
    </AuthProvider>
  );
};

export default App;

