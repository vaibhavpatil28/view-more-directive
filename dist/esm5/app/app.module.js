/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewMoreDirective } from './view-more.directive';
import { HttpClientModule } from '@angular/common/http';
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
export { AppModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUE7Ozs7O2dCQUVwRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFPLENBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBRTtvQkFDOUQsWUFBWSxFQUFFLENBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxpQkFBaUIsQ0FBRTtvQkFDaEUsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN6QixPQUFPLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDNUI7O29CQWREOztTQWVhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxsb0NvbXBvbmVudCB9IGZyb20gJy4vaGVsbG8uY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdNb3JlRGlyZWN0aXZlIH0gZnJvbSAnLi92aWV3LW1vcmUuZGlyZWN0aXZlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cENsaWVudE1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBIZWxsb0NvbXBvbmVudCxWaWV3TW9yZURpcmVjdGl2ZSBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBleHBvcnRzOltWaWV3TW9yZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19