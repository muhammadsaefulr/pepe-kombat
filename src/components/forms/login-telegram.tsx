import { useTelegramLogin } from "@/lib/telegram/telegramLogin";
import { FaTelegramPlane } from "react-icons/fa";

export default function LoginTelegramBtn() {
    const { authenticateUser } = useTelegramLogin();

    return (
        <div className="pt-12 w-full">
            <button
                onClick={authenticateUser}
                type="button"
                className={`w-full flex justify-center items-center gap-x-2 font-semibold px-4 py-2 rounded shadow-deep-black bg-[#82B894] cursor-pointer`}
            >
                Login Dengan Telegram
                <FaTelegramPlane className="text-blue-400" size={24} />
            </button>
        </div>
    );
}
