import React, {useEffect, useMemo, useState} from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Icon, Input, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    header  : {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    },
    panel   : {
        margin         : 0,
        borderWidth    : '1px 1px 0 1px',
        borderStyle    : 'solid',
        borderColor    : theme.palette.divider,
        '&:first-child': {
            borderRadius: '16px 16px 0 0'
        },
        '&:last-child' : {
            borderRadius: '0 0 16px 16px',
            borderWidth : '0 1px 1px 1px'
        },
        '&$expanded'   : {
            margin: 'auto',
        },
    },
    expanded: {}
}));

function FaqPage()
{
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        axios.get('/api/faq').then(res => {
            setData(res.data);
        });
    }, []);

    useEffect(() => {
        function getFilteredArray(arr, searchText)
        {
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        setFilteredData(getFilteredArray(data, searchText));
    }, [data, searchText]);

    const toggleExpansion = panel => (event, expanded) => {
        setExpanded(expanded ? panel : false);
    };

    function handleSearch(event)
    {
        setSearchText(event.target.value);
    }

    return (
        <div className="w-full flex flex-col flex-auto">

            <div className={clsx(classes.header, "flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")}>

                <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                    <Typography color="inherit" className="text-36 sm:text-56 font-light">
                        We're here to help
                    </Typography>
                </FuseAnimate>

                <FuseAnimate duration={400} delay={600}>
                    <Typography variant="subtitle1" color="inherit" className="opacity-75 mt-8 sm:mt-16 mx-auto max-w-512">
                        Frequently asked questions
                    </Typography>
                </FuseAnimate>

                <Paper className={"flex items-center h-56 w-full max-w-md mt-16 sm:mt-32"} elevation={1}>
                    <Icon color="action" className="ml-16">search</Icon>
                    <Input
                        placeholder="Search in faqs..."
                        className="px-16"
                        disableUnderline
                        fullWidth
                        inputProps={{
                            'aria-label': 'Search'
                        }}
                        value={searchText}
                        onChange={handleSearch}
                    />
                </Paper>
            </div>

            <div className="flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32">
                {
                    (filteredData.length === 0) && (
                        <div className="flex flex-auto items-center justify-center w-full h-full">
                            <Typography color="textSecondary" variant="h5">
                                There are no faqs!
                            </Typography>
                        </div>
                    )
                }
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    {useMemo(() => {
                        return filteredData.map((faq) => (

                            <ExpansionPanel
                                classes={{
                                    root    : classes.panel,
                                    expanded: classes.expanded
                                }}
                                key={faq.id}
                                expanded={expanded === faq.id}
                                onChange={toggleExpansion(faq.id)}
                                elevation={0}
                            >

                                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                                    <div className="flex items-center">
                                        <Icon className="mr-8" color="action">help_outline</Icon>
                                        <Typography className="">{faq.question}</Typography>
                                    </div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <Typography className="">{faq.answer}</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))
                    }, [filteredData, classes, expanded])}
                </FuseAnimateGroup>

            </div>
        </div>
    );
}

export default FaqPage;
