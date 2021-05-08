import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {DialogQuantity} from './Styled'
import GlobalStateContext from "../../global/GlobalStateContext";

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
    maxWidth: 500,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function DialogCart({open, setOpen, id, addItemCart}) {
  const classes = useStyles();
  const { cart, setCart } = useContext(GlobalStateContext)
  const [quantity, setQuantity] = useState('0');

  const handleClose = () => {
    addItemCart(quantity)
    setOpen(false)
    const newCart = [...cart]
    quantity != 0 && newCart.push({quantity: quantity, id: id})
 
  };

  const handleQuantityProduct = (event) => {    
    setQuantity(event.target.value);
  };

  return (
    <React.Fragment>
      <DialogQuantity
        open={open}
      >
        <DialogContent>
          <DialogContentText color='black'>
            Selecione a quantidade desejada
          </DialogContentText>
            <FormControl className={classes.formControl}>
              <Select
                autoFocus
                value={quantity}
                onChange={handleQuantityProduct}
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
      </DialogQuantity>
    </React.Fragment>
  );
}