import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import ProductsPage, { loader } from 'app/routes/products/route';
import { sleep } from '../utils';

export default createBoard({
    name: 'Page - Products',
    Board: () => (
        <PageWrapper pageRouteParams={{ loader }}>
            <ProductsPage />
        </PageWrapper>
    ),
    tags: ['Page'],
    readyToSnapshot: () => sleep(3000),
});
