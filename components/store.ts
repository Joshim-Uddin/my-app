// store.ts
import {create} from 'zustand';

type FormData = {
  name: string;
  email: string;
  age: number;
};

type Store = {
  formData: FormData[];
  addFormData: (data: FormData) => void;
};

export const useStore = create<Store>((set) => ({
  formData: [],
  addFormData: (data) => set((state) => ({ formData: [...state.formData, data] })),
}));
