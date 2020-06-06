import React from 'react';
import {Card, Typography} from '@material-ui/core';
import clsx from 'clsx';
import {blue, green, red} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root : {
        padding: '24px 32px'
    },
    badge: {
        display      : 'inline-flex',
        fontSize     : 13,
        color        : '#FFF',
        letterSpacing: '.015em',
        lineHeight   : 1,
        padding      : '5px 8px',
        borderRadius : 2,
        '&.new'      : {
            backgroundColor: green[500]
        },
        '&.fix'      : {
            backgroundColor: blue[500]
        },
        '&.breaking' : {
            backgroundColor: red[500]
        }
    }
}));

function ChangelogCard(props)
{
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, props.className)}>
            <div className="flex items-center">
                {props.version && (
                    <Typography className="text-24" component="h2">{`v${props.version}`}</Typography>
                )}
                {props.date && (
                    <Typography className="text-17 ml-8" color="textSecondary" component="h3">({props.date})</Typography>
                )}
            </div>
            {props.newChanges.length > 0 && (
                <div className="mt-24">
                    <div className={clsx(classes.badge, "new")}>New</div>
                    <ul className="my-16 pl-24">
                        {props.newChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {props.fixedChanges.length > 0 && (
                <div className="mt-24">
                    <div className={clsx(classes.badge, "fix")}>Fixed</div>
                    <ul className="my-16 pl-24">
                        {props.fixedChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {props.breakingChanges.length > 0 && (
                <div className="mt-24">
                    <div className={clsx(classes.badge, "breaking")}>Breaking Changes</div>
                    <ul className="my-16 pl-24">
                        {props.breakingChanges.map((change, index) => (
                            <li key={index} className="mb-6">
                                <Typography>{change}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {props.notes}

        </Card>
    );
}

ChangelogCard.defaultProps = {
    version        : null,
    date           : null,
    newChanges     : [],
    fixedChanges   : [],
    breakingChanges: [],
    notes          : null,
};
export default ChangelogCard;
