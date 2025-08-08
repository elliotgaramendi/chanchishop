import { create } from 'zustand';
import { getProducts } from '../services/products.service';

export const useProductsStore = create((set) => ({
  loading: false,
  error: null,
  products: [],
  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const data = await getProducts();
      set({ products: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  shoppingCart: [],
  setShoppingCart: (shoppingCart) => {
    set({ shoppingCart });
  }
}));