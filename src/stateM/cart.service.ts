import { signal } from 'angular-signals';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  addToCart(item: CartItem) {
    const existingItem = this.cartItems().find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.set([...this.cartItems(), { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(itemId: string) {
    this.cartItems.set(this.cartItems().filter((i) => i.id !== itemId));
  }

  getCartItems() {
    return this.cartItems();
  }
}