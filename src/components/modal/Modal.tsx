import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ActionButton from './ActionButton';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    position: 'absolute',
    top: theme.spacing(5),
    width: '50%'
  },
  dialogTitle: {}
}));

interface ModalProps {
  title: string;
  children: React.ReactNode;
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
}

const Modal = (props: ModalProps) => {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup} maxWidth='xl' classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h4' component='div'>
            {title}
          </Typography>
          <ActionButton
            color='secondary'
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
