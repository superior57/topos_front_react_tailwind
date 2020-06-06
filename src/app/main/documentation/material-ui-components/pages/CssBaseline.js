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

function CssBaselineDoc(props)
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
                        <Typography variant="h6">CSS Baseline</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/css-baseline"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">CSS Baseline</Typography>
                    <Typography className="description">Material-UI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build
                        upon.</Typography>

                    <Typography className="mb-16" component="div">You might be familiar with <a href="https://github.com/necolas/normalize.css">normalize.css</a>, a collection of
                        HTML element and attribute style-normalizations.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}

export default MyApp;
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Approach</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Page</Typography>
                    <Typography className="mb-16" component="div">The <code>{`&lt;html&gt;`}</code> and <code>{`&lt;body&gt;`}</code> elements are updated to provide better
                        page-wide defaults. More specifically:</Typography>
                    <ul>
                        <li>The margin in all browsers is removed.</li>
                        <li>The default Material Design background color is applied.
                            It&#39;s using <a href="/customization/default-theme/?expend-path=$.palette.background"><code>{`theme.palette.background.default`}</code></a> for
                            standard devices and a white background for print devices.
                        </li>
                    </ul>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Layout</Typography>
                    <ul>
                        <li><code>{`box-sizing`}</code> is set globally on the <code>{`&lt;html&gt;`}</code> element to <code>{`border-box`}</code>.
                            Every element—including <code>{`*::before`}</code> and <code>{`*::after`}</code> are declared to inherit this property,
                            which ensures that the declared width of the element is never exceeded due to padding or border.
                        </li>
                    </ul>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Typography</Typography>
                    <ul>
                        <li>No base font-size is declared on the <code>{`&lt;html&gt;`}</code>, but 16px is assumed (the browser default).
                            You can learn more about the implications of changing the <code>{`&lt;html&gt;`}</code> default font size in <a
                                href="/customization/typography/#typography-html-font-size">the theme documentation</a> page.
                        </li>
                        <li>Set the <code>{`theme.typography.body2`}</code> style on the <code>{`&lt;body&gt;`}</code> element.</li>
                        <li>Set the font-weight to &quot;bolder&quot; for the <code>{`&lt;b&gt;`}</code> and <code>{`&lt;strong&gt;`}</code> elements.
                            Bolder is one font weight heavier than the parent element (among the available weights of the font).
                        </li>
                        <li>Font antialiasing is enabled for better display of the Roboto font.</li>
                    </ul>

                </div>
            }
        />

    );
}

export default CssBaselineDoc;
