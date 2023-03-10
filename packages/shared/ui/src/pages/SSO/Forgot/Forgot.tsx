import React from 'react';
import { useTranslation } from 'react-i18next';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';

import { IProps } from './interface';

import './Forgot.scss';

const Forgot = ({ formGroup, isLoading, goToSignin }: IProps) => {
    const { t } = useTranslation();

    return (
        <Slide.Initial direction="left" show>
            <div className="forgot-root">
                <div className="content">
                    <div className="title">
                        <h1>{t('SSO.FORGOT.title')}</h1>
                        <p>{t('SSO.FORGOT.subtitle')}</p>
                    </div>

                    <Form formGroup={formGroup}>
                        <Input controlName="email" label="Email" />
                        <Button type="submit" isLoading={isLoading} fluid>{t('SSO.FORGOT.continue')}</Button>
                    </Form>

                    <div className="signin">
                        <p>{t('SSO.FORGOT.alreadHaveAccount')}</p>
                        <Link isExternal click={goToSignin}>{t('SSO.FORGOT.here')}</Link>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Forgot;
