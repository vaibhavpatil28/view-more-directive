/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        var data = {
            name: 'vaibhav',
            email: 'test@test.com'
        };
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
                    template: "<p view-more  viewHeight=\"60\" (showMore)=\"showMore($event)\" > \n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n</p>\n",
                    styles: ["p{font-family:Lato}"]
                }] }
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return AppComponent;
}());
export { AppComponent };
if (false) {
    /** @type {?} */
    AppComponent.prototype.name;
    /** @type {?} */
    AppComponent.prototype.showReadmore;
    /** @type {?} */
    AppComponent.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQVU3RCxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxZQUFPLElBQUksQ0FBQztRQUNaLG9CQUF3QixLQUFLLENBQUM7S0FFN0I7Ozs7SUFDRCwrQkFBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztRQUM1QixJQUFNLElBQUksR0FBRztZQUNYLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLGVBQWU7U0FDdkIsQ0FBQTs7UUFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDOztRQUMxQyxJQUFNLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQzs7UUFDakQsSUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDO1NBQ3BGLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBQ0QsK0JBQVE7Ozs7SUFBUixVQUFTLElBQWE7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsczJDQUFtQzs7aUJBRXBDOzs7O2dCQU5RLFVBQVU7O3VCQURuQjs7U0FRYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuYW1lID0gJ2hpJztcbiAgc2hvd1JlYWRtb3JlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWlnaHQgZXF1YWwnKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogJ3ZhaWJoYXYnLFxuICAgICAgZW1haWw6ICd0ZXN0QHRlc3QuY29tJ1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsICd2YWliaGF2Jyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsICd0ZXN0QHRlc3QuY29tJyk7XG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjE1LjE2MDo4MDAwL2FwaS9yZWcnO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKVxuICAgIH07XG4gICAgdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSwgb3B0aW9ucykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICB9KTtcbiAgfVxuICBzaG93TW9yZShzaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93UmVhZG1vcmUgPSBzaG93O1xuICAgIGNvbnNvbGUubG9nKHNob3cpO1xuICB9XG59XG4iXX0=