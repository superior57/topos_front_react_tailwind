import React, {useState} from 'react';
import {AppBar, Card, Icon, Tab, Tabs} from '@material-ui/core';
import {FuseHighlight} from '@fuse';
import PropTypes from 'prop-types';
import DemoFrame from './DemoFrame';

const propTypes = {
    raw            : PropTypes.string,
    currentTabIndex: PropTypes.number
};

const defaultProps = {
    currentTabIndex: 0
};

function FuseExample(props)
{
    const [currentTab, setCurrentTab] = useState(props.currentTabIndex);
    const {component: Component, raw, iframe, className} = props;

    function handleChange(event, value)
    {
        setCurrentTab(value);
    }

    return (
        <Card className={className}>
            <AppBar position="static" color="default" elevation={0}>
                <Tabs
                    classes={
                        {
                            root         : 'border-b-1',
                            flexContainer: 'justify-end'
                        }}
                    value={currentTab}
                    onChange={handleChange}
                >
                    {Component && (
                        <Tab classes={{root: 'min-w-64'}} icon={<Icon>remove_red_eye</Icon>}/>
                    )}
                    {raw && (
                        <Tab classes={{root: 'min-w-64'}} icon={<Icon>code</Icon>}/>
                    )}
                </Tabs>
            </AppBar>
            <div className="flex justify-center">
                <div className={currentTab === 0 ? 'flex flex-1' : 'hidden'}>
                    {Component && (
                        iframe ? (
                            <DemoFrame>
                                <Component/>
                            </DemoFrame>
                        ) : (
                            <div className="p-24 flex flex-1 justify-center">
                                <Component/>
                            </div>
                        )
                    )}
                </div>
                <div className={currentTab === 1 ? 'flex flex-1' : 'hidden'}>
                    {raw && (
                        <div className="flex flex-1">
                            <FuseHighlight component="pre" className="language-javascript w-full">
                                {raw}
                            </FuseHighlight>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

FuseExample.propTypes = propTypes;
FuseExample.defaultProps = defaultProps;

export default FuseExample;
