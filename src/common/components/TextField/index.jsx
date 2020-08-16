import React from "react";
import PropTypes from "prop-types";
import MuiTextField from "@material-ui/core/TextField";

function TextField(props) {
    const { errorMessage, ...otherProps } = props;

    return <MuiTextField fullWidth {...otherProps} error={!!errorMessage} helperText={errorMessage || props.helperText} />;
}

TextField.propTypes = {
    ...MuiTextField.propTypes,
    errorMessage: PropTypes.string,
};

export default TextField;
