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
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-blue-600 mb-12">Kindredy</h1>

            <div className="mb-6 w-80">
                <input
                    type="text"
                    placeholder="start by phone"
                    className="w-full px-4 py-3 rounded-full text-gray-600 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
            </div>
            <button
                onClick={handleLogin}
                className="mb-4 w-80 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300"
            >
                Login
            </button>
            <button
                className="mb-4 w-80 py-3 bg-white hover:bg-gray-100  font-semibold rounded-full shadow-md transition duration-300"
            >
                facebook
            </button>
            <button
                className="w-80 py-3 bg-white hover:bg-gray-100 font-semibold rounded-full shadow-md transition duration-300"
            >
                google
            </button>
        </div>

    );
}

