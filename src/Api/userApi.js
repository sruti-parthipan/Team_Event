export const validateUser = async (username, password) => {
    try {
      const response = await fetch(`http://localhost:8000/users?name=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, message: 'Invalid username or password' };
      }
    } catch (err) {
      console.log('Error validating User:', err);
      return { success: false, message: 'Error validating User' };
    }
  };
  