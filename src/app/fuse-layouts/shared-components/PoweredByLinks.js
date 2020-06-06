import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';

function PoweredByLinks()
{
    return (
        <FuseAnimateGroup
            enter={{
                animation: "transition.expandIn"
            }}
            className="hidden sm:flex items-center"
        >
            <Tooltip title="React" placement="top">
                <IconButton className="w-48 h-48 px-4" component="a" href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                        alt="react"
                        width="32"
                    />
                </IconButton>
            </Tooltip>
        </FuseAnimateGroup>
    );
}

export default PoweredByLinks;
