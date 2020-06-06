import React, {useEffect, useState} from 'react';
import {List, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions';
import MailListItem from './MailListItem';

function MailList(props)
{
    const dispatch = useDispatch();
    const mails = useSelector(({mailApp}) => mailApp.mails.entities);
    const searchText = useSelector(({mailApp}) => mailApp.mails.searchText);

    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        dispatch(Actions.getMails(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect(() => {
        function getFilteredArray()
        {
            const arr = Object.keys(mails).map((id) => mails[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( mails )
        {
            setFilteredData(getFilteredArray());
        }
    }, [mails, searchText]);

    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no messages!
                    </Typography>
                </div>
            </FuseAnimate>
        );
    }

    return (
        <List className="p-0">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                {
                    filteredData.map((mail) => (
                            <MailListItem mail={mail} key={mail.id}/>
                        )
                    )
                }
            </FuseAnimateGroup>
        </List>
    );
}

export default withRouter(MailList);
