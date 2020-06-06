import React, {useEffect, useRef, useState} from 'react';
import {Typography, Card, Input, MenuItem, Select, FormControl, InputLabel, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, FuseHighlight, FusePageSimple} from '@fuse';

const EFFECTS = [
    'fade',
    'flipX',
    'flipY',
    'flipBounceX',
    'flipBounceY',
    'swoop',
    'whirl',
    'shrink',
    'expand',
    'bounce',
    'bounceUp',
    'bounceDown',
    'bounceLeft',
    'bounceRight',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
    'slideUpBig',
    'slideDownBig',
    'slideLeftBig',
    'slideRightBig',
    'perspectiveUp',
    'perspectiveDown',
    'perspectiveLeft',
    'perspectiveRight'
];

const initialAnimation = {
    translateX: [0, '100%'],
    opacity   : [1, 0]
};

const useStyles = makeStyles({
    layoutRoot: {},
    box       : {
        width         : 128,
        height        : 128,
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'center',
        textAlign     : 'center',
        padding       : 16
    }
});

function FuseAnimateDoc()
{
    const classes = useStyles();
    const [selectedEffect, setSelectedEffect] = useState('fade');
    const [customAnimation, setCustomAnimation] = useState(initialAnimation);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current =
            setInterval(() => {
                setCustomAnimation(Boolean(customAnimation) ? null : initialAnimation);
            }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    function handleChange(event)
    {
        setSelectedEffect(event.target.value);
    }

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
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseAnimate</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseAnimate</code> is a container component which
                        uses <code>VelocityComponent</code> of <code>velocity-react</code> library.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Predefined Effects Usage</Typography>

                    <Typography className="mb-16" component="p">
                        You can use predefined animation effects.
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
                                <FuseAnimate
                                    animation="transition.${selectedEffect}In"
                                    duration={400}
                                    delay={400}
                                >
                                     <Card className={classes.box}>
                                        <Typography>
                                        {selectedEffect}
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
                    </FuseHighlight>

                    <div className="flex flex-wrap p-48">

                        <div className="flex w-full sm:w-1/2 p-24 justify-center">
                            <FormControl className="w-256">
                                <InputLabel htmlFor="effect-helper">Select Effect</InputLabel>
                                <Select
                                    value={selectedEffect}
                                    onChange={handleChange}
                                    input={<Input name="effect" id="effect-helper"/>}
                                >
                                    {
                                        EFFECTS.map((effect) => (
                                            <MenuItem key={effect} value={effect}>
                                                transition.{effect}In
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className="flex w-full sm:w-1/2 items-center justify-center">
                            <FuseAnimate
                                animation={selectedEffect && 'transition.' + selectedEffect + 'In'}
                                duration={400}
                                delay={400}
                            >
                                <Card className={classes.box}>
                                    <Typography>
                                        {selectedEffect}
                                    </Typography>
                                </Card>
                            </FuseAnimate>
                        </div>
                    </div>

                    <Typography className="mt-32 mb-8" variant="h5">Custom Effects Usage</Typography>

                    <Typography className="mb-16" component="p">
                        You can create custom effects.
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
                                <FuseAnimate
                                    animation={{
                                        translateX: [0, '100%'],
                                        opacity   : [1, 0]
                                    }}
                                    duration={400}
                                    delay={400}
                                >
                                    <Card className={classes.box}>
                                        <Typography>
                                            Slide left and fade in
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
                    </FuseHighlight>

                    <div className="p-24 flex items-center justify-center">
                        <FuseAnimate
                            animation={customAnimation}
                            duration={400}
                            delay={400}
                        >
                            <Card className={classes.box}>
                                <Typography>
                                    Slide left and fade in
                                </Typography>
                            </Card>
                        </FuseAnimate>
                    </div>

                    <Typography className="mb-16" component="p">
                        For more information checkout the
                        <a href="https://github.com/google-fabric/velocity-react" target="_blank" rel="noopener noreferrer" className="ml-8 font-bold">velocity-react</a>.
                    </Typography>

                </div>
            }
        />
    );
}

export default FuseAnimateDoc;
