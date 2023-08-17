import { AxiosError } from "axios";

import { useState } from "react";

type CallbackFunction = (...args: number[]) => Promise<void>;

export const useFetching = (callback: CallbackFunction) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | string>('');

    const fetching = async (...args: number[]) => {
        try {
            setIsLoading(true);

            await callback(...args);
        } catch (error) {
            setIsLoading(false);

            if (error instanceof AxiosError) {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return [
        fetching,
        isLoading,
        error,
    ] as const;
}
