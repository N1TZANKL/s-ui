import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SvgIcon from "@material-ui/core/SvgIcon";
import DefaultIcon from "@material-ui/icons/CheckBoxOutlineBlankTwoTone";
import CheckedIcon from "@material-ui/icons/CheckBoxTwoTone";

const styles = (theme) => ({
    formControl: { width: "fit-content" },
    icon: { fontSize: 20 },
    bigIcon: { fontSize: 24 },
    bigCheckboxLabel: { fontSize: 20 },
});

function Checkbox(props) {
    const { classes, label, formControlLabelProps, big, ...otherProps } = props;

    return (
        <FormControlLabel
            {...formControlLabelProps}
            className={classes.formControl}
            classes={big ? { label: classes.bigCheckboxLabel } : undefined}
            label={label}
            control={
                <MuiCheckbox
                    color="secondary"
                    {...otherProps}
                    icon={<SvgIcon children={<DefaultIcon />} className={big ? classes.bigIcon : classes.icon} />}
                    checkedIcon={<SvgIcon children={<CheckedIcon />} className={big ? classes.bigIcon : classes.icon} />}
                />
            }
        />
    );
}

Checkbox.defaultProps = {
    formControlLabelProps: {},
};

Checkbox.propTypes = {
    ...Checkbox.propTypes,
    label: PropTypes.string.isRequired,
    formControlLabelProps: PropTypes.object,
    big: PropTypes.bool,
};

export default withStyles(styles)(Checkbox);
