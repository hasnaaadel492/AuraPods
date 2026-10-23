import { create } from "zustand";

interface CartState {
  quantity: number;
  selectedColor: {
    id: string;
    name: string;
    price: number;
  };
  setQuantity: (qty: number) => void;
  increaseQty: () => void;
  decreaseQty: () => void;
  setSelectedColor: (color: { id: string; name: string; price: number }) => void;
}

export const useCartStore = create<CartState>((set) => ({
  quantity: 1,
  selectedColor: {
    id: "amber",
    name: "ذهبي شامبين",
    price: 199,
  },
  setQuantity: (qty) => set({ quantity: qty }),
  increaseQty: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQty: () => set((state) => ({ quantity: Math.max(1, state.quantity - 1) })),
  setSelectedColor: (color) => set({ selectedColor: color }),
}));