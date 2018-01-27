import { WeuiButtonPreviewComponent } from './weui-button-preview/weui-button-preview';
import { WeuiButtonSettingComponent } from './weui-button-setting/weui-button-setting';

export const both = {
    'weui-button': {
        setting: WeuiButtonSettingComponent,
        view: WeuiButtonPreviewComponent
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
