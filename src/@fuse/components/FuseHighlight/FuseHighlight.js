import React, {useEffect, useRef} from 'react';
import * as Prism from 'prismjs';
import './prism-languages';
import PropTypes from 'prop-types';

function FuseHighlight(props)
{
    const domNode = useRef(null);
    const source = useRef(trimCode());

    useEffect(() => {
        function highlight()
        {
            Prism.highlightElement(domNode.current, props.async)
        }

        highlight();
    }, [props.async]);

    function trimCode()
    {
        // Split the source into lines
        const sourceLines = props.children.split('\n');

        // Remove the first and the last line of the source
        // code if they are blank lines. This way, the html
        // can be formatted properly while using fuse-highlight
        // component
        if ( !sourceLines[0].trim() )
        {
            sourceLines.shift();
        }

        if ( !sourceLines[sourceLines.length - 1].trim() )
        {
            sourceLines.pop();
        }

        // Find the first non-whitespace char index in
        // the first line of the source code
        const indexOfFirstChar = sourceLines[0].search(/\S|$/);

        // Generate the trimmed source
        let sourceRaw = '';

        // Iterate through all the lines
        sourceLines.forEach((line, index) => {

            // Trim the beginning white space depending on the index
            // and concat the source code
            sourceRaw = sourceRaw + line.substr(indexOfFirstChar, line.length);

            // If it's not the last line...
            if ( index !== sourceLines.length - 1 )
            {
                // Add a line break at the end
                sourceRaw = sourceRaw + '\n';
            }
        });
        return sourceRaw;
    }

    const {className, component: Wrapper} = props;

    return (
        <Wrapper ref={domNode} className={className}>
            {source.current}
        </Wrapper>
    )
}

FuseHighlight.propTypes = {
    component: PropTypes.node
};
FuseHighlight.defaultProps = {
    component: `code`
};

export default React.memo(FuseHighlight);
