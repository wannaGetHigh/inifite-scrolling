import { useInfiniteQuery } from 'react-query';
import { ApiResponse } from 'types/api';
import { ProductItemProps } from 'types/product';

type QueryParams = {
    search: string;
    pageParam: number;
    limit: number;
};

const productApiUrl = 'https://dummyjson.com/products';

const fetchProducts = async ({
    search,
    pageParam = 0,
    limit = 20
}: QueryParams): Promise<ApiResponse<ProductItemProps>> => {
    const queryUrl = search
        ? 'https://dummyjson.com/products/search?' +
          new URLSearchParams({ q: search }).toString()
        : productApiUrl + `?limit=${limit}&skip=${pageParam}`;

    const response = await fetch(queryUrl);
    const rs = await response.json();
    return rs;
};

export const useProductsQuery = ({ search, limit = 20 }: QueryParams) =>
    useInfiniteQuery({
        queryKey: ['fetchProducts', search],
        queryFn: ({ pageParam = 0 }) => fetchProducts({ search, pageParam, limit }),
        keepPreviousData: true,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.limit + lastPage.skip < lastPage.total ? lastPage.skip + limit : null;
            return nextPage;
        },
    });
