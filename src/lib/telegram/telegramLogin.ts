import { useRouter } from "next/navigation";
import { WebAppUser } from "@twa-dev/types";
import { useLogin } from "../tanstack/tanstackquery-handler";

export function useTelegramLogin() {
    const router = useRouter();
    const { mutate: SubmitLogin, isSuccess } = useLogin();

    const authenticateUser = async () => {
        const WebApp = (await import("@twa-dev/sdk")).default;
        WebApp.ready();

        const initData: unknown = WebApp.initData;
        if (initData) {
            SubmitLogin(initData as WebAppUser);

            if (isSuccess) {
                router.push("/dashboard");
            } else {
                console.error("Authentication failed");
            }
        }
    };

    return { authenticateUser };
}
