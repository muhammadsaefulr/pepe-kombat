import { create } from 'zustand';
import { useEffect } from 'react';

interface Store {
  coins: number;
  energy: number;
  rank: string;
  setCoins: (newCoins: number) => void;
  addCoins: (amount: number) => void;
  setEnergy: (newEnergy: number) => void;
  delEnergy: (amount: number) => void;
  calculateRank: () => void;
}

export const useCoinStore = create<Store>((set, get) => ({
  coins: 0, 
  energy: 10000, 
  rank: 'Newbie',

  setCoins: (newCoins) => {
    set({ coins: newCoins });
    get().calculateRank();
  },

  addCoins: (amount) => {
    set((state) => {
      const newCoins = state.coins + amount;

      if (typeof window !== 'undefined') {
        localStorage.setItem('coins', newCoins.toString());
      }

      return { coins: newCoins };
    });
    get().calculateRank();
  },

  setEnergy: (newEnergy) => {
    set({ energy: newEnergy });

    if (typeof window !== 'undefined') {
      localStorage.setItem('energy', newEnergy.toString());
    }
  },

  delEnergy: (amount) => {
    set((state) => {
      const newEnergy = Math.max(0, state.energy - amount);

      if (typeof window !== 'undefined') {
        localStorage.setItem('energy', newEnergy.toString());
      }

      return { energy: newEnergy };
    });
  },

  calculateRank: () => {
    set((state) => {
      let newRank = 'Newbie';

      if (state.coins >= 1_000_000) {
        newRank = 'Boss';
      } else if (state.coins >= 100_000) {
        newRank = 'Elite';
      }

      return { rank: newRank };
    });
  },
}));

export const useStoreCoinWithLocalStorage = () => {
  const { setCoins, setEnergy } = useCoinStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCoins = Number(localStorage.getItem('coins')) || 0;
      setCoins(storedCoins);

      const storedEnergy = Number(localStorage.getItem('energy')) || 10000; // Default to 10000 if not set
      setEnergy(storedEnergy);
    }
  }, [setCoins, setEnergy]);
};
