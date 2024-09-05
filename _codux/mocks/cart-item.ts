import { cart } from '@wix/ecom';

export const mockCartItem: cart.LineItem = {
    productName: {
        translated: "I'm a product",
    },
    image: `https://static.wixstatic.com/media/22e53e_1addd1e1b4c64c9abd47dbc5f36d4b01~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg`,
    price: {
        formattedConvertedAmount: '$10',
    },
    quantity: 2,
};
