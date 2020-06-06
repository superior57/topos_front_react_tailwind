import React from 'react';
import {FusePageCarded, DemoContent} from '@fuse';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    layoutRoot: {}
});

function CardedFullWidthSample()
{
    const classes = useStyles();

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="py-24"><h4>Header</h4></div>
            }
            contentToolbar={
                <div className="px-24"><h4>Content Toolbar</h4></div>
            }
            content={
                <div className="p-24">
                    <h4>Content</h4>
                    <br/>
                    <DemoContent/>
                </div>
            }
        />
    )
}

export default CardedFullWidthSample;
