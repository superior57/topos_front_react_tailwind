import React, {useEffect, useRef} from 'react';
import {FusePageSimple} from '@fuse';
import {useDispatch} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import NoteDialog from './dialogs/note/NoteDialog';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import NewNote from './NewNote';

function NotesApp(props)
{
    const dispatch = useDispatch();

    const pageLayout = useRef(null);

    useEffect(() => {
        dispatch(Actions.getNotes());
        dispatch(Actions.getLabels());
    }, [dispatch]);

    return (
        <React.Fragment>
            <FusePageSimple
                classes={{
                    contentWrapper: "p-16 sm:p-24 pb-80",
                    content       : "flex min-h-full",
                    leftSidebar   : "w-256 border-0",
                    header        : "min-h-72 h-72"
                }}
                header={
                    <NotesHeader pageLayout={pageLayout}/>
                }
                content={
                    <div className="flex flex-col w-full items-center">
                        <NewNote/>
                        <NoteList/>
                        <NoteDialog/>
                        <LabelsDialog/>
                    </div>
                }
                leftSidebarContent={
                    <NotesSidebarContent/>
                }
                sidebarInner
                ref={pageLayout}
                innerScroll
            />
        </React.Fragment>
    )
}

export default withReducer('notesApp', reducer)(NotesApp);
