import React from 'react';

import { Slide } from '@animations';
import Form from '@components/Form';
import Input from '@components/Input';
import Button from '@components/Button';
import Wrapper from '@components/Wrapper';
import Checkbox from '@components/Checkbox';

import { IProps } from './interface';

import './Login.scss';

const Login = ({ formGroup, forgotPassword, signinWithGoogle }: IProps) => {
    return (
        <div className="login">
            <Wrapper gap>
                <div className="container _left">
                    <Slide.Initial direction="left" show>
                        Teste
                    </Slide.Initial>
                </div>

                <div className="container _right">
                    <Slide.Initial direction="right" show>
                        <div className="content">
                            <div className="texts">
                                <h1>Hey, olá! 👋</h1>
                                <h4>Insira as informações que você nos passou durante o registro</h4>
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
                        </div>
                    </Slide.Initial>
                </div>
            </Wrapper>
        </div>
    );
};

export default Login;
