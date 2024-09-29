import { useState, useEffect, useCallback } from 'react';
import { ExploreItem } from '../types';

const fdata ={
    matched:[],
    liked:['a03'],
    disliked:[],
    blocked:[]
}

type ApiResponse = {
    matched: String[];
    liked: String[];
    disliked: String[];
    blocked:String[]
}

export const useMatch = () => {
    const [matchedList, setMatchedList] = useState<String[]>([]);
    const [likedList, setLikedList] = useState<String[]>([]);
    const [dislikedList, setDislikedList] = useState<String[]>([]);
    const [blockedList, setBlockedList] = useState<String[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = useCallback(async (pageNumber: number) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/api/match/${`personalId`}`);
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data: ApiResponse = await response.json();
            setMatchedList(data.matched);
            setLikedList(data.liked);
            setDislikedList(data.disliked);
            setBlockedList(data.blocked)
        } catch (error) {
            console.error("獲取數據時出錯:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchFake = useCallback(async () => {
        setLoading(true);
        try {
            setMatchedList(fdata.matched);
            setLikedList(fdata.liked);
            setDislikedList(fdata.disliked);
            setBlockedList(fdata.blocked)
        } catch (error) {
            console.error("獲取數據時出錯:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFake();
    }, []);

    const handleResult = ( id:String, action:'like' | 'dislike' | 'block') => {
    };

    return { matchedList, likedList, dislikedList, blockedList, handleResult };
};