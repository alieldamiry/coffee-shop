import { makeStyles, Link, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import green from '@material-ui/core/colors/green';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  },
  paper: {
    position: 'absolute',
    maxWidth: 400,
    color: '#fff',
    margin: '0 1rem',
    backgroundColor: '#0d0d0d',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
  },
}));

export default function SimpleModal({ open, success, error }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        className={classes.modal}
      >
        <div className={classes.paper}>

          {success
          && (
          <>
            <CheckCircleOutlinedIcon style={{ fontSize: '8rem', color: green[700] }} />
            <h3>Your order has been submitted successfully</h3>
          </>
          )}
          {error
          && (
          <>
            <CloseIcon color="secondary" style={{ fontSize: '8rem' }} />
            <h3>Something went wrong!</h3>
          </>
          )}
          <div>
            <Link component={RouterLink} to="/shop">
              <Button color="primary" variant="contained" fullWidth>
                Continue Shopping
              </Button>
            </Link>
            <Link component={RouterLink} to="/">
              <Button color="primary" variant="outlined" fullWidth>
                Back to home page
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}
