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
  children: React.ReactNode;
  onClick: () => void;
}

export default function ActionButton(props: ActionButtonProps) {
  const { children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root}`} onClick={onClick}>
      {children}
    </Button>
  );
}
