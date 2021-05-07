import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function DialogCart({addItemToCart, product, open, setOpen, setQuantityCard}) {
  const classes = useStyles();
  const [quantify, setQuantify] = useState('0');
  const [openDialog, setOpenDialog] = useState(open)

  useEffect(() => {
    setOpenDialog(open)
  },[open])

  const handleClose = () => {
    addItemToCart(product, Number(quantify))
    setQuantityCard(Number(quantify))
    setOpenDialog(false)
  };

  const handleQuantifyProduct = (event) => {    
    setQuantify(event.target.value);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
      >
        <DialogContent>
          <DialogContentText color='black'>
            Selecione a quantidade desejada
          </DialogContentText>
            <FormControl className={classes.formControl}>
              <Select
                autoFocus
                value={quantify}
                onChange={handleQuantifyProduct}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Adicionar ao carrinho
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}