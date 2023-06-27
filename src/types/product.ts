export interface ProductItemProps {
    id: number;
    stock: number;
    price: number;
    rating: number;
    title: string;
    brand: string;
    category: string;
    thumbnail: string;
    description: string;
    discountPercentage: number;
    images: Array<string>;
}
