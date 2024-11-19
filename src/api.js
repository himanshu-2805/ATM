import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Make sure this matches your JSON server configuration
});

/**
 * Fetch user details by account number and PIN
 */
export const getUser = async (accountNumber, pin) => {
  try {
    const response = await api.get(`/users`, {
      params: {
        accountNumber,
        pin,
      },
    });

    console.log("Fetched user from API:", response.data[0]);

    // Return the first user that matches (or null if no match)
    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

/**
 * Update user balance by ID
 */
export const updateUserBalance = async (userId, newBalance) => {
  try {
    const response = await api.patch(`/users/${userId}`, { balance: newBalance });
    return response.data;
  } catch (error) {
    console.error('Error updating balance:', error);
    throw error;
  }
};
