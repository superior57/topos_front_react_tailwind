import React from 'react';
import {withStyles, Icon, IconButton, Tooltip, Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import {navigate} from 'react-big-calendar/lib/utils/constants';
import connect from 'react-redux/es/connect/connect';
import clsx from 'clsx';
import moment from 'moment';

const styles = theme => ({
    root: {
        backgroundImage   : 'url("../../assets/images/backgrounds/header-bg.png")',
        backgroundColor   : '#FAFAFA',
        color             : '#FFFFFF',
        backgroundSize    : 'cover',
        backgroundPosition: '0 50%',
        backgroundRepeat  : 'no-repeat',
        '&:before'        : {
            content   : "''",
            position  : 'absolute',
            top       : 0,
            right     : 0,
            bottom    : 0,
            left      : 0,
            zIndex    : 1,
            background: 'rgba(0, 0, 0, 0.45)'
        },
        '&.Jan'           : {
            backgroundImage   : "url('/assets/images/calendar/winter.jpg')",
            backgroundPosition: '0 85%'
        },
        '&.Feb'           : {
            backgroundImage   : "url('/assets/images/calendar/winter.jpg')",
            backgroundPosition: '0 85%'
        },
        '&.Mar'           : {
            backgroundImage   : "url('/assets/images/calendar/spring.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.Apr'           : {
            backgroundImage   : "url('/assets/images/calendar/spring.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.May'           : {
            backgroundImage   : "url('/assets/images/calendar/spring.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.Jun'           : {
            backgroundImage   : "url('/assets/images/calendar/summer.jpg')",
            backgroundPosition: '0 80%'
        },
        '&.Jul'           : {
            backgroundImage   : "url('/assets/images/calendar/summer.jpg')",
            backgroundPosition: '0 80%'
        },
        '&.Aug'           : {
            backgroundImage   : "url('/assets/images/calendar/summer.jpg')",
            backgroundPosition: '0 80%'
        },
        '&.Sep'           : {
            backgroundImage   : "url('/assets/images/calendar/autumn.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.Oct'           : {
            backgroundImage   : "url('/assets/images/calendar/autumn.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.Nov'           : {
            backgroundImage   : "url('/assets/images/calendar/autumn.jpg')",
            backgroundPosition: '0 40%'
        },
        '&.Dec'           : {
            backgroundImage   : "url('/assets/images/calendar/winter.jpg')",
            backgroundPosition: '0 85%'
        }
    }
});

const viewNamesObj = {
    month    : {
        title: 'Month',
        icon : 'view_module'
    },
    week     : {
        title: 'Week',
        icon : 'view_week'
    },
    work_week: {
        title: 'Work week',
        icon : 'view_array'
    },
    day      : {
        title: 'Day',
        icon : 'view_day'
    },
    agenda   : {
        title: 'Agenda',
        icon : 'view_agenda'
    }
};

class CalendarHeader extends Toolbar {

    viewButtons()
    {
        let viewNames = this.props.views;
        const view = this.props.view;

        if ( viewNames.length > 1 )
        {
            return viewNames.map(name => (
                    <Tooltip title={viewNamesObj[name].title} key={name}>
                        <div>
                            <FuseAnimate animation="transition.expandIn" delay={500}>
                                <IconButton
                                    aria-label={name}
                                    onClick={() => this.props.onView(name)}
                                    disabled={view === name}
                                >
                                    <Icon>{viewNamesObj[name].icon}</Icon>
                                </IconButton>
                            </FuseAnimate>
                        </div>
                    </Tooltip>
                )
            )
        }
    }

    render()
    {
        const {classes, mainThemeDark, label, date} = this.props;

        return (
            <ThemeProvider theme={mainThemeDark}>

                <div className={clsx(classes.root, "flex h-200 min-h-200 relative", moment(date).format('MMM'))}>

                    <div className="flex flex-1 flex-col p-12 justify-between z-10 container">

                        <div className="flex flex-col items-center justify-between sm:flex-row">
                            <div className="flex items-center my-16 sm:mb-0">
                                <FuseAnimate animation="transition.expandIn" delay={300}>
                                    <Icon className="text-32 mx-12">today</Icon>
                                </FuseAnimate>
                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography variant="h6">Calendar</Typography>
                                </FuseAnimate>
                            </div>
                            <div className="flex items-center">
                                <Tooltip title="Today">
                                    <div>
                                        <FuseAnimate animation="transition.expandIn" delay={500}>
                                            <IconButton aria-label="today" onClick={this.navigate.bind(null, navigate.TODAY)}>
                                                <Icon>today</Icon>
                                            </IconButton>
                                        </FuseAnimate>
                                    </div>
                                </Tooltip>
                                {this.viewButtons()}
                            </div>
                        </div>

                        <FuseAnimate delay={500}>
                            <div className="flex items-center justify-center">
                                <Tooltip title="Previous">
                                    <IconButton aria-label="Previous" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>
                                        <Icon>chevron_left</Icon>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="h6">{label}</Typography>
                                <Tooltip title="Next">
                                    <IconButton aria-label="Next" onClick={this.navigate.bind(null, navigate.NEXT)}>
                                        <Icon>chevron_right</Icon>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </FuseAnimate>
                    </div>
                </div>
            </ThemeProvider>
        )
    };
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(CalendarHeader));

