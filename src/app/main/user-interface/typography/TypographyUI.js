import React from 'react';
import {Button, Card, CardContent, Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple, FuseAnimate} from '@fuse';

function TypographyUI()
{
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">

                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">User Interface</Typography>
                        </div>
                        <Typography variant="h6">Typography</Typography>
                    </div>

                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/style/typography/"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                        <Card>
                            <CardContent>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h1">
                                            Display 4
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography variant="h1">Display 4</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h2">
                                            Display 3
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography variant="h2">Display 3</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h3">
                                            Display 2
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography variant="h3">Display 2</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h4">
                                            Display 1
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography variant="h4">Display 1</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h5">
                                            Headline
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                          <Typography variant="h5">Headline</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="h6">Title</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography variant="h6">Title</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="subtitle1">Subheading</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                             <Typography variant="subtitle1">Subheading</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="body1">Body 2</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                            <Typography variant="body1">Body 2</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="body2">Body 1</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                            <Typography variant="body2">Body 1</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="caption">Caption</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                            <Typography variant="caption">Caption</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography gutterBottom
                                                    noWrap>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                           <Typography noWrap>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-16">
                                    <div className="flex w-full sm:w-1/2">
                                        <Typography variant="button">Button</Typography>
                                    </div>
                                    <div className="flex w-full sm:w-1/2">
                                        <FuseHighlight component="pre" className="language-html w-full">
                                            {`
                                             <Typography variant="button">Button</Typography>
                                        `}
                                        </FuseHighlight>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            }
        />
    );
}

export default TypographyUI;
