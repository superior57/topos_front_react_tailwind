import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import AccountsHeader from './AccountsHeader';
import AccountsTable from './AccountsTable';
import reducer from '../store/reducers';

function Accounts()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <AccountsHeader/>
            }
            content={
                <AccountsTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('accountsApp', reducer)(Accounts);
