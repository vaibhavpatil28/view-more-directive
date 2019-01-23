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
        this.isInsertedViewMoreBtn = false;
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ViewMoreDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log('changes',changes);
    };
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
    ViewMoreDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.actualHeight = this.element.offsetHeight + 10;
        if (!this.isInsertedViewMoreBtn && (this.element.offsetHeight > this.viewHeight)) {
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
            this.isInsertedViewMoreBtn = true;
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
                _this.showMore.emit(false);
            }
            else {
                console.log('viewmore');
                document.getElementById('text_view').innerHTML = 'view less...';
                _this.element.classList.add("view_more");
                _this.toggleShowMore = !_this.toggleShowMore;
                _this.showMore.emit(true);
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
        if (document.getElementById('style_view_more')) {
            document.getElementById('style_view_more').remove();
        }
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
    ViewMoreDirective.prototype.isInsertedViewMoreBtn;
    /** @type {?} */
    ViewMoreDirective.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb3JlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvdmlldy1tb3JlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQThDLE1BQU0sZUFBZSxDQUFDOztJQVlySSwyQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUpyQyxnQkFBcUIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUNoRCxzQkFBaUIsS0FBSyxDQUFDO3FDQUVTLEtBQUs7OztRQUluQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7S0FDcEM7Ozs7O0lBQ0QsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztLQUVqQzs7OztJQUNELG9DQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN6RTs7OztJQUNELDhDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7WUFDaEYsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBRTVCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ3ZDLElBQUksSUFBSSxHQUFHLFFB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S0FBSzsyQkFDTCxNQUFNOzs0QkFSVDs7U0FLYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0NoZWNrZWQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZpZXctbW9yZV0nXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdNb3JlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIEBJbnB1dCgpIHZpZXdIZWlnaHQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIHNob3dNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXG4gIHRvZ2dsZVNob3dNb3JlID0gZmFsc2U7XG4gIGFjdHVhbEhlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIGlzSW5zZXJ0ZWRWaWV3TW9yZUJ0biA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy9lbFJlZiB3aWxsIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB3aGVyZVxuICAgIC8vdGhlIGRpcmVjdGl2ZSBpcyBwbGFjZWRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcycsY2hhbmdlcyk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2hlaWdodCBlcXVhbCcsIHRoaXMudmlld0hlaWdodCwgdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuYWN0dWFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCArIDEwO1xuICAgIGlmICghdGhpcy5pc0luc2VydGVkVmlld01vcmVCdG4gJiYgKHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgPiB0aGlzLnZpZXdIZWlnaHQpKSB7XG4gICAgICBsZXQgYnRuTmFtZSA9ICd2aWV3IE1vcmUuLi4nO1xuICAgICAgY29uc29sZS5sb2coJ2hlaWdodCBlcXVhbCcpO1xuXG4gICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxldCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAkeyBidG5OYW1lIH1gKTtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgcGFyYS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgIHBhcmEuc2V0QXR0cmlidXRlKGBzdHlsZWAsIGB0ZXh0LWFsaWduOiByaWdodDtgKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKGBpZGAsIGB0ZXh0X3ZpZXdgKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsICdjdXJzb3I6cG9pbnRlcjsnKVxuICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhcmEsIHRoaXMuZWxlbWVudC5uZXh0U2libGluZylcbiAgICAgIHRoaXMudG9nZ2xlRXZlbnRPblZpZXdNb3JlKHNwYW4pO1xuICAgICAgdGhpcy5pc0luc2VydGVkVmlld01vcmVCdG4gPSB0cnVlO1xuICAgIH1cbiAgfVxuICB0b2dnbGVFdmVudE9uVmlld01vcmUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgYHN0eWxlYCxcbiAgICAgIGBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogJHt0aGlzLnZpZXdIZWlnaHQgfXB4O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgIGBcbiAgICApO1xuICAgIGxldCBjcmVhdGVkU3R5bGVUYWc6IEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgY3JlYXRlZFN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNyZWF0ZWRTdHlsZVRhZy5zZXRBdHRyaWJ1dGUoYGlkYCwgYHN0eWxlX3ZpZXdfbW9yZWApO1xuICAgIGNyZWF0ZWRTdHlsZVRhZy50ZXh0Q29udGVudCA9IGAudmlld19tb3JlIHtcbiAgICAgIGhlaWdodDogJHt0aGlzLmFjdHVhbEhlaWdodCB9cHggIWltcG9ydGFudDtcbiAgICB9ICBcbmA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmFuaW1hdGlvbkRpcmVjdGlvbiA9IFwiXCI7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVkU3R5bGVUYWcpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVkU3R5bGVUYWcpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLnRvZ2dsZVNob3dNb3JlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3bGVzcycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpZXdfbW9yZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRfdmlldycpLmlubmVySFRNTCA9ICd2aWV3IG1vcmUuLi4nO1xuICAgICAgICB0aGlzLnRvZ2dsZVNob3dNb3JlID0gIXRoaXMudG9nZ2xlU2hvd01vcmU7XG4gICAgICAgIHRoaXMuc2hvd01vcmUuZW1pdChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmlld21vcmUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRfdmlldycpLmlubmVySFRNTCA9ICd2aWV3IGxlc3MuLi4nO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpZXdfbW9yZVwiKTtcbiAgICAgICAgdGhpcy50b2dnbGVTaG93TW9yZSA9ICF0aGlzLnRvZ2dsZVNob3dNb3JlO1xuICAgICAgICB0aGlzLnNob3dNb3JlLmVtaXQodHJ1ZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVfdmlld19tb3JlJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZV92aWV3X21vcmUnKS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn0iXX0=