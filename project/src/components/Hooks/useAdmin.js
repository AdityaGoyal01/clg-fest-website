export function useAdmin() {
  const token = localStorage.getItem('token');
  const eventName = localStorage.getItem('eventName');

  return {
    isLoggedIn: !!token,
    eventName,
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('eventName');
    }
  };
}

