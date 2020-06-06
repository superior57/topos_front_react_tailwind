import React, {useRef} from 'react';
import {RootRef, Card, CardContent, CardActions} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import clsx from 'clsx';
import BoardCard from './BoardCard';
import BoardAddCard from './BoardAddCard';
import BoardListHeader from './BoardListHeader';

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor         : darken(theme.palette.background.default, theme.palette.type === 'light' ? 0.02 : .4),
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut
    }
}));

function BoardList(props)
{
    const classes = useStyles(props);
    const contentScrollEl = useRef(null);

    function handleCardAdded()
    {
        contentScrollEl.current.scrollTop = contentScrollEl.current.scrollHeight;
    }

    return (
        <Draggable draggableId={props.list.id} index={props.index} type="list">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <Card
                        className={clsx(classes.list, "w-256 sm:w-320 mr-16 sm:mr-24 max-h-full flex flex-col")}
                        square={true}
                        elevation={snapshot.isDragging ? 3 : 1}
                    >

                        <BoardListHeader
                            list={props.list}
                            className="border-b-1"
                            handleProps={provided.dragHandleProps}
                        />
                        <CardActions className="p-0 flex-shrink-0">
                            <BoardAddCard listId={props.list.id} onCardAdded={handleCardAdded}/>
                        </CardActions>
                        <RootRef rootRef={contentScrollEl}>
                            <CardContent className="flex flex-col flex-1 flex-auto h-full min-h-0 w-full p-0 overflow-auto">
                                <Droppable
                                    droppableId={props.list.id}
                                    type="card"
                                    direction="vertical"
                                >
                                    {(provided) => (
                                        <div ref={provided.innerRef} className="flex flex-col w-full h-full p-16">
                                            {props.list.actions.map((action, index) => (
                                                <BoardCard
                                                    key={action.id}
                                                    actionId={action.id}
                                                    index={index}
                                                    list={props.list}
                                                />
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </CardContent>
                        </RootRef>


                    </Card>
                </div>
            )}
        </Draggable>
    );
}

export default BoardList;
