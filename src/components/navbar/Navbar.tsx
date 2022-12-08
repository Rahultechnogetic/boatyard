// import React from 'react';
// import { Toolbar, IconButton, Typography } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';

// interface NavabarProps {
//   setOpen: (open: boolean) => void;
//   open: boolean;
//   AppBar: JSX.Element;
// }

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open'
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   })
// }));

// const Navbar = ({ setOpen, open, AppBar }: NavabarProps) => {
//   return (
//     <AppBar position='fixed'>
//       <Toolbar>
//         <IconButton
//           color='inherit'
//           aria-label='open drawer'
//           onClick={() => setOpen(!open)}
//           edge='start'
//           sx={{
//             marginRight: 5
//           }}
//         >
//           {open ? <CloseIcon /> : <MenuIcon />}
//         </IconButton>
//         <Typography variant='h6' noWrap component='div'>
//           boatYard
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
