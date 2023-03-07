export interface IProps {
    path: string;
    user: {
        name: string;
        image: string;
        email: string;
    };
    handleClick: () => any;
}