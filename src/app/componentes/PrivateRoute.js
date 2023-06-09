import { useRouter } from "next/navigation";
import { useEffect } from "react";


import { APP_ROUTES } from "../constants/app-routes";
import { checkUserAuthenticated } from "../functions/check-user-authentication";

const PrivateRoute = ({children}) => {
    const { push } = useRouter();

    const isUserAuthenticated = checkUserAuthenticated();
    
    useEffect(() => {
        if (!isUserAuthenticated) {
            push(APP_ROUTES.public.login);
        }
    }, [isUserAuthenticated, push])

    return (
        <>
        {!isUserAuthenticated && null}
        {isUserAuthenticated && children}
        </>
    );
};

export default PrivateRoute;