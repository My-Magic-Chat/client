import React from 'react';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';

import { IProps } from './interface';

import './Forgot.scss';

const Forgot = ({ formGroup, isLoading, goToSignin }: IProps) => {
    return (
        <Slide.Initial direction="left" show>
            <div className="forgot-root">
                <div className="content">
                    <div className="title">
                        <h1>Esqueceu sua senha?</h1>
                        <p>Entre com seu email e nós vamos te ajudar a redefinir</p>
                    </div>

                    <Form formGroup={formGroup}>
                        <Input controlName="email" label="Email" />
                        <Button type="submit" isLoading={isLoading} fluid>Continuar</Button>
                    </Form>

                    <div className="signin">
                        <p>Já possui conta?</p>
                        <Link isExternal click={goToSignin}>Entre aqui!</Link>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Forgot;
