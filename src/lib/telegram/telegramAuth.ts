import 'dotenv/config';
import { useLogin } from '@/lib/tanstack/tanstackquery-handler';
import { WebApp } from '@twa-dev/types'

export const checkAuth = async () => {
    let isAuthenticated: Boolean = false;

    const response = await fetch("/api/session");

    if (response.ok) {
        isAuthenticated = true;
    }

    return isAuthenticated;
};

export const authenticateUser = async () => {
    const webApp = (await import("@twa-dev/sdk")).default;

    webApp.ready();

    const initData: unknown = webApp.initData;
    console.log(initData)

    if (initData) {
        try {
            const { mutateAsync: submitLogin } = useLogin();

            submitLogin(initData as WebApp);

        } catch (error) {
            console.error("Error during authentication:", error);
        }
    }
};
