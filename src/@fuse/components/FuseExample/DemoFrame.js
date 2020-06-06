import React from 'react';
import {create} from 'jss';
import jssExtend from 'jss-extend';
import Frame from 'react-frame-component';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {StylesProvider, jssPreset, ThemeProvider, createGenerateClassName} from '@material-ui/styles';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        flexGrow       : 1,
        height         : 400,
        border         : 'none',
        boxShadow      : theme.shadows[1]
    }
});

const generateClassName = createGenerateClassName({
    productionPrefix: 'iframe-'
});

class DemoFrame extends React.Component {

    state = {
        ready: false
    };

    handleRef = ref => {
        this.contentDocument = ref ? ref.node.contentDocument : null;
    };

    onContentDidMount = () => {
        this.setState({
            ready        : true,
            jss          : create({
                ...jssPreset(),
                plugins       : [...jssPreset().plugins, jssExtend()],
                insertionPoint: this.contentDocument.querySelector('#jss-demo-insertion-point')
            }),
            sheetsManager: new Map(),
            container    : this.contentDocument.body
        });
    };

    onContentDidUpdate = () => {
        this.contentDocument.body.dir = this.props.theme.direction;
    };

    renderHead = () => {
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    html {
                    font-size: 62.5%;
                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;
                    }
                `
                }}
                />
                <noscript id="jss-demo-insertion-point"/>
            </React.Fragment>
        )
    };

    render()
    {
        const {children, classes, theme} = this.props;

        return (
            <Frame
                head={this.renderHead()}
                ref={this.handleRef}
                className={classes.root}
                contentDidMount={this.onContentDidMount}
                contentDidUpdate={this.onContentDidUpdate}
            >
                {this.state.ready ? (
                    <StylesProvider
                        jss={this.state.jss}
                        generateClassName={generateClassName}
                        sheetsManager={this.state.sheetsManager}
                    >
                        <ThemeProvider theme={theme}>
                            {React.cloneElement(children, {
                                container: this.state.container
                            })}
                        </ThemeProvider>
                    </StylesProvider>
                ) : null}
            </Frame>
        );
    }
}

DemoFrame.propTypes = {
    children: PropTypes.node.isRequired,
    classes : PropTypes.object.isRequired,
    theme   : PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(DemoFrame);
