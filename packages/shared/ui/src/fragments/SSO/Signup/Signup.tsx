import React from 'react';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';

import { IProps } from './interface';

import './Signup.scss';

const Signup = ({ formGroup, signinWithGoogle, isLoading, goToSignin }: IProps) => {
    return (
        <Slide.Initial direction="left" show>
            <div className="signup">
                <div className="content">
                    <div className="title">
                        <h1>Cadastrar</h1>
                        <p>Vamos criar uma conta para você</p>
                    </div>

                    <div className="middle">
                        <Button onClick={signinWithGoogle} fluid outline>Entrar com o Google</Button>

                        <div className="or">
                            <div className="row"></div>
                            <p>ou</p>
                            <div className="row"></div>
                        </div>
                    </div>

                    <Form formGroup={formGroup}>
                        <Input controlName="firstName" label="Primeiro nome" />
                        <Input controlName="lastName" label="Último nome" />
                        <Input controlName="email" label="Email" />

                        <Input controlName="password" label="Senha" type="password" />
                        <Input controlName="confirmPassword" label="Confirme sua Senha" type="password" />

                        <Button type="submit" isLoading={isLoading} fluid>Continuar</Button>
                    </Form>

                    <div className="create">
                        <p>Já possui conta?</p>
                        <Link isExternal click={goToSignin}>Entre aqui</Link>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Signup;
