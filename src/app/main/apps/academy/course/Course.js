import React, {useEffect, useRef} from 'react';
import {Paper, Hidden, Icon, IconButton, Fab, Typography, Stepper, Step, StepLabel} from '@material-ui/core';
import {FusePageSimple, FuseScrollbars} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import SwipeableViews from 'react-swipeable-views';
import {green} from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import reducer from '../store/reducers';
import * as Actions from '../store/actions';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    stepLabel : {
        cursor: 'pointer!important'
    },
    successFab: {
        background: green[500] + '!important',
        color     : 'white!important'
    }
}));

function Course(props)
{
    const dispatch = useDispatch();
    const course = useSelector(({academyApp}) => academyApp.course);

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    useEffect(() => {
        /**
         * Get the Course Data
         */
        dispatch(Actions.getCourse(props.match.params));
    }, [dispatch, props.match.params]);

    useEffect(() => {
        /**
         * If the course is opened for the first time
         * Change ActiveStep to 1
         */
        if ( course && course.activeStep === 0 )
        {
            dispatch(Actions.updateCourse({activeStep: 1}));
        }
    }, [dispatch, course]);

    function handleChangeActiveStep(index)
    {
        dispatch(Actions.updateCourse({activeStep: index + 1}));
    }

    function handleNext()
    {
        dispatch(Actions.updateCourse({activeStep: course.activeStep + 1}));
    }

    function handleBack()
    {
        dispatch(Actions.updateCourse({activeStep: course.activeStep - 1}));
    }

    const activeStep = course && course.activeStep !== 0 ? course.activeStep : 1;

    return (
        <FusePageSimple
            classes={{
                content: "flex flex-col flex-auto overflow-hidden",
                header : "h-72 min-h-72"
            }}
            header={
                <div className="flex flex-1 items-center px-16 lg:px-24">
                    <Hidden lgUp>
                        <IconButton
                            onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>
                    <IconButton
                        className="mr-16"
                        to="/apps/academy/courses"
                        component={Link}
                    >
                        <Icon>arrow_back</Icon>
                    </IconButton>
                    {course && (
                        <Typography className="flex-1 text-20">{course.title}</Typography>
                    )}
                </div>
            }
            content={
                course && (
                    <div className="flex flex-1 relative overflow-hidden">
                        <FuseScrollbars className="w-full overflow-auto">
                            <SwipeableViews
                                className="overflow-hidden"
                                index={activeStep - 1}
                                enableMouseEvents={true}
                                onChangeIndex={handleChangeActiveStep}
                            >
                                {course.steps.map((step, index) => (
                                    <div className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64" key={step.id}>
                                        <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                            <div dangerouslySetInnerHTML={{__html: step.content}}/>
                                        </Paper>
                                    </div>
                                ))}
                            </SwipeableViews>
                        </FuseScrollbars>

                        <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32">
                            <div className="flex justify-between w-full max-w-xl px-8">
                                <div>
                                    {activeStep !== 1 && (
                                        <Fab className="" color="secondary" onClick={handleBack}>
                                            <Icon>chevron_left</Icon>
                                        </Fab>
                                    )}
                                </div>
                                <div>
                                    {activeStep < course.steps.length ? (
                                            <Fab className="" color="secondary" onClick={handleNext}>
                                                <Icon>chevron_right</Icon>
                                            </Fab>
                                        ) :
                                        (
                                            <Fab
                                                className={classes.successFab}
                                                to="/apps/academy/courses"
                                                component={Link}
                                            >
                                                <Icon>check</Icon>
                                            </Fab>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            leftSidebarContent={
                course && (
                    <Stepper
                        classes={{root: "bg-transparent"}}
                        activeStep={activeStep - 1}
                        orientation="vertical"
                    >
                        {course.steps.map((step, index) => {
                            return (
                                <Step
                                    key={step.id}
                                    onClick={() => handleChangeActiveStep(index)}
                                >
                                    <StepLabel classes={{root: classes.stepLabel}}>{step.title}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                )
            }
            innerScroll
            ref={pageLayout}
        />
    )
}

export default withReducer('academyApp', reducer)(Course);
