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

function CardsDoc(props)
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
                        <Typography variant="h6">Cards</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/cards"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Cards</Typography>
                    <Typography className="description">Cards contain content and actions about a single subject.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/cards.html">Cards</a> are surfaces that display content and actions
                        on a single topic.</Typography>
                    <Typography className="mb-16" component="div">They should be easy to scan for relevant and actionable information. Elements, like text and images, should be
                        placed on them in a way that clearly indicates hierarchy.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Card</Typography>
                    <Typography className="mb-16" component="div">Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that
                        cards are entry points to more complex and detailed information.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/cards/SimpleCard.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/SimpleCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complex Interaction</Typography>
                    <Typography className="mb-16" component="div">On desktop, card content can expand.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Media</Typography>
                    <Typography className="mb-16" component="div">Example of a card using an image to reinforce the content.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/cards/MediaCard.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaCard.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">By default, we use the combination of a <code>{`&lt;div&gt;`}</code> element and a <em>background image</em> to
                        display the media. It can be problematic in some situations. For instance, you might want to display a video or a responsive image. Use
                        the <code>{`component`}</code> property for these use cases:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js')}
                    /></Typography>
                    <blockquote>
                        <Typography className="mb-16" component="div">⚠️ When <code>{`component=&quot;img&quot;`}</code>, CardMedia relies on <code>{`object-fit`}</code> for
                            centering the image. It&#39;s not supported by IE 11.</Typography>
                    </blockquote>
                    <Typography className="text-32 mt-32 mb-8" component="h2">UI Controls</Typography>
                    <Typography className="mb-16" component="div">Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically
                        placed at the bottom of the card.</Typography>
                    <Typography className="mb-16" component="div">Here&#39;s an example of a media control card.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/cards/MediaControlCard.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaControlCard.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default CardsDoc;
