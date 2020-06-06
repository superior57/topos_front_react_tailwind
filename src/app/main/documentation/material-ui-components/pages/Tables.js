import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function TablesDoc(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                        <Typography variant="h6">Tables</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/tables"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tables</Typography>
                    <Typography className="description">Data tables display sets of data. They can be fully customized.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/data-tables.html">Data tables</a> display information in a way
                        that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.</Typography>
                    <Typography className="mb-16" component="div">Data tables can include:</Typography>
                    <ul>
                        <li>A corresponding visualization</li>
                        <li>Navigation</li>
                        <li>Tools to query and manipulate data</li>
                    </ul>
                    <Typography className="mb-16" component="div">When including tools, they should be placed directly above or below the table.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Structure</Typography>
                    <Typography className="mb-16" component="div">A data table contains a header row at the top that lists column names, followed by rows for data.</Typography>
                    <Typography className="mb-16" component="div">Checkboxes should accompany each row if the user needs to select or manipulate data.</Typography>
                    <Typography className="mb-16" component="div">For accessibility, the first column is set to be a <code>{`&lt;th&gt;`}</code> element, with
                        a <code>{`scope`}</code> of <code>{`&quot;row&quot;`}</code>. This enables screen readers to identify a cell&#39;s value by it&#39;s row and column
                        name.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/SimpleTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/SimpleTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Dense Table</Typography>
                    <Typography className="mb-16" component="div">A simple example of a dense table with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/DenseTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/DenseTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Sorting &amp; Selecting</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates the use of <code>{`Checkbox`}</code> and clickable rows for selection, with a
                        custom <code>{`Toolbar`}</code>. It uses the <code>{`TableSortLabel`}</code> component to help style column headings.</Typography>
                    <Typography className="mb-16" component="div">The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination
                        controls from scrolling, the TablePagination component is used outside of the Table. (The <a href="#custom-table-pagination-action">&#39;Custom Table
                            Pagination Action&#39; example</a> below shows the pagination within the TableFooter.)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/EnhancedTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/EnhancedTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized tables</Typography>
                    <Typography className="mb-16" component="div">Here is an example of customizing the component. You can learn more about this in the
                        <a href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/CustomizedTables.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomizedTables.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom Table Pagination Action</Typography>
                    <Typography className="mb-16" component="div">The <code>{`Action`}</code> property of the <code>{`TablePagination`}</code> component allows the implementation
                        of
                        custom actions.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Spanning Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with spanning rows &amp; columns.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/SpanningTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/SpanningTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Virtualized Table</Typography>
                    <Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a
                        href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> with the <code>{`Table`}</code> component.
                        It renders 200 rows and can easily handle more.
                        Virtualization helps with performance issues.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js')}
                    /></Typography>
                </div>
            }
        />

    );
}

export default TablesDoc;
