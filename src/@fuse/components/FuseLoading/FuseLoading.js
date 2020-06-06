import React, {useState} from 'react';
import {Typography, LinearProgress} from '@material-ui/core';
import {useTimeout} from '@fuse/hooks';
import PropTypes from 'prop-types';

function FuseLoading(props)
{
    const [showLoading, setShowLoading] = useState(!props.delay);

    useTimeout(() => {
        setShowLoading(true);
    }, props.delay);

    if ( !showLoading )
    {
        return null;
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <Typography className="text-20 mb-16" color="textSecondary">Loading...</Typography>
            <LinearProgress className="w-xs" color="secondary"/>
        </div>
    );
}

FuseLoading.propTypes = {
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

FuseLoading.defaultProps = {
    delay: false
};

export default FuseLoading;
