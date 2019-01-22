/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Output, Input, EventEmitter } from '@angular/core';
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
export { ViewMoreDirective };
if (false) {
    /** @type {?} */
    ViewMoreDirective.prototype.element;
    /** @type {?} */
    ViewMoreDirective.prototype.viewHeight;
    /** @type {?} */
    ViewMoreDirective.prototype.showMore;
    /** @type {?} */
    ViewMoreDirective.prototype.toggleShowMore;
    /** @type {?} */
    ViewMoreDirective.prototype.actualHeight;
    /** @type {?} */
    ViewMoreDirective.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb3JlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvdmlldy1tb3JlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXlCLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOztJQVluSCwyQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUpyQyxnQkFBcUIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUNoRCxzQkFBaUIsS0FBSyxDQUFDOzs7UUFNckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0tBQ3BDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pFOzs7O0lBQ0QsMkNBQWU7OztJQUFmO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7WUFDL0MsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBRTVCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ3ZDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQzFDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxPQUFVLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDaEMsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDVDthQUNJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBQ0QsaURBQXFCOzs7O0lBQXJCLFVBQXNCLE9BQW9CO1FBQTFDLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FDdkIsT0FBTyxFQUNQLG9DQUNRLElBQUksQ0FBQyxVQUFVLCtDQUV4QixDQUNBLENBQUM7O1FBQ0YsSUFBSSxlQUFlLENBQW1CO1FBQ3RDLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLFdBQVcsR0FBRyxpQ0FDbEIsSUFBSSxDQUFDLFlBQVksOEJBRWhDLENBQUM7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7O1FBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFFaEMsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDaEUsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDO2FBQzVDO1NBQ0YsQ0FBQyxDQUFBO0tBQ0g7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDckQ7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQUptQixVQUFVOzs7NkJBTzNCLEtBQUs7MkJBQ0wsTUFBTTs7NEJBUlQ7O1NBS2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t2aWV3LW1vcmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBWaWV3TW9yZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICBASW5wdXQoKSB2aWV3SGVpZ2h0OiBudW1iZXI7XG4gIEBPdXRwdXQoKSBzaG93TW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuICB0b2dnbGVTaG93TW9yZSA9IGZhbHNlO1xuICBhY3R1YWxIZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy9lbFJlZiB3aWxsIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB3aGVyZVxuICAgIC8vdGhlIGRpcmVjdGl2ZSBpcyBwbGFjZWRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2hlaWdodCBlcXVhbCcsIHRoaXMudmlld0hlaWdodCwgdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYWN0dWFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCArIDEwO1xuICAgIGlmICh0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gdGhpcy52aWV3SGVpZ2h0KSB7XG4gICAgICBsZXQgYnRuTmFtZSA9ICd2aWV3IE1vcmUuLi4nXG4gICAgICBjb25zb2xlLmxvZygnaGVpZ2h0IGVxdWFsJyk7XG5cbiAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbGV0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7IGJ0bk5hbWUgfWApO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICBwYXJhLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgcGFyYS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYHRleHQtYWxpZ246IHJpZ2h0O2ApO1xuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoYGlkYCwgYHRleHRfdmlld2ApO1xuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjpwb2ludGVyOycpXG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGFyYSwgdGhpcy5lbGVtZW50Lm5leHRTaWJsaW5nKVxuICAgICAgdGhpcy50b2dnbGVFdmVudE9uVmlld01vcmUoc3BhbilcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dNb3JlLmVtaXQodHJ1ZSk7XG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWlnaHQgbm90IGVxdWFsJyk7XG4gICAgICB0aGlzLnNob3dNb3JlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuICB0b2dnbGVFdmVudE9uVmlld01vcmUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgYHN0eWxlYCxcbiAgICAgIGBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogJHt0aGlzLnZpZXdIZWlnaHQgfXB4O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgIGBcbiAgICApO1xuICAgIGxldCBjcmVhdGVkU3R5bGVUYWc6IEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgY3JlYXRlZFN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNyZWF0ZWRTdHlsZVRhZy5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN0eWxlX3ZpZXdfbW9yZWApO1xuICAgIGNyZWF0ZWRTdHlsZVRhZy50ZXh0Q29udGVudCA9IGAudmlld19tb3JlIHtcbiAgICAgIGhlaWdodDogJHt0aGlzLmFjdHVhbEhlaWdodCB9cHggIWltcG9ydGFudDtcbiAgICB9ICBcbmA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmFuaW1hdGlvbkRpcmVjdGlvbiA9IFwiXCI7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVkU3R5bGVUYWcpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVkU3R5bGVUYWcpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLnRvZ2dsZVNob3dNb3JlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3bGVzcycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpZXdfbW9yZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRfdmlldycpLmlubmVySFRNTCA9ICd2aWV3IG1vcmUuLi4nO1xuICAgICAgICB0aGlzLnRvZ2dsZVNob3dNb3JlID0gIXRoaXMudG9nZ2xlU2hvd01vcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmlld21vcmUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRfdmlldycpLmlubmVySFRNTCA9ICd2aWV3IGxlc3MuLi4nO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpZXdfbW9yZVwiKTtcbiAgICAgICAgdGhpcy50b2dnbGVTaG93TW9yZSA9ICF0aGlzLnRvZ2dsZVNob3dNb3JlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVfdmlld19tb3JlJykucmVtb3ZlKCk7XG4gIH1cbn0iXX0=