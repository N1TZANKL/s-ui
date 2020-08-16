import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function ConfirmationPopup(props) {

    return <Dialog open={props.open}>
        <DialogTitle children={props.title} />
        <DialogContent>
            <DialogContentText children={props.description} />
        </DialogContent>
        <DialogActions>
            <Button onClick={props.onCancel} children={props.cancelButtonText} />
            <Button onClick={props.onConfirm} children={props.confirmButtonText} color="secondary" />
        </DialogActions>
    </Dialog>;
}

ConfirmationPopup.defaultProps = {
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
    title: "Confirm Action",
}

ConfirmationPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
};

export default ConfirmationPopup;