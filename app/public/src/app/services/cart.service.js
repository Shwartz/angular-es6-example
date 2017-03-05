import {Injectable} from '@angular/core';
import {find, filter} from 'lodash';

@Injectable()
export class CartService {
	cart = [];

	count() {
		return this.cart.length;
	}

	add(book) {
		if (!this.isIn(book)) {
			this.cart = [...this.cart, book];
		}

		return this.cart;
	}

	remove(book) {
		this.cart = filter(this.cart, b => b.id !== book.id);

		return this.cart;
	}

	get() {
		return [...this.cart];
	}

	empty() {
		this.cart = [];
	}

	isIn(book) {
		return find(this.cart, b => b.id === book.id) !== undefined;
	}

	isEmpty() {
		return this.count() === 0;
	}
}