

import { ReactNode } from 'react';

export  interface Product{
    discountPercentage: number;
    name: string;
    color: ReactNode | Iterable<ReactNode>;
    id: any;
    _id : string;
    productName : string;
    _type : "product";
    image? :{
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    category : string;
    status : string;
    slug: {
        _type : "slug";
        current : string;
    };
    inventory : number;
    rating: {
        rate: number;
        count: number;
        };
}