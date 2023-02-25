import React from 'react';

import { Slide } from '@animations';
import Link from '@components/Link';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';

import { IProps } from './interface';

import './Signin.scss';

const Signin = ({ formGroup, forgotPassword, signinWithGoogle, goToCreate }: IProps) => {
    return (
        <Slide.Initial direction="right" show>
            <div className="signin-root">
                <div className="container">
                    <div className="content">
                        <div className="texts">
                            <h1>Hey, olá! 👋</h1>
                            <p>Saiba como automatizar seu negócio digital de forma <span>mágica</span>!</p>
                        </div>

                        <Form formGroup={formGroup}>
                            <Input controlName="email" label="Email"></Input>
                            <Input controlName="password" label="Senha"></Input>

                            <div className="middle">
                                <Checkbox controlName="remember">Lembrar credenciais</Checkbox>
                                <p className="forgot" onClick={forgotPassword}>Esqueceu sua senha?</p>
                            </div>

                            <Button type="submit" fluid>Entrar</Button>
                        </Form>

                        <div className="or">
                            <div className="row"></div>
                            <p>ou</p>
                            <div className="row"></div>
                        </div>

                        <Button fluid outline onClick={signinWithGoogle}>Entrar com o Google</Button>

                        <div className="create">
                            <p>Não possui conta?</p>
                            <Link isExternal click={goToCreate}>Crie aqui!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Signin;
