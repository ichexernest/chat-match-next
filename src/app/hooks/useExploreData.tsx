import { useState, useEffect, useCallback } from 'react';
import { ExploreItem } from '../types';


type ApiResponse = {
    items: ExploreItem[];
}

export const useExploreData = (userId: string) => {
    const [items, setItems] = useState<ExploreItem[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchExploreData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/explore?userId=${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data: ApiResponse = await response.json();
            setItems(data.items);
        } catch (error) {
            console.error("獲取探索數據時出錯:", error);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchExploreData();
    }, []);


    return { items, loading };
};