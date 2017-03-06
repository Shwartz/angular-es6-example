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
