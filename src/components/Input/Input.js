import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields({label, placeholder}) {
  const classes = useStyles();

  return (
      <div>
        <TextField
          id="outlined-helperText"
          label={label}
          placeholder={placeholder}
          variant="outlined"
          required
        />
      </div>
    )
}