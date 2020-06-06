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

function ModalDoc(props)
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
                        <Typography variant="h6">Modal</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/modal"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Modal</Typography>
                    <Typography className="description">The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.</Typography>

                    <Typography className="mb-16" component="div">The component renders its <code>{`children`}</code> node in front of a backdrop component.
                        The <code>{`Modal`}</code> offers important features:</Typography>
                    <ul>
                        <li>💄 Manages modal stacking when one-at-a-time just isn&#39;t enough.</li>
                        <li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
                        <li>🔐 It disables scrolling of the page content while open.</li>
                        <li>♿️ It properly manages focus; moving to the modal content,
                            and keeping it there until the modal is closed.
                        </li>
                        <li>♿️ Adds the appropriate ARIA roles automatically.</li>
                        <li>📦 <a href="/size-snapshot">5 kB gzipped</a>.</li>
                    </ul>
                    <blockquote>
                        <Typography className="mb-16" component="div"><strong>Terminology note</strong>. The term &quot;modal&quot; is sometimes used to mean &quot;dialog&quot;,
                            but this is a misnomer.
                            A Modal window describes parts of a UI.
                            An element is considered modal if <a href="https://en.wikipedia.org/wiki/Modal_window">it blocks interaction with the rest of the
                                application</a>.</Typography>
                    </blockquote>
                    <Typography className="mb-16" component="div">If you are creating a modal dialog, you probably want to use the <a
                        href="/components/dialogs/">Dialog</a> component rather than directly using Modal.
                        Modal is a lower-level construct that is leveraged by the following components:</Typography>
                    <ul>
                        <li><a href="/components/dialogs/">Dialog</a></li>
                        <li><a href="/components/drawers/">Drawer</a></li>
                        <li><a href="/components/menus/">Menu</a></li>
                        <li><a href="/components/popover/">Popover</a></li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple modal</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/modal/SimpleModal.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/modal/SimpleModal.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Performance</Typography>
                    <Typography className="mb-16" component="div">The content of the modal is <strong>lazily mounted</strong> into the DOM.
                        It ensures that having many closed modal in your React tree won&#39;t slow down your page.</Typography>
                    <Typography className="mb-16" component="div">However, creating React elements has a cost too. Consider the following case:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Modal open={false}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Modal>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">We create a lot of React elements that will never be mounted. It&#39;s wasteful 🐢.
                        You can <strong>speed up</strong> the rendering by moving the modal body into its own component.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Modal open={false}>
  <TableComponent />
</Modal>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">This way, you take advantage of <a href="https://overreacted.io/react-as-a-ui-runtime/#lazy-evaluation">React
                        render laziness evaluation</a>.
                        The <code>{`TableComponent`}</code> render method will only be evaluated when opening the modal.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <ul>
                        <li>Be sure to add <code>{`aria-labelledby=&quot;id...&quot;`}</code>, referencing the modal title, to the <code>{`Modal`}</code>.
                            Additionally, you may give a description of your modal with the <code>{`aria-describedby=&quot;id...&quot;`}</code> property on
                            the <code>{`Modal`}</code>.
                        </li>
                    </ul>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
<Modal
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <Typography variant="h6" id="modal-title">
    My Title
  </Typography>
  <Typography variant="subtitle1" id="simple-modal-description">
    My Description
  </Typography>
</Modal>
`}
                    </FuseHighlight>
                    <ul>
                        <li>The <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html">WAI-ARIA Authoring Practices 1.1</a> can help you set the
                            initial focus on the most relevant element, based on your modal content.
                        </li>
                    </ul>

                </div>
            }
        />

    );
}

export default ModalDoc;
