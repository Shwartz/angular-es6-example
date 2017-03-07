# Angular 2 template Using ES6, Webpack, Gulp and Babel

## Development
CD to app/  
To run server: `$ npm run lite`  
To start watcher `$ gulp`  
  

## Useful information
reflect-metadata - [https://www.npmjs.com/package/reflect-metadata]  
RxJS-Observable -  [http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html]  
platform-browser-dynamic - [http://stackoverflow.com/questions/38407604/what-is-angular-platform-browser]  

**@angular/platform-browser**  
It contains code shared for browser execution (DOM thread, WebWorker)
Ahead-of-Time pre-compiled version of application being sent to the browser. Which usually means a significantly smaller package being sent to the browser.

**@angular/platform-browser-dynamic**  
It contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
Uses Just-in-Time compiler and make's application compile on client-side.

**PlatformBootstrapDynamic**  
[http://ngmigrate.telerik.com/bootstrapping-in-angular-2]

**How to do Everything in Angular 2 using vanilla ES5 or ES6**  
[http://nicholasjohnson.com/blog/how-to-do-everything-in-angular2-using-es6/]

**Component Relative path in Angular 2**
[https://blog.thoughtram.io/angular/2016/06/08/component-relative-paths-in-angular-2.html]

**Top ten ES6 features**
[https://webapplog.com/es6/]

**Static getter parameters**
[http://stackoverflow.com/questions/35919593/what-is-static-get-parameters-purpose-in-ionic-2]
With static getter for parameters you specify injections for your component's constructor  
It provide Angular with metadata about things it should inject in the constructor  

Angular2 is written in TypeScript, and normally depends on types to know what kind of objects to inject into class constructors as part of its dependency injection framework. Since these examples are in JavaScript and not TypeScript, we need a way to tell Angular what “types” of objects should be injected, without actually using types. The way we do this is with the static getter parameters which attaches this type information to the class.



