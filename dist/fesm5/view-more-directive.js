import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, Input, Directive, ElementRef, Output, EventEmitter, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.name = 'hi';
        this.showReadmore = false;
    }
    /**
     * @return {?}
     */
    AppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('height equal');
        /** @type {?} */
        var formData = new FormData();
        formData.append('name', 'vaibhav');
        formData.append('email', 'test@test.com');
        /** @type {?} */
        var url = 'http://192.168.15.160:8000/api/reg';
        /** @type {?} */
        var options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.http.post(url, formData, options).subscribe(function (res) {
            console.log('res', res);
        });
    };
    /**
     * @param {?} show
     * @return {?}
     */
    AppComponent.prototype.showMore = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        this.showReadmore = show;
        console.log(show);
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "<hello name=\"{{ name }}\"></hello>\n<p view-more  viewHeight=\"60\" (showMore)=\"showMore($event)\" > \n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n</p>\n",
                    styles: ["p{font-family:Lato}"]
                }] }
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return AppComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hello',
                    template: "<h1>Hello {{name}}!</h1>",
                    styles: ["h1 { font-family: Lato; }"]
                }] }
    ];
    HelloComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return HelloComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ViewMoreDirective = /** @class */ (function () {
    function ViewMoreDirective(elRef) {
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
    ViewMoreDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('height equal', this.viewHeight, this.element.offsetHeight);
    };
    /**
     * @return {?}
     */
    ViewMoreDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.actualHeight = this.element.offsetHeight + 10;
        if (this.element.offsetHeight > this.viewHeight) {
            /** @type {?} */
            var btnName = 'view More...';
            console.log('height equal');
            /** @type {?} */
            var para = document.createElement("p");
            /** @type {?} */
            var span = document.createElement("span");
            /** @type {?} */
            var textNode = document.createTextNode("" + btnName);
            span.appendChild(textNode);
            para.appendChild(span);
            para.setAttribute("style", "text-align: right;");
            span.setAttribute("id", "text_view");
            span.setAttribute('style', 'cursor:pointer;');
            this.element.parentNode.insertBefore(para, this.element.nextSibling);
            this.toggleEventOnViewMore(span);
            setTimeout(function () {
                _this.showMore.emit(true);
            }, 1000);
        }
        else {
            console.log('height not equal');
            this.showMore.emit(false);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ViewMoreDirective.prototype.toggleEventOnViewMore = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        this.element.setAttribute("style", "overflow: hidden;\n    height: " + this.viewHeight + "px;\n    transition: height 1s ease;\n    ");
        /** @type {?} */
        var createdStyleTag;
        createdStyleTag = document.createElement("style");
        createdStyleTag.setAttribute("id", "style_view_more");
        createdStyleTag.textContent = ".view_more {\n      height: " + this.actualHeight + "px !important;\n    }  \n";
        this.element.style.animationDirection = "";
        // document.body.appendChild(createdStyleTag);
        this.element.appendChild(createdStyleTag);
        element.addEventListener('click', function () {
            if (_this.toggleShowMore) {
                console.log('viewless');
                _this.element.classList.remove("view_more");
                document.getElementById('text_view').innerHTML = 'view more...';
                _this.toggleShowMore = !_this.toggleShowMore;
            }
            else {
                console.log('viewmore');
                document.getElementById('text_view').innerHTML = 'view less...';
                _this.element.classList.add("view_more");
                _this.toggleShowMore = !_this.toggleShowMore;
            }
        });
    };
    /**
     * @return {?}
     */
    ViewMoreDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.getElementById('style_view_more').remove();
    };
    ViewMoreDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[view-more]'
                },] }
    ];
    /** @nocollapse */
    ViewMoreDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ViewMoreDirective.propDecorators = {
        viewHeight: [{ type: Input }],
        showMore: [{ type: Output }]
    };
    return ViewMoreDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, FormsModule, HttpClientModule],
                    declarations: [AppComponent, HelloComponent, ViewMoreDirective],
                    bootstrap: [AppComponent],
                    exports: [ViewMoreDirective]
                },] }
    ];
    return AppModule;
}());

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