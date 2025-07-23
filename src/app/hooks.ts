import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { RootState, AppDispatch } from '../store/store.ts'
import {useEffect} from "react";

// Кастомный хук для использования useDispatch с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Кастомный хук для использования useSelector с типизацией
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
}