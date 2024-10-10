"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/home');
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

