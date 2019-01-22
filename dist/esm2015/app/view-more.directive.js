/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Output, Input, EventEmitter } from '@angular/core';
export class ViewMoreDirective {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb3JlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpZXctbW9yZS1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJhcHAvdmlldy1tb3JlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQXlCLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBS3JILE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFPNUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUpyQyxnQkFBcUIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUNoRCxzQkFBaUIsS0FBSyxDQUFDOzs7UUFNckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO0tBQ3BDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN6RTs7OztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBQy9DLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUU1QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUN2QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUMxQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUksT0FBUSxFQUFFLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQixFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ1Q7YUFDSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtLQUNGOzs7OztJQUNELHFCQUFxQixDQUFDLE9BQW9CO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUN2QixPQUFPLEVBQ1A7Y0FDUSxJQUFJLENBQUMsVUFBVzs7S0FFekIsQ0FDQSxDQUFDOztRQUNGLElBQUksZUFBZSxDQUFtQjtRQUN0QyxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxXQUFXLEdBQUc7Z0JBQ2xCLElBQUksQ0FBQyxZQUFhOztDQUVqQyxDQUFDO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDOztRQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUVyQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDNUM7U0FDRixDQUFDLENBQUE7S0FDSDs7OztJQUVELFdBQVc7UUFDVCxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDckQ7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFKbUIsVUFBVTs7O3lCQU8zQixLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ZpZXctbW9yZV0nXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdNb3JlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIEBJbnB1dCgpIHZpZXdIZWlnaHQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIHNob3dNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXG4gIHRvZ2dsZVNob3dNb3JlID0gZmFsc2U7XG4gIGFjdHVhbEhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvL2VsUmVmIHdpbGwgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHdoZXJlXG4gICAgLy90aGUgZGlyZWN0aXZlIGlzIHBsYWNlZFxuICAgIHRoaXMuZWxlbWVudCA9IGVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVpZ2h0IGVxdWFsJywgdGhpcy52aWV3SGVpZ2h0LCB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hY3R1YWxIZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMTA7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgPiB0aGlzLnZpZXdIZWlnaHQpIHtcbiAgICAgIGxldCBidG5OYW1lID0gJ3ZpZXcgTW9yZS4uLidcbiAgICAgIGNvbnNvbGUubG9nKCdoZWlnaHQgZXF1YWwnKTtcblxuICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBsZXQgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHsgYnRuTmFtZSB9YCk7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIHBhcmEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICBwYXJhLnNldEF0dHJpYnV0ZShgc3R5bGVgLCBgdGV4dC1hbGlnbjogcmlnaHQ7YCk7XG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZShgaWRgLCBgdGV4dF92aWV3YCk7XG4gICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwYXJhLCB0aGlzLmVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgICB0aGlzLnRvZ2dsZUV2ZW50T25WaWV3TW9yZShzcGFuKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd01vcmUuZW1pdCh0cnVlKTtcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2hlaWdodCBub3QgZXF1YWwnKTtcbiAgICAgIHRoaXMuc2hvd01vcmUuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG4gIHRvZ2dsZUV2ZW50T25WaWV3TW9yZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICBgc3R5bGVgLFxuICAgICAgYG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAke3RoaXMudmlld0hlaWdodCB9cHg7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgYFxuICAgICk7XG4gICAgbGV0IGNyZWF0ZWRTdHlsZVRhZzogSFRNTFN0eWxlRWxlbWVudDtcbiAgICBjcmVhdGVkU3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgY3JlYXRlZFN0eWxlVGFnLnNldEF0dHJpYnV0ZShgaWRgLCBgc3R5bGVfdmlld19tb3JlYCk7XG4gICAgY3JlYXRlZFN0eWxlVGFnLnRleHRDb250ZW50ID0gYC52aWV3X21vcmUge1xuICAgICAgaGVpZ2h0OiAke3RoaXMuYWN0dWFsSGVpZ2h0IH1weCAhaW1wb3J0YW50O1xuICAgIH0gIFxuYDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uRGlyZWN0aW9uID0gXCJcIjtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZWRTdHlsZVRhZyk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZWRTdHlsZVRhZyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlU2hvd01vcmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdsZXNzJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlld19tb3JlXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dF92aWV3JykuaW5uZXJIVE1MID0gJ3ZpZXcgbW9yZS4uLic7XG4gICAgICAgIHRoaXMudG9nZ2xlU2hvd01vcmUgPSAhdGhpcy50b2dnbGVTaG93TW9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3bW9yZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dF92aWV3JykuaW5uZXJIVE1MID0gJ3ZpZXcgbGVzcy4uLic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidmlld19tb3JlXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNob3dNb3JlID0gIXRoaXMudG9nZ2xlU2hvd01vcmU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZV92aWV3X21vcmUnKS5yZW1vdmUoKTtcbiAgfVxufSJdfQ==