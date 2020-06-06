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

function LinksDoc(props)
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
                        <Typography variant="h6">Links</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/links"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Links</Typography>
                    <Typography className="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple links</Typography>
                    <Typography className="mb-16" component="div">The Link component is built on top of the <a href="/api/typography/">Typography</a> component.
                        You can leverage its properties.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/links/Links.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/Links.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">However, the Link component has different default properties than the Typography component:</Typography>
                    <ul>
                        <li><code>{`color=&quot;primary&quot;`}</code> as the link needs to stand out.</li>
                        <li><code>{`variant=&quot;inherit&quot;`}</code> as the link will, most of the time, be used as a child of a Typography component.</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <ul>
                        <li>When providing the content for the link, avoid generic descriptions like &quot;click here&quot; or &quot;go to&quot;.
                            Instead, use <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">specific descriptions</a>.
                        </li>
                        <li>For the best user experience, links should stand out from the text on the page.</li>
                        <li>If a link doesn&#39;t have a meaningful href, <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">it
                            should be rendered using a <code>{`&lt;button&gt;`}</code> element</a>.
                        </li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/links/ButtonLink.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/ButtonLink.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Security</Typography>
                    <Typography className="mb-16" component="div">When you use <code>{`target=&quot;_blank&quot;`}</code> with Links, it is <a
                        href="https://developers.google.com/web/tools/lighthouse/audits/noopener">recommended</a> to always
                        set <code>{`rel=&quot;noopener&quot;`}</code> or <code>{`rel=&quot;noreferrer&quot;`}</code> when linking to third party content.</Typography>
                    <ul>
                        <li><code>{`rel=&quot;noopener&quot;`}</code> prevents the new page from being able to access the <code>{`window.opener`}</code> property and ensures it
                            runs in a separate process.
                            Without this, the target page can potentially redirect your page to a malicious URL.
                        </li>
                        <li><code>{`rel=&quot;noreferrer&quot;`}</code> has the same effect, but also prevents the <em>Referer</em> header from being sent to the new page.
                            ⚠️ Removing the referrer header will affect analytics.
                        </li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Third-party routing library</Typography>
                    <Typography className="mb-16" component="div">One common use case is to perform the navigation on the client only, without doing a .html round-trip with the
                        server. The <code>{`Link`}</code> component provides a property to handle this use case: <code>{`component`}</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/links/LinkRouter.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/links/LinkRouter.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div"><em>Note: Creating the Link components is necessary to prevent unexpected unmounting.
                        You can read more about it in our <a href="/guides/composition/#component-property">component property guide</a>.</em></Typography>

                </div>
            }
        />

    );
}

export default LinksDoc;
