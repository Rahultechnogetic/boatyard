import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: theme.palette.primary.main
  },
  pageTitle: {
    paddingLeft: theme.spacing(4)
  },
  title: {
    fontWeight: 500
  }
}));

interface FormHeaderProps {
  title: string;
  icon: any;
}
export default function FormHeader(props: FormHeaderProps) {
  const classes = useStyles();
  const { title, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant='h3' component='div' className='title'>
            {title}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
