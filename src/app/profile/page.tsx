'use client'

import { useState, useEffect } from 'react';

export default function Profile() {

    const testMongo = async () =>{
        try {
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data = await response.json();
        } catch (error) {
            console.error("獲取探索數據時出錯:", error);
        } finally {
        }
 
    }

    const createBase = async () =>{
        try {
            const response = await fetch('/api/randomCreate');
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data = await response.json();
        } catch (error) {
            console.error("獲取探索數據時出錯:", error);
        } finally {
        }
 
    }


    useEffect(() => {
        const getProfile = async () =>{
            try {
                const response = await fetch(`/api/users/${"6702a352014e5221b6c64247"}`);
                if (!response.ok) {
                    throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
                }
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.error("獲取探索數據時出錯:", error);
            } finally {
            }
        }
        getProfile()
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Explore</h1>
            <div className='my-3'>
                <p>Avatar</p>
                <p>Name</p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>detail info</p>
                <p>Location</p>
                <p>Description</p>
                <p>Age</p>
                <p>Gentle</p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>settings</p>
                <p>hide profile</p>
                <p>delete account</p>
                <p>logout</p>
                <p>some app settings</p>
            </div>
            <button className='bg-green-500' onClick={testMongo}>test</button>
            <button className='bg-green-500' onClick={createBase}>create</button>

        </div>
    );
}

