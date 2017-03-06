import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'book',
	template: require('./book.html'),
	styles: [require('./book.css')]
})
export class Book {
	@Input() meta;
	@Input() selected;
	@Output() onClick = new EventEmitter();
	@Output() onRemoveClick = new EventEmitter();
}
//https://blog.thoughtram.io/angular/2016/06/08/component-relative-paths-in-angular-2.html
