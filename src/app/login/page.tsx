"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../providers/authProvider';

export default function Login() {
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            const response = await fetch(`/api/users/${"6702a352014e5221b6c64247"}`);
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            login(data)
        } catch (error) {
            console.error("獲取探索數據時出錯:", error);
        } finally {
            router.push('/app/recs');
                }
    }

    return (
        <div className="container mx-auto">
            <label htmlFor="username">account</label>
            <input type="text" />
            <label htmlFor="username">password</label>
            <input type="text" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

