import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import ProductsTable from './ProductsTable';
import ProductsHeader from './ProductsHeader';
import reducer from '../store/reducers';

function Products()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <ProductsHeader/>
            }
            content={
                <ProductsTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('eCommerceApp', reducer)(Products);
