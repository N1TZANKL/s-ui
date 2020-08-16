import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiStepper from "@material-ui/core/Stepper";
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
    stepper: {
        backgroundColor: theme.palette.type === "dark" ? grey[700] : grey[100],
        borderBottom: `1px solid ${theme.palette.type === "dark" ? grey[500] : grey[300]}`,
    }
});

function Stepper(props) {

    const { classes, steps, activeStep, ...otherProps } = props;

    return <MuiStepper activeStep={activeStep} classes={{root: classes.stepper}} color="secondary" {...otherProps}>
        {steps.map((label) => <Step key={label}>
            <StepLabel children={label} />
        </Step>)}
    </MuiStepper>;
}

Stepper.propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired
};

export default withStyles(styles)(Stepper);