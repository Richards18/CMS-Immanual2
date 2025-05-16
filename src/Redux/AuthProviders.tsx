import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => Promise<void>; // Correct return type
  logout: () => Promise<void>; // Add logout function
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setLoggedIn: () => Promise.resolve(), // Correct default implementation
  logout: () => Promise.resolve(), // Add default implementation for logout
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode; // Explicitly type the children prop as ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Inside AuthProvider
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        // Retrieve the login status from AsyncStorage
        const storedLoginStatus = await AsyncStorage.getItem('isLoggedIn');
        if (storedLoginStatus !== null) {
          setIsLoggedIn(JSON.parse(storedLoginStatus));
        }
      } catch (error) {
        console.error('Error loading authentication state:', error);
      }
    };

    loadAuthState();
  }, []);

  const setLoggedIn = async (value: boolean) => {
    try {
      setIsLoggedIn(value);
      // Store the authentication state in AsyncStorage
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(value));
    } catch (error) {
      console.error('Error setting authentication state:', error);
    }
  };

  const logout = async () => {
    try {
      setIsLoggedIn(false);
      await AsyncStorage.removeItem('authState');
    } catch (error) {
      console.error('Error removing authentication state:', error);
    }
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
