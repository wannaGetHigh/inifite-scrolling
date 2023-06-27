import React, { useEffect, useId, useRef, useState } from 'react';

import ProductItem from 'components/ProductItem';
import { useIntersectionObserver, useDebounce } from 'hooks';
import { useProductsQuery } from 'queries/product';

const MainContent = () => {
    const searchId = useId();
    const [search, setSearch] = useState('');
    const searchDebounced = useDebounce(search);

    const {
        data: productsQuery,
        isSuccess,
        hasNextPage,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
    } = useProductsQuery({ search: searchDebounced, pageParam: 0, limit: 20 });

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {
        threshold: 0,
        root: null,
        rootMargin: '50%',
        freezeOnceVisible: false,
    });
    const isVisible = !!entry?.isIntersecting;

    const productList = productsQuery?.pages;

    useEffect(() => {
        if (isVisible && hasNextPage) {
            fetchNextPage();
        }
    }, [isVisible, fetchNextPage, hasNextPage]);

    return (
        <>
            <main>
                <section className="container">
                    <div className="input-wrapper">
                        <input
                            id={searchId}
                            type="text"
                            placeholder="Search name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <label htmlFor={searchId}>Search</label>
                    </div>
                </section>

                {isLoading ? (
                    <div className="loading-section">Loading...</div>
                ) : (
                    <section className="container">
                        <div className="product-wrapper">
                            {searchDebounced ? (
                                <div>
                                    Search result of `
                                    <strong>{searchDebounced}</strong>`.
                                </div>
                            ) : null}
                            <h5>
                                Total products: {productsQuery?.pages[0].total}
                            </h5>

                            {isSuccess &&
                            productList &&
                            productList.length > 0 ? (
                                <div className="list-container">
                                    {productList.map((page) =>
                                        page.products.map((prod, i) => (
                                            <ProductItem
                                                key={prod.id}
                                                {...prod}
                                            />
                                        ))
                                    )}
                                </div>
                            ) : (
                                <div>Products not found</div>
                            )}
                        </div>
                    </section>
                )}
            </main>

            <footer ref={ref} className="container">
                {isFetchingNextPage ? 'Loading more...' : 'End of results'}
            </footer>
        </>
    );
};

export default MainContent;
