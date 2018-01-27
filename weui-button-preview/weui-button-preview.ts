import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiButtonProps {
    title: string;
    children: any[];
    focus: boolean;
    loading: boolean;
    timeLen: number;
}

@Component({
    selector: 'weui-button-preview',
    templateUrl: './weui-button-preview.html',
    styleUrls: ['./weui-button-preview.scss']
})
export class WeuiButtonPreviewComponent extends ReactComponent<WeuiButtonProps, any> {
    @HostListener('mouseenter', ['$event'])
    mouseover() {
        this.props.focus = true;
    }
    @HostListener('mouseleave', ['$event'])
    mouseleave() {
        this.props.focus = false;
    }
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }

    _click() {
        this.setProps({
            ...this.props,
            ...{ loading: true }
        });

        setTimeout(() => {
            this.setProps({
                ...this.props,
                ...{ loading: false }
            });
        }, this.props.timeLen * 1000 || 2000);
    }
}
