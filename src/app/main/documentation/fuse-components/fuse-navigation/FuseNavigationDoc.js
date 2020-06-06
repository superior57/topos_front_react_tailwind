import React from 'react';
import {Icon, Typography, Button} from '@material-ui/core';
import {FuseHighlight, FusePageSimple, FuseUtils} from '@fuse';
import * as Actions from 'app/store/actions';
import {useDispatch} from 'react-redux';
import {authRoles} from 'app/auth';

function FuseNavigationDoc(props)
{
    const dispatch = useDispatch();

    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseNavigation</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseNavigation</code> is a custom built Fuse component allows you to create a multi-level collapsable navigation.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[navigation]</Typography>

                    <Typography className="mb-16" component="p">
                        <code>FuseNavigation</code> uses a array to populate the entire navigation. It supports four different navigation items;
                        Group,
                        Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[layout]</Typography>

                    <Typography className="mb-16" component="p">
                        "vertical" or "horizontal" layout options.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[active]</Typography>

                    <Typography className="mb-16" component="p">
                        You can set <b>active</b> to "square" for to use square active item style instead of rounded/circle for <b>vertical layout</b>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square"/>
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-48 mb-8" variant="h4">Navigation item types</Typography>

                    <Typography className="mt-32 p-8 rounded-4 bg-yellow-lightest border-1 border-yellow-dark text-black mb-8">Its mandatory to give a unique id to all of your
                        navigation items.</Typography>

                    <Typography className="mt-32 mb-8" variant="h6">Group</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                     {
                                        'id'       : 'applications',
                                        'title'    : 'Applications',
                                        'type'     : 'group',
                                        'icon'     : 'apps',
                                        'children' : [
                                             {
                                                'id'       : 'calendar',
                                                'title'    : 'Calendar',
                                                'type'     : 'item',
                                                'icon'     : 'today',
                                                'url'      : '/apps/calendar'
                                            }
                                        ]
                                     }
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h6">Collapse</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                     {
                                        'id'       : 'dashboards',
                                        'title'    : 'Dashboards',
                                        'type'     : 'collapse',
                                        'icon'     : 'dashboard',
                                        'children' : [
                                            {
                                                'id'   : 'project',
                                                'title': 'Project',
                                                'type' : 'item',
                                                'url'  : '/apps/dashboards/project'
                                            }
                                        ]
                                      }
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h6">Item</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                        }
                    </FuseHighlight>
                    <Typography className="text-20 mt-24 mb-8 font-semibold" component="h2">
                        exact: bool
                    </Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        When true, the active class/style will only be applied if the location is matched exactly.
                    </Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project',
                                    'exact': true
                                }
                                `
                        }
                    </FuseHighlight>
                    <Typography className="mt-32 mb-8" variant="h6">Link</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'    : 'test-link',
                                    'title' : 'Test Link',
                                    'type'  : 'link',
                                    'icon'  : 'link',
                                    'url'   : 'http://fusetheme.com',
                                    'target': '_blank'
                                },
                               `
                        }
                    </FuseHighlight>
                    <Typography className="mt-32 mb-8" variant="h6">Divider</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                {
                                    'type': 'divider
                                },
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-48 mb-8" variant="h4">Actions</Typography>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.setNavigation</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>setNavigation(navigation{'<Array>'})</code> action to set/change whole navigation.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, whole navigation is changed.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.setNavigation([
                                    {
                                        'id'      : 'auth',
                                        'title'   : 'Auth',
                                        'type'    : 'group',
                                        'icon'    : 'apps',
                                        'children': [
                                            {
                                                'id'   : 'login',
                                                'title': 'Login',
                                                'type' : 'item',
                                                'url'  : '/login',
                                                auth   : authRoles.onlyGuest,
                                                'icon' : 'lock'
                                            },
                                            {
                                                'id'   : 'register',
                                                'title': 'Register',
                                                'type' : 'item',
                                                'url'  : '/register',
                                                auth   : authRoles.onlyGuest,
                                                'icon' : 'person_add'
                                            },
                                        ]
                                    }
                                ]));
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Set Navigation
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.setNavigation([
                                            {
                                                'id'      : 'auth',
                                                'title'   : 'Auth',
                                                'type'    : 'group',
                                                'icon'    : 'apps',
                                                'children': [
                                                    {
                                                        'id'   : 'login',
                                                        'title': 'Login',
                                                        'type' : 'item',
                                                        'url'  : '/login',
                                                        auth   : authRoles.onlyGuest,
                                                        'icon' : 'lock'
                                                    },
                                                    {
                                                        'id'   : 'register',
                                                        'title': 'Register',
                                                        'type' : 'item',
                                                        'url'  : '/register',
                                                        auth   : authRoles.onlyGuest,
                                                        'icon' : 'person_add'
                                                    },
                                                ]
                                            }
                                        ]));
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Set Navigation
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.resetNavigation</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>resetNavigation()</code> action to reset navigation to initial state.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, navigation is returned to config defaults.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.resetNavigation());
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Reset Navigation
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.resetNavigation());
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Reset Navigation
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.updateNavigationItem</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>updateNavigationItem(id, <i>object</i>)</code> action to update a navigation item.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, 'dashboards' title changes and a badge is added.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.updateNavigationItem('dashboards',
                                    {
                                        'title': 'All Dashboards',
                                        'badge': {
                                            'title': 2,
                                            'bg'   : 'rgb(3, 155, 228)',
                                            'fg'   : '#FFFFFF'
                                        }
                                    }
                                ))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Update Navigation Item
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.updateNavigationItem('dashboards',
                                            {
                                                'title': 'All Dashboards',
                                                'badge': {
                                                    'title': 2,
                                                    'bg'   : 'rgb(3, 155, 228)',
                                                    'fg'   : '#FFFFFF'
                                                }
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                Update Navigation Item
                                </Button>
                            `
                            }
                        </FuseHighlight>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.removeNavigationItem</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>removeNavigationItem(id)</code> action to remove a navigation item.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, "Calendar" navigation item is removed.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.removeNavigationItem('calendar'))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Remove Navigation Item
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                  <Button
                                        onClick={()=> {
                                            dispatch(Actions.removeNavigationItem('calendar'))
                                        }}
                                        variant="contained"
                                        color="primary"
                                  >
                                  Remove Navigation Item
                                  </Button>
                            `
                            }
                        </FuseHighlight>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.prependNavigationItem</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>prependNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)</code> action to prepend a navigation item into the navigation array.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, "fusetheme.com" navigation item is added at the top of the navigation array.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.prependNavigationItem(
                                    {
                                        'id'    : 'test-link-' + FuseUtils.generateGUID(),
                                        'title' : 'fusetheme.com',
                                        'type'  : 'link',
                                        'icon'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    }
                                ))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Prepend Navigation Item
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>

                    <div className="border-1 rounded-8 p-16 my-16">

                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, "fusetheme.com" navigation item is added into top of the "Dashboards" children.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.prependNavigationItem(
                                    {
                                        'id'    : 'test-link-' + FuseUtils.generateGUID(),
                                        'title' : 'fusetheme.com',
                                        'type'  : 'link',
                                        'icon'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    }, 'dashboards'
                                ))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Prepend Navigation Item
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h6">Actions.appendNavigationItem</Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        Use <code>appendNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)</code> action to append a navigation item into the navigation array.
                    </Typography>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, "fusetheme.com" navigation item is added at the bottom of the array.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.appendNavigationItem(
                                    {
                                        'id'    : 'test-link-' + FuseUtils.generateGUID(),
                                        'title' : 'fusetheme.com',
                                        'type'  : 'link',
                                        'icon'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    }
                                ))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Append Navigation Item
                        </Button>
                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Append Navigation Item
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>

                    <div className="border-1 rounded-8 p-16 my-16">
                        <Typography className="text-16 mb-24" component="h2">
                            With the button below, "fusetheme.com" navigation item is added into bottom of the "Dashboards" children.
                        </Typography>

                        <Button
                            onClick={() => {
                                dispatch(Actions.appendNavigationItem(
                                    {
                                        'id'    : 'test-link-' + FuseUtils.generateGUID(),
                                        'title' : 'fusetheme.com',
                                        'type'  : 'link',
                                        'icon'  : 'link',
                                        'url'   : 'http://fusetheme.com',
                                        'target': '_blank'
                                    }, 'dashboards'
                                ))
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Append Navigation Item
                        </Button>

                        <FuseHighlight component="pre" className="language-jsx mt-24">
                            {
                                `
                                <Button
                                    onClick={()=> {
                                        dispatch(Actions.appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Append Navigation Item
                                </Button>
                                `
                            }
                        </FuseHighlight>
                    </div>
                </div>
            }
        />
    );
}

export default FuseNavigationDoc;
