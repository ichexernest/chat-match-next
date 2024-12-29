'use client'

import { useAuth } from '@/app/providers/authProvider';

export default function Profile() {

    const { user } = useAuth();
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Explore</h1>
            <div className='my-3'>
                <img src={user?.profile?.photos[0]} alt="" />
                <p>{user?.profile?.name}</p>
                <p>{user?._id}</p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>detail info</p>
                <p>{user?.profile?.gender}</p>
                <p>{user?.profile?.bio}</p>
                <p>{user?.profile?.age}</p>
                <p>{user?.profile?.interests}</p>
            </div>
            <div className='my-3'>
                <p className='font-bold'>settings</p>
                <p>hide profile</p>
                <p>delete account</p>
                <p>logout</p>
                <p>some app settings</p>
            </div>

        </div>
    );
}

