import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {CartService} from '../../services/cart.service';

const path = 'public/src/app/components/list/';

/*import headerTemplate from 'raw-loader!./list.html';
 import headerStyle from 'raw-loader!./list.css';*/

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
