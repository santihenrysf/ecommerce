import { generatePath } from '@remix-run/react';

const HOME = '/';
const ABOUT = '/about';
const PRODUCTS = '/products';
const PRODUCT = `${PRODUCTS}/:productId`;
const THANK_YOU = '/thank-you';
const ERROR = '/error';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    products: { path: PRODUCTS, to: () => PRODUCTS },
    thankYou: { path: THANK_YOU, to: () => THANK_YOU },
    product: {
        path: PRODUCT,
        to: (slug: string) => generatePath(PRODUCT, { productId: slug }),
    },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;

export type RouteParams = {
    [PRODUCT]: { slug: string };
};
