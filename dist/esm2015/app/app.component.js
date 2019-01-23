/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class AppComponent {
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
        const data = {
            name: 'vaibhav',
            email: 'test@test.com'
        };
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
                template: "<p view-more  viewHeight=\"60\" (showMore)=\"showMore($event)\" > \n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n  A directive allows you to attach a behavior to DOM elements. This behavior could be as simple or as complex as you\u2019d like.*ngFor and *ngIf are examples of built-in directives in Angular. In this article, I will show you how to make a custom Google place autocomplete directive that you can attach to any text input.\n</p>\n",
                styles: ["p{font-family:Lato}"]
            }] }
];
/** @nocollapse */
AppComponent.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    AppComponent.prototype.name;
    /** @type {?} */
    AppComponent.prototype.showReadmore;
    /** @type {?} */
    AppComponent.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTy9ELE1BQU0sT0FBTyxZQUFZOzs7O0lBR3ZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxJQUFJLENBQUM7UUFDWixvQkFBd0IsS0FBSyxDQUFDO0tBRTdCOzs7O0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O1FBQzVCLE1BQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsZUFBZTtTQUN2QixDQUFBOztRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7O1FBQzFDLE1BQU0sR0FBRyxHQUFHLG9DQUFvQyxDQUFDOztRQUNqRCxNQUFNLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUM7U0FDcEYsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNKOzs7OztJQUNELFFBQVEsQ0FBQyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHMyQ0FBbUM7O2FBRXBDOzs7O1lBTlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbmFtZSA9ICdoaSc7XG4gIHNob3dSZWFkbW9yZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVpZ2h0IGVxdWFsJyk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWU6ICd2YWliaGF2JyxcbiAgICAgIGVtYWlsOiAndGVzdEB0ZXN0LmNvbSdcbiAgICB9XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCAndmFpYmhhdicpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCAndGVzdEB0ZXN0LmNvbScpO1xuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vMTkyLjE2OC4xNS4xNjA6ODAwMC9hcGkvcmVnJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJylcbiAgICB9O1xuICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIG9wdGlvbnMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd01vcmUoc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1JlYWRtb3JlID0gc2hvdztcbiAgICBjb25zb2xlLmxvZyhzaG93KTtcbiAgfVxufVxuIl19