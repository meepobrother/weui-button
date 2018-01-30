import { WeuiButtonPreviewComponent, WeuiButtonDefault } from './weui-button-preview/weui-button-preview';
import { WeuiButtonSettingComponent } from './weui-button-setting/weui-button-setting';

export const both = {
    'weui-button': {
        setting: WeuiButtonSettingComponent,
        view: WeuiButtonPreviewComponent,
        default: WeuiButtonDefault
    }
};

export const preview = {
    'weui-button': WeuiButtonPreviewComponent
};

export const entrys = [
    WeuiButtonSettingComponent,
    WeuiButtonPreviewComponent
];

export { WeuiButtonProps } from './weui-button-preview/weui-button-preview';
