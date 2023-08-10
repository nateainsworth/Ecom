import { defineStore } from 'pinia';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

interface User {
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null; 
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
    user: null,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post<{ token: string; user: User }>('/api/login', { email, password });
        const { token, user } = response.data;

        this.isAuthenticated = true;
        this.user = user;

        this.setToken(token);
      } catch (error) {
        console.error('Login failed', error);
        throw new Error('Login failed');
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('jwtTokenExpiration');
    },

    async checkAuth() {
      const jwtToken = localStorage.getItem('jwtToken');
      const expirationTime = localStorage.getItem('jwtTokenExpiration');

      if (jwtToken && expirationTime) {
        if (Date.now() < Number(expirationTime)) {
          try {
            const response = await axios.post<{ user: User }>('/api/checkAuth', { token: jwtToken });
            const { user } = response.data;
            this.isAuthenticated = true;
            this.user = user;
          } catch (error) {
            this.logout();
          }
        } else {
          this.logout();
        }
      }
    },

    async createAccount(email: string, password: string) {
      try {
        const response = await axios.post<{ token: string; user: User }>('/api/createAccount', { email, password });
        const { token, user } = response.data;

        this.isAuthenticated = true;
        this.user = user;

        this.setToken(token);
      } catch (error) {
        console.error('Account creation failed', error);
        throw new Error('Account creation failed');
      }
    },

    setToken(token:string){
      const decodedToken: any = jwtDecode(token);
      const expirationTime = decodedToken.exp * 1000;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('jwtTokenExpiration', expirationTime.toString());
    }
  },


  getters: {
    isLoggedIn(state): boolean {
      return state.isAuthenticated;
    },

    currentUser(state): User | null {
      return state.user;
    },
  },
});
