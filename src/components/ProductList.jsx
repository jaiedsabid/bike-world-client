import { classNames } from '../utils/helpers';
import ProductCard from './ProductCard';

const ProductList = ({ title, limit, className }) => {
    const products = [
        {
            id: 1,
            name: 'Yamaha R15 V3 Dual ABS',
            price: '$6250',
            description:
                'One of the best Yamaha R15 V3 bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/yamaha-r15-v3.0-monster-edition/disk/grey.jpg',
            quantity: 108,
        },
        {
            id: 2,
            name: 'Yamaha MT-15',
            price: '$3900',
            description:
                'One of the best Yamaha MT-15 bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/mt-15/mt15.jpg',
            quantity: 140,
        },
        {
            id: 3,
            name: 'Yamaha FZS-FI V 3.0',
            price: '$2857',
            description:
                'One of the best Yamaha FZS-FI V 3.0 bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/fzs-fi-v3.0/dark-matt-blue.png',
            quantity: 140,
        },
        {
            id: 4,
            name: 'Yamaha Fazer FI',
            price: '$3214',
            description:
                'One of the best Yamaha Fazer FI bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/fazer-fi/midnight-black/fazer-fi-mb.jpg',
            quantity: 140,
        },
        {
            id: 5,
            name: 'Yamaha FZS FI Double Disc',
            price: '$2,500',
            description:
                'One of the best Yamaha FZS FI Double Disc bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/fzs-fi/armada-blue/fzs-armada-blue-2.jpg',
            quantity: 140,
        },
        {
            id: 6,
            name: 'Yamaha Saluto 125',
            price: '$1900',
            description:
                'One of the best Yamaha Saluto 125 bikes in the world. It has a very good suspension and a very good handling.',
            supplier: 'Yamaha',
            imageSrc:
                'https://acimotors-bd.com/assets/images/product/atumobile/saluto-disk-brake/matt-green/salutodisc-met-greenjpg(1).jpg',
            quantity: 140,
        },
    ];

    return (
        <div className={classNames('bg-white', className)}>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {title && (
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-center font-bold text-gray-900">
                        {title}
                    </h2>
                )}

                <div className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products
                        .slice(0, limit ? limit : products.length)
                        .map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;