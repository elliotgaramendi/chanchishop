import { create } from 'zustand';

const useProductStore = create(() => ({
  author: 'Eliot',
  products: [],
}))

export default useProductStore;