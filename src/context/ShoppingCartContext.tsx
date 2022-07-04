import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (itemId: number) => number;
  increaseCartQuantity: (itemId: number) => void;
  decreaseCartQuantity: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(itemId: number) {
    return cartItems.find(item => item.id === itemId)?.quantity || 0;
  }

    function increaseCartQuantity(itemId: number) {
      setCartItems(cartItems => {
        if (currItems.find(item => item.id === id) == null){
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      })
    };

  return (
  <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity}}>
    {children}
  </ShoppingCartContext.Provider>
  )
};