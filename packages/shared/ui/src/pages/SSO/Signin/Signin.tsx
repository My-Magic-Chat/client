import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';

import { IProps } from './interface';

import './Signin.scss';

const Signin = ({ formGroup, loading, forgotPassword, signinWithGoogle, goToCreate }: IProps) => {
    const { t } = useTranslation();

    return (
        <Slide.Initial direction="right" show>
            <div className="signin-root">
                <div className="content">
                    <div className="texts">
                        <h1>{t('SSO.SIGNIN.title')}</h1>
                        <p>{t('SSO.SIGNIN.subtitle')}</p>
                    </div>

                    <Form formGroup={formGroup}>
                        <Input controlName="email" label="Email"></Input>
                        <Input controlName="password" label="Senha"></Input>

                        <div className="middle">
                            <Checkbox controlName="remember">{t('SSO.SIGNIN.remember')}</Checkbox>
                            <p className="forgot" onClick={forgotPassword}>{t('SSO.SIGNIN.forgot')}</p>
                        </div>

                        <Button type="submit" isLoading={loading.signin} fluid>{t('SSO.SIGNIN.enter')}</Button>
                    </Form>

                    <div className="or">
                        <div className="row"></div>
                        <p>{t('SSO.SIGNIN.or')}</p>
                        <div className="row"></div>
                    </div>

                    <Button isLoading={loading.google} fluid outline onClick={signinWithGoogle}>{t('SSO.SIGNIN.signinWithGoogle')}</Button>

                    <div className="create">
                        <p>{t('SSO.SIGNIN.dontHaveAnAccount')}</p>
                        <Link isExternal click={goToCreate}>{t('SSO.SIGNIN.createHere')}</Link>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Signin;
