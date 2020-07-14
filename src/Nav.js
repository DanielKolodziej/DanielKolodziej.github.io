import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, MenuList, Paper, Typography, IconButton, Grid, useMediaQuery } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';

import SvgIcon from '@material-ui/core/SvgIcon';
import { useInView } from 'react-intersection-observer';
const useStyles = makeStyles({
    background: {
      backgroundImage: 'linear-gradient( 180deg, #090909 25%, #545454 130%)',
      padding: '1em',
    },
    links: {
        color: '#fff',
        marginLeft: '1.5em',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'underline solid #00ffa8',
        },
    },
    menuBtn: {
        zIndex: 5,
        position: 'fixed',
        top: 0,
        right: 0,
      },
  });

const Nav = ({
    refSection1,
    refSection2,
    refSection3,
}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    const [ref, inView, entry] = useInView({threshold: 0.25,})

    const [menuVisible, setMenuVisible] = useState(false);
    const anchorRef = React.useRef(null);
    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    }
    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setMenuVisible(false);
      };

      const handleScroll = (e) => {
          console.log(e.target.innerText)
        //.current is verification that your element has rendered
          if(refSection1.current && e.target.innerText.toLowerCase() === 'projects'){
            refSection1.current.scrollIntoView({ 
                 behavior: "smooth", 
                 block: "nearest"
              })
          }
          else if(refSection2.current && e.target.innerText.toLowerCase() === 'skills'){
            refSection2.current.scrollIntoView({ 
                 behavior: "smooth", 
                 block: "nearest"
              })
          }
          else if(refSection3.current && e.target.innerText.toLowerCase() === 'about me'){
                refSection3.current.scrollIntoView({ 
                     behavior: "smooth", 
                     block: "nearest"
                  })
              }
        }
      // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(menuVisible);
  useEffect(() => {
    if (prevOpen.current === true && menuVisible === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = menuVisible;
  }, [menuVisible]);
    return (
         <>
            <Grid 
            ref={ref}
            container 
            className={classes.background} 
            justify="flex-end" 
            alignItems="center">
            <Grid item>
                <Typography onClick={(e) => handleScroll(e)} variant="button" component="a" className={classes.links}>
                    Projects
                </Typography> 
            </Grid>
            <Grid item>
                <Typography onClick={(e) => handleScroll(e)} variant="button" component="a" className={classes.links}>
                    Skills
                </Typography> 
            </Grid>
            <Grid item>
                <Typography onClick={(e) => handleScroll(e)} variant="button" component="a" className={classes.links}>
                    About Me
                </Typography> 
            </Grid>
        </Grid>
        {!inView ? (
            <>
                 <IconButton 
                 ref={anchorRef}
                 aria-controls={menuVisible ? 'menu-list-grow' : undefined}
                 aria-haspopup="true"
                 onClick={handleMenuToggle}
                 aria-label="menu" 
                 className={classes.menuBtn}
                 component="span">
                 {/* <MenuIcon fontSize='large' style={{color: 'red'}}/> */}
                 <SvgIcon style={{ fontSize: 35,}}>
                    <rect x="1" y="1" width="22" height="2" rx="5" style={{stroke: '#00ffa8', strokeWidth: 2}} />
                    <rect x="0" y="1" width="22" height="1" rx="2" style={{stroke: '#090909', strokeWidth: 2}} />
                    <rect x="1" y="8" width="22" height="2" rx="5" style={{stroke: '#00ffa8', strokeWidth: 2}} />
                    <rect x="0" y="8" width="22" height="1" rx="2" style={{stroke: '#090909', strokeWidth: 2}} />
                    <rect x="1" y="15" width="22" height="2" rx="5" style={{stroke: '#00ffa8', strokeWidth: 2}} />
                    <rect x="0" y="15" width="22" height="1" rx="2" style={{stroke: '#090909', strokeWidth: 2}} />
                </SvgIcon>
                </IconButton>
                <Popper open={menuVisible} style={{zIndex: '1'}} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                 {({ TransitionProps, placement }) => (
                   <Grow
                     {...TransitionProps}
                     style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                   >
                     <Paper>
                       <ClickAwayListener onClickAway={handleClose}>
                         <MenuList autoFocusItem={menuVisible} id="menu-list-grow">
                           <MenuItem onClick={(e) => handleScroll(e)}>Projects</MenuItem>
                           <MenuItem onClick={(e) => handleScroll(e)}>Skills</MenuItem>
                           <MenuItem onClick={(e) => handleScroll(e)}>About Me</MenuItem>
                         </MenuList>
                       </ClickAwayListener>
                     </Paper>
                   </Grow>
                 )}
                </Popper>
            </>
        ): null}
    </>
    );
}

export default Nav;