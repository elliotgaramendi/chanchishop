import { create } from 'zustand';

const useProductStore = create((set) => ({
  author: 'Eliot',
  products: [],
  setAuthor: (author) => set(() => ({ author })),
}))

export default useProductStore;