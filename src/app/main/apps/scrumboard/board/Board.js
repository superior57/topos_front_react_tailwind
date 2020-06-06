import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Icon, IconButton, AppBar, Toolbar, Drawer, Hidden} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import clsx from 'clsx';
import BoardTitle from './BoardTitle';
import BoardList from './BoardList';
import BoardAddList from './BoardAddList';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';
import {useDispatch, useSelector} from 'react-redux';

function Board(props)
{
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board);

    const containerRef = useRef(null);
    const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

    useEffect(() => {
        dispatch(Actions.getBoard(props.match.params));
        return () => {
            dispatch(Actions.resetBoard());
        }
    }, [dispatch, props.match.params]);

    function onDragEnd(result)
    {
        const {source, destination} = result;

        // dropped nowhere
        if ( !destination )
        {
            return;
        }

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
        {
            return;
        }

        // reordering list
        if ( result.type === 'list' )
        {
            dispatch(Actions.reorderList(result));
        }

        // reordering card
        if ( result.type === 'card' )
        {
            dispatch(Actions.reorderCard(result));
        }
    }

    const toggleSettingsDrawer = (state) =>
    {
        setSettingsDrawerOpen((state === undefined) ? !settingsDrawerOpen : state);
    }

    if ( !board )
    {
        return null;
    }

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative"
            ref={containerRef}
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
                    <Hidden xsDown>
                        <Button to="/apps/routines/" component={Link} variant="contained">
                            <Icon className="mr-8">arrow_back</Icon>
                            {t('back')}
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/apps/routines/" component={Link}>
                            <Icon>arrow_back</Icon>
                        </IconButton>
                    </Hidden>

                    <div className="flex flex-1 justify-center items-center">
                        <BoardTitle/>
                    </div>

                    <IconButton color="inherit" onClick={() => toggleSettingsDrawer(true)}>
                        <Icon>settings</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={clsx("flex flex-1 overflow-x-auto overflow-y-hidden")}>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable
                        droppableId="list"
                        type="list"
                        direction="horizontal"
                    >
                        {(provided) => (
                            <div ref={provided.innerRef} className="flex container p-16 md:p-24">
                                {board.lists.map((list, index) => (
                                    <BoardList
                                        key={list.id}
                                        list={list}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}

                                <BoardAddList/>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            <Drawer
                anchor="right"
                className="absolute overflow-hidden"
                classes={{
                    paper: "absolute w-320"
                }}
                BackdropProps={{
                    classes: {
                        root: "absolute"
                    }
                }}
                container={containerRef.current}
                ModalProps={{
                    keepMounted: true
                }}
                open={settingsDrawerOpen}
                onClose={() => toggleSettingsDrawer(false)}
            >
                <BoardSettingsSidebar toggleSettingsDrawer={toggleSettingsDrawer.bind(this)}/>
            </Drawer>

            <BoardCardDialog/>

        </div>
    );
}

export default withReducer('scrumboardApp', reducer)(withRouter(Board));
