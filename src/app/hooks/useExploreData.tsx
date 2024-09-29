import { useState, useEffect, useCallback } from 'react';
import { ExploreItem } from '../types';


type ApiResponse = {
    items: ExploreItem[];
    totalPages: number;
    currentPage: number;
    hasMore: boolean;
}

export const useExploreData = () => {
    const [items, setItems] = useState<ExploreItem[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchExploreData = useCallback(async (pageNumber: number) => {
        setLoading(true);
        try {
            const response = await fetch('/api/explore');
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
            }
            const data: ApiResponse = await response.json();
            setItems(data.items);
            setHasMore(data.hasMore);
            setPage(data.currentPage);
        } catch (error) {
            console.error("獲取探索數據時出錯:", error);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchExploreData(page);
    }, []);

    // const loadMore = () => {
    //     if (!loading && hasMore) {
    //         fetchExploreData(page + 1);
    //     }
    // };

    return { items, loading, hasMore };
};