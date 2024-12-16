"use client"

import { authenticateUser } from '@/lib/telegram/telegramAuth';
import React, { useEffect } from 'react'
import { FaTelegramPlane } from 'react-icons/fa';

const LoginTelegramBtn = async () => {

    return (
        <div className="pt-12 w-full">
            <button
                onClick={authenticateUser}
                type="submit"
                className="bg-[#82B894] w-full flex justify-center gap-x-2 font-semibold px-4 py-2 rounded shadow-deep-black"
            >
                Login Dengan Telegram
                <FaTelegramPlane className="text-blue-400" size={24} />
            </button>
        </div>
    )
}

export default LoginTelegramBtn;