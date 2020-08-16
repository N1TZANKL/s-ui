import React from "react";
import PropTypes from "prop-types";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

// TODO: Check this works as expected + allow empty value?

function Select(props) {
    const { selectionList, label, helperText, errorMessage, value, ...otherProps } = props;

    return (
        <FormControl fullWidth>
            <InputLabel shrink={!!label} children={label} />
            <MuiSelect
                {...otherProps}
                value={value || ""}
                displayEmpty
                renderValue={(val) => (val ? selectionList.find((item) => item.value === val).label : "(Select)")}
            >
                {selectionList.map((item) => (
                    <MenuItem key={JSON.stringify(item.value)} value={item.value} children={item.label} disabled={item.disabled} />
                ))}
            </MuiSelect>
            {helperText ||
                (errorMessage && (
                    <FormHelperText error={!!errorMessage} component="legend" style={{ marginTop: -5, marginBottom: 3 }}>
                        {errorMessage || helperText}
                    </FormHelperText>
                ))}
        </FormControl>
    );
}

Select.propTypes = {
    ...MuiSelect.propTypes,
    selectionList: PropTypes.array.isRequired, //[{label: string, value: any, disabled?: bool}]
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    errorMessage: PropTypes.string,
};

export default Select;
