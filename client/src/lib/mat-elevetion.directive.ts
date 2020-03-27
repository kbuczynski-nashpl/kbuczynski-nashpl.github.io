import { Directive,
         OnChanges,
         Input,
         SimpleChanges,
         HostListener,
         Renderer2,
         ElementRef
        } from '@angular/core';

@Directive({
    selector: '[appMaterialElevation]'
})
export class MaterialElevationDirective implements OnChanges {

    @Input()
    defaultElevation = 2;

    @Input()
    raisedElevation = 16;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.setElevation(this.defaultElevation);
    }

    ngOnChanges(_changes: SimpleChanges) {
        this.setElevation(this.defaultElevation);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }

    setElevation(amount: number) {
        const toRemove = Array.from((<HTMLElement>this.element.nativeElement).classList).filter(c => c.startsWith('mat-elevation-z'));
        toRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });

        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
