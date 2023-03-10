import React from 'react';
import { useTranslation } from 'react-i18next';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';

import { IProps } from './interface';

import './Signup.scss';

const Signup = ({ formGroup, signinWithGoogle, isLoading, goToSignin }: IProps) => {
    const { t } = useTranslation();

    return (
        <Slide.Initial direction="left" show>
            <div className="signup-root">
                <div className="content">
                    <div className="title">
                        <h1>{t('SSO.SIGNUP.title')}</h1>
                        <p>{t('SSO.SIGNUP.subtitle')}</p>
                    </div>

                    <div className="middle">
                        <Button onClick={signinWithGoogle} fluid outline>{t('SSO.SIGNUP.signinWithGoogle')}</Button>

                        <div className="or">
                            <div className="row"></div>
                            <p>ou</p>
                            <div className="row"></div>
                        </div>
                    </div>

                    <Form formGroup={formGroup}>
                        <Input controlName="firstName" label={t('SSO.SIGNUP.firstName').toString()} />
                        <Input controlName="lastName" label={t('SSO.SIGNUP.lastName').toString()} />
                        <Input controlName="email" label={t('SSO.SIGNUP.email').toString()} />

                        <Input controlName="password" label={t('SSO.SIGNUP.password').toString()} type="password" />
                        <Input controlName="confirmPassword" label={t('SSO.SIGNUP.confirmPassword').toString()} type="password" />

                        <Button type="submit" isLoading={isLoading} disabled={isLoading} fluid>{t('SSO.SIGNUP.continue')}</Button>
                    </Form>

                    <div className="create">
                        <p>{t('SSO.SIGNUP.alreadHaveAccount')}</p>
                        <Link isExternal click={goToSignin}>{t('SSO.SIGNUP.here')}</Link>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Signup;
