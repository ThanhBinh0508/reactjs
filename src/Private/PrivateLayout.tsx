import React from 'react'
import { Navigate } from "react-router-dom";
import { useAppSelector } from '../app/hook';

type LayoutPrivateProps = {
    children: React.ReactElement;
};

const PrivateLayout = ({ children }: LayoutPrivateProps) => {
    const isAdmin = useAppSelector((state) => state.auth.isLogin);
    if (isAdmin) return <Navigate to="/signin" />;
    return children;
}

export default PrivateLayout