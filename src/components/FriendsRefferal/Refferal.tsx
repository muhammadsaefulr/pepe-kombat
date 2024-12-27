"use client"
import React, { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

interface ReferralFriendsProps {
    userId: number
}

const Refferal: React.FC<ReferralFriendsProps> = ({ userId }) => {
    const INVITE_URL = "https://t.me/dev_pepekombat_bot/pepekombat_dev10"

    useEffect(() => {
        if (typeof window !== 'undefined') {
            WebApp.ready();
        }
    }, []);

    const handleInviteFriend = () => {
        const inviteLink = `${INVITE_URL}?startapp=${userId}`;
        const shareText = `Join me on Pepe Kombat!`;
        const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(
            inviteLink
        )}&text=${encodeURIComponent(shareText)}`;

        if (typeof window !== 'undefined') {
            WebApp.openTelegramLink(fullUrl);
        }
    };

    return (
        <div className="bg-primary-yellow flex gap-x-2 border border-black p-2 rounded-md">
            <div className="">
                <img src="/icon/healthicons_money-bag.svg" width="50" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-black">
                <a className='underline cursor-pointer' onClick={handleInviteFriend}>Invite your friends</a> to get 100.000 coin!
            </h2>
        </div>
    )
}

export default Refferal