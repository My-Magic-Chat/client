import { IMessage } from './interface';

export const MESSAGES: IMessage = {
    email: () => 'O campo deve ser um email válido',
    tel: () =>  'O campo telefone deve ter no mínimo 14 caracteres',
    required: (field: string) => field ? `Por favor, nos informe seu ${field}` : 'Este é um campo obrigatório'
};

