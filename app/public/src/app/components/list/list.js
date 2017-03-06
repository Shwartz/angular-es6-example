import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {CartService} from '../../services/cart.service';

@Component({
	selector: 'list',
	template: require('./list.html'),
	styles: [require('./list.css')]
})
export class List {
	books;
	cartService;

	static get parameters() {
		return [[Http], [CartService]];
	}

	constructor($http, $cartService) {
		this.cartService = $cartService;
		this.books = $http.get('assets/books.json').map(res => res.json());
	}
}
