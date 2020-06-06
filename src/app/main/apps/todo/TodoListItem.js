import React from 'react';
import {IconButton, Icon, Typography, Checkbox, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import * as Actions from './store/actions';
import TodoChip from './TodoChip';

const useStyles = makeStyles({
    todoItem: {
        '&.completed': {
            background                    : 'rgba(0,0,0,0.03)',
            '& .todo-title, & .todo-notes': {
                textDecoration: 'line-through'
            }
        }
    }
});

function TodoListItem(props)
{
    const dispatch = useDispatch();
    const labels = useSelector(({todoApp}) => todoApp.labels);

    const classes = useStyles(props);

    return (
        <ListItem
            className={clsx(classes.todoItem, {"completed": props.todo.completed}, "border-solid border-b-1 py-16  px-0 sm:px-8")}
            onClick={(ev) => {
                ev.preventDefault();
                dispatch(Actions.openEditTodoDialog(props.todo));
            }}
            dense
            button
        >

            <Checkbox
                tabIndex={-1}
                disableRipple
                checked={props.todo.completed}
                onChange={() => dispatch(Actions.toggleCompleted(props.todo))}
                onClick={(ev) => ev.stopPropagation()}
            />

            <div className="flex flex-1 flex-col relative overflow-hidden pl-8">

                <Typography
                    variant="subtitle1"
                    className="todo-title truncate"
                    color={props.todo.completed ? "textSecondary" : "inherit"}
                >
                    {props.todo.title}
                </Typography>

                <Typography
                    color="textSecondary"
                    className="todo-notes truncate"
                >
                    {_.truncate(props.todo.notes.replace(/<(?:.|\n)*?>/gm, ''), {'length': 180})}
                </Typography>

                <div className={clsx(classes.labels, "flex mt-8")}>
                    {props.todo.labels.map(label => (
                        <TodoChip
                            className="mr-4"
                            title={_.find(labels, {id: label}).title}
                            color={_.find(labels, {id: label}).color}
                            key={label}
                        />
                    ))}
                </div>
            </div>

            <div className="px-8">
                <IconButton onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    dispatch(Actions.toggleImportant(props.todo))
                }}>
                    {props.todo.important ? (
                        <Icon style={{color: red[500]}}>error</Icon>
                    ) : (
                        <Icon>error_outline</Icon>
                    )}
                </IconButton>
                <IconButton onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    dispatch(Actions.toggleStarred(props.todo))
                }}>
                    {props.todo.starred ? (
                        <Icon style={{color: amber[500]}}>star</Icon>
                    ) : (
                        <Icon>star_outline</Icon>
                    )}
                </IconButton>
            </div>
        </ListItem>
    );
}

export default TodoListItem;
