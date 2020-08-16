import React, { useState } from "react";
import TextField from "../TextField";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";

function SensitiveTextField(props) {
    const [showInput, setInputVisibility] = useState(false);

    return (
        <TextField
            {...props}
            type={showInput ? "text" : "password"}
            inputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setInputVisibility((state) => !state)} style={{ padding: 5 }}>
                            {showInput ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

SensitiveTextField.propTypes = { ...TextField.propTypes };
delete SensitiveTextField.propTypes.type;

export default SensitiveTextField;
