import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: `
    <heading></heading>
    <bread-crumbs></bread-crumbs>
    <router-outlet></router-outlet>
  `
})
export class App {}