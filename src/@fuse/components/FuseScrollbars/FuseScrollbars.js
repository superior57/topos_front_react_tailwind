import React, {createRef, useEffect, useRef, useCallback} from 'react';
import {makeStyles} from '@material-ui/styles';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import {connect} from 'react-redux';
import MobileDetect from 'mobile-detect';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const handlerNameByEvent = {
    'ps-scroll-y'     : 'onScrollY',
    'ps-scroll-x'     : 'onScrollX',
    'ps-scroll-up'    : 'onScrollUp',
    'ps-scroll-down'  : 'onScrollDown',
    'ps-scroll-left'  : 'onScrollLeft',
    'ps-scroll-right' : 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end'  : 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end'  : 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

const useStyles = makeStyles(theme => ({
    root: {}
}));

const FuseScrollbars = React.forwardRef(function FuseScrollbars(props, ref) {
    ref = ref || createRef();
    const ps = useRef(null);
    const handlerByEvent = useRef(new Map());
    const classes = useStyles();
    const {customScrollbars} = props;

    const hookUpEvents = useCallback(() => {
        Object.keys(handlerNameByEvent).forEach((key) => {
            const callback = props[handlerNameByEvent[key]];
            if ( callback )
            {
                const handler = () => callback(ref.current);
                handlerByEvent.current.set(key, handler);
                ref.current.addEventListener(key, handler, false);
            }
        });
        // eslint-disable-next-line
    }, [ref]);

    const unHookUpEvents = useCallback(() => {
        Object.keys(handlerByEvent.current).forEach((value, key) => {
            if(ref.current){
                ref.current.removeEventListener(key, value, false);
            }
        });
        handlerByEvent.current.clear();
    }, [ref]);

    const destroyPs = useCallback(() => {
        // console.info("destroy::ps");

        unHookUpEvents();

        if ( !ps.current )
        {
            return;
        }
        ps.current.destroy();
        ps.current = null;
    }, [unHookUpEvents]);

    const createPs = useCallback(() => {
        // console.info("create::ps");

        if ( isMobile || !ref || ps.current )
        {
            return;
        }

        ps.current = new PerfectScrollbar(ref.current, props.option);

        hookUpEvents();
    }, [hookUpEvents, props.option, ref]);

    useEffect(() => {

        function updatePs()
        {
            if ( !ps.current )
            {
                return;
            }
            ps.current.update();
        }

        updatePs();
    });

    useEffect(() => {
        customScrollbars ? createPs() : destroyPs();
    }, [createPs, customScrollbars, destroyPs]);

    useEffect(() => {
        function scrollToTop()
        {
            ref.current.scrollTop = 0;
        }

        if ( props.scrollToTopOnChildChange )
        {
            scrollToTop();
        }
    }, [props.children, props.scrollToTopOnChildChange, ref]);

    useEffect(() => {
        return () => {
            destroyPs();
        }
    }, [destroyPs]);

    // console.info('render::ps');
    return (
        <div
            id={props.id}
            className={clsx(classes.root, props.className)}
            style={
                (props.customScrollbars && (props.enable || true) && !isMobile) ?
                    {
                        position: 'relative',
                        overflow: 'hidden'
                    } : {}
            }
            ref={ref}
        >
            {props.children}
        </div>
    );
});

function mapStateToProps({fuse})
{
    return {
        customScrollbars: fuse.settings.current.customScrollbars
    }
}

FuseScrollbars.propTypes = {
    onScrollY               : PropTypes.func,
    onScrollX               : PropTypes.func,
    onScrollUp              : PropTypes.func,
    onScrollDown            : PropTypes.func,
    onScrollLeft            : PropTypes.func,
    onScrollRight           : PropTypes.func,
    onYReachStart           : PropTypes.func,
    onYReachEnd             : PropTypes.func,
    onXReachStart           : PropTypes.func,
    onXReachEnd             : PropTypes.func,
    scrollToTopOnChildChange: PropTypes.bool,
};

FuseScrollbars.defaultProps = {
    className               : '',
    enable                  : true,
    scrollToTopOnChildChange: false,
    option                  : {
        wheelPropagation: true
    },
    ref                     : undefined,
    onScrollY               : undefined,
    onScrollX               : undefined,
    onScrollUp              : undefined,
    onScrollDown            : undefined,
    onScrollLeft            : undefined,
    onScrollRight           : undefined,
    onYReachStart           : undefined,
    onYReachEnd             : undefined,
    onXReachStart           : undefined,
    onXReachEnd             : undefined
};

export default connect(mapStateToProps, null, null, {forwardRef: true})(React.memo(FuseScrollbars));
