import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as ToastComponent } from './Toast';
import ToastProvider from './provider/Toast.provider';
import { useToast } from './hook/useToast';
import { Toast } from './utilities/toast';
import { IToast } from './utilities/interface';

export default {
    title: 'Components/Toast',
    component: ToastComponent,
    argTypes: {
        mode: {
            name: 'mode',
            control: { type: 'select' },
            options: ['success', 'danger', 'warning', 'info'],
            description: 'Mode appearance'
        },
        autoClose: {
            name: 'autoClose',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Close toast auto'
        },
    }
} as ComponentMeta<typeof ToastComponent>;

const Child = () => {
    const toastService = useToast();

    const addToast = () => {
        const toast = new Toast({
            show: true,
            timeout: 3000,
            title: 'title',
            autoClose: true,
            mode: 'success',
            description: 'description',
        });
        toastService.add(toast);
    };

    return (
        <button onClick={addToast}>add Toast</button>
    );
};

const TemplateMultiples: ComponentStory<typeof ToastComponent> = () => {
    return (
        <ToastProvider>
            <Child />
        </ToastProvider>
    );
};

const Template: ComponentStory<typeof ToastComponent> = (args: IToast) => {
    return (
        <ToastComponent
            close={() => console.log('close')}
            id={'teste'}
            mode={args.mode}
            show={true}
            title="Um título bem maneiro"
            timeout={args.timeout}
            autoClose={args.autoClose}
            description="Uma descrição muito legal"
        />
    );
};

export const Multiples = TemplateMultiples.bind({});

Multiples.args = {};

export const Success = Template.bind({});

Success.args = { mode: 'success', autoClose: true };

export const Danger = Template.bind({});

Danger.args = { mode: 'danger', autoClose: true };

export const Warning = Template.bind({});

Warning.args = { mode: 'warning', autoClose: true };

export const Info = Template.bind({});

Info.args = { mode: 'info', autoClose: true };