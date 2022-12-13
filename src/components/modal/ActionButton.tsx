import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5)
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main
    }
  }
}));

interface ActionButtonProps {
  color: string;
  children: any;
  onClick: () => void;
}

export default function ActionButton(props: ActionButtonProps) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root}`} onClick={onClick}>
      {children}
    </Button>
  );
}
