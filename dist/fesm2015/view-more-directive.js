import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, Input, Directive, ElementRef, Output, EventEmitter, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppComponent {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.name = 'hi';
        this.showReadmore = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('height equal');
        /** @type {?} */
        const formData = new FormData();
        formData.append('name', 'vaibhav');
        formData.append('email', 'test@test.com');
        /** @type {?} */
        const url = 'http://192.168.15.160:8000/api/reg';
        /** @type {?} */
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http.post(url, formData, options).subscribe(res => {
            console.log('res', res);
        });
    }
    /**
     * @param {?} show
     * @return {?}
     */
    showMore(show) {
        this.showReadmore = show;
        console.log(show);
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-app',
                template: "<hello name=\"{{ name }}\"></hello>\n<p view-more  viewHeight=\"60\" (showMore)=\"showMore($event)\" > \n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n</p>\n",
                styles: ["p{font-family:Lato}"]
            }] }
];
/** @nocollapse */
AppComponent.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HelloComponent {
}
HelloComponent.decorators = [
    { type: Component, args: [{
                selector: 'hello',
                template: `<h1>Hello {{name}}!</h1>`,
                styles: [`h1 { font-family: Lato; }`]
            }] }
];
HelloComponent.propDecorators = {
    name: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ViewMoreDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.showMore = new EventEmitter();
        this.toggleShowMore = false;
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('height equal', this.viewHeight, this.element.offsetHeight);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.actualHeight = this.element.offsetHeight + 10;
        if (this.element.offsetHeight > this.viewHeight) {
            /** @type {?} */
            let btnName = 'view More...';
            console.log('height equal');
            /** @type {?} */
            let para = document.createElement("p");
            /** @type {?} */
            let span = document.createElement("span");
            /** @type {?} */
            let textNode = document.createTextNode(`${btnName}`);
            span.appendChild(textNode);
            para.appendChild(span);
            para.setAttribute(`style`, `text-align: right;`);
            span.setAttribute(`id`, `text_view`);
            span.setAttribute('style', 'cursor:pointer;');
            this.element.parentNode.insertBefore(para, this.element.nextSibling);
            this.toggleEventOnViewMore(span);
            setTimeout(() => {
                this.showMore.emit(true);
            }, 1000);
        }
        else {
            console.log('height not equal');
            this.showMore.emit(false);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    toggleEventOnViewMore(element) {
        this.element.setAttribute(`style`, `overflow: hidden;
    height: ${this.viewHeight}px;
    transition: height 1s ease;
    `);
        /** @type {?} */
        let createdStyleTag;
        createdStyleTag = document.createElement("style");
        createdStyleTag.setAttribute(`id`, `style_view_more`);
        createdStyleTag.textContent = `.view_more {
      height: ${this.actualHeight}px !important;
    }  
`;
        this.element.style.animationDirection = "";
        // document.body.appendChild(createdStyleTag);
        this.element.appendChild(createdStyleTag);
        element.addEventListener('click', () => {
            if (this.toggleShowMore) {
                console.log('viewless');
                this.element.classList.remove("view_more");
                document.getElementById('text_view').innerHTML = 'view more...';
                this.toggleShowMore = !this.toggleShowMore;
            }
            else {
                console.log('viewmore');
                document.getElementById('text_view').innerHTML = 'view less...';
                this.element.classList.add("view_more");
                this.toggleShowMore = !this.toggleShowMore;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.getElementById('style_view_more').remove();
    }
}
ViewMoreDirective.decorators = [
    { type: Directive, args: [{
                selector: '[view-more]'
            },] }
];
/** @nocollapse */
ViewMoreDirective.ctorParameters = () => [
    { type: ElementRef }
];
ViewMoreDirective.propDecorators = {
    viewHeight: [{ type: Input }],
    showMore: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule, FormsModule, HttpClientModule],
                declarations: [AppComponent, HelloComponent, ViewMoreDirective],
                bootstrap: [AppComponent],
                exports: [ViewMoreDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AppModule as ViewMoreDirectiveModule, AppComponent as ɵa, HelloComponent as ɵb, ViewMoreDirective as ɵc };

//# sourceMappingURL=view-more-directive.js.map