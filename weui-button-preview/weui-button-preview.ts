import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
import { HostBinding } from '@angular/core';
export interface WeuiButtonProps {
    title: string;
    children: any[];
    focus: boolean;
    loading: boolean;
    timeLen: number;
}

export class WeuiButtonDefault implements WeuiButtonProps {
    title = '按钮标题';
    children = [];
    focus = false;
    loading = false;
    timeLen = 2;
}

@Component({
    selector: 'weui-button-preview',
    templateUrl: './weui-button-preview.html',
    styleUrls: ['./weui-button-preview.scss']
})
export class WeuiButtonPreviewComponent extends ReactComponent<WeuiButtonProps, any> {
    @HostBinding('class.weui-btn') _btn: boolean = true;
    @HostBinding('class.weui-btn_primary') _primary: boolean = true;
    @HostBinding('class.weui-btn_loading') _loading: boolean = false;

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


    onPropsChange() {
        this._loading = this.props.loading;
    }

    onStateChange() { }

    _click() {
        setTimeout(() => {
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
        }, 0);
    }
}
