export interface IProps {
    user: IUser;
    path: string;
    handleClick: () => any;
}

export interface IUser {
    name: string;
    image: string;
    email: string;
}