import React from 'react';
import { useAuth } from '../lib/auth-context';

const AuthGuard = ({ children, fallback }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If authenticated, render children
  if (isAuthenticated()) {
    return children;
  }

  // If not authenticated, render fallback or redirect
  return fallback || (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      You must be logged in to view this page.
    </div>
  );
};

export default AuthGuard;
