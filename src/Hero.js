import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import {useSpring, animated} from 'react-spring'
// import meIMG from './images/me.jpg';
import meSmIMG from './images/Daniel.jpg';
import portraitIMG from './images/dk.jpg';
import portraitIMG2 from './images/dkFilter.jpg';
import portraitIMG3 from './images/dkFilter2.jpg';

const useStyles = makeStyles({
    background: {
        padding: '2em 1em',
        height: 'calc(100vh - 56px)',
        minHeight: '450px',
        overflow: 'hidden',
    },
    upper: {
        fontSize: '8em',
    },
    lower: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: '8em',
    },
    graphic: {
        position: 'absolute',
        top: 56,
        left: 0,
    },
    graphicText: {
        fontSize: '4px',
        fill: '#fff'
    },
    imgContainer: {
        height: 'calc(100% - 56px)', 
        width: "33%", 
        backgroundImage:
                    `linear-gradient(
                     rgba(0, 0, 0, 0.45), 
                     rgba(0, 0, 0, 0.45)
                    ),
                    url(${portraitIMG3})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 35%',
        backgroundSize: 'cover',
        zIndex: -1, 
        position: "absolute", 
        bottom: '-1px', 
        left: 0,
    },
    imgContainerMobile: {
        height: 'calc(100% - 56px)', 
        width: '100%',
        backgroundImage:
                    `linear-gradient(
                     rgba(0, 0, 0, 0.45), 
                     rgba(0, 0, 0, 0.45)
                    ),
                    url(${portraitIMG3})`,
                    // url(${portraitIMG})`,
                    // url(${portraitIMG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1, 
        position: "absolute", 
        bottom: '-1px', 
        left: 0,
    },
    // subtitle: {
    //     transform: 'rotate(60deg)'
    // },
  });

const Hero = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    const isMedium = useMediaQuery('(max-width: 1100px)');
    let polyPoints= "33,100 0,0 66,0";
    let polyPointsMobile= "100,100 0,0 100,0";
    const AnimatedTypography = animated(Typography)

    const translateMobile = useSpring({
        to: [{ transform: isMobile ? 'translate3d(-500px,0px,0)' : 'translate3d(500px,0px,0)'}, { transform: 'translate3d(0px,0px,0px)'},],
        from: { transform: 'translate3d(0px,0px,0px)'},
        config: [{ duration: 1800}, {duration: 1000}]
      })
    const zVal = useSpring({
        to: { zIndex: -1},
        from: { zIndex: 1},
        config: { duration: 2000},
      })
    // const translateTextMobile = useSpring({
    //     to: { transform: "translate(0px, 0px) rotate(45deg)"},
    //     from: { transform: "translate(-5px, -55px) rotate(45deg)"},
    //     config: {duration: 1000}
    //   })
    return (
        <Grid 
            container 
            className={classes.background} 
            direction="column"
            justify={isMobile ? "flex-start" : "center"}
            alignItems="flex-end"
            >
                <div className={isMobile ? classes.imgContainerMobile : classes.imgContainer}>

                </div>
            <animated.svg 
                height="100%" 
                width="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className={classes.graphic} 
                style={zVal}
                >
            <defs>
              <linearGradient id="grad" cx="75%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor:'#00c480',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#00ffa8',stopOpacity:1}} />
              </linearGradient>
            </defs>
            <defs>
                <pattern id="me" x="0" y="0" width="100%" height="100%" style={{backgroundPosition: 'left bottom'}}>
                    <image href={portraitIMG} alt="Daniel Kolodziej" width="33" height="50" preserveAspectRatio="none" style={{backgroundPosition: 'left bottom'}}/>
                </pattern>
            </defs>
            <defs>
                <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
                    <rect x="0" y="0" width="10" height="5"/>
                </pattern>
            </defs>
            {/* {
                !isMobile? (
                    <polygon points="0,0 0,100 33,100" style={{fill: 'url(#me)', backgroundPosition: 'left bottom'}}/>
                    ) : null
            } */}
            <polygon points={isMobile ? polyPointsMobile : polyPoints} style={{strokeWidth:0,fill: 'url(#grad)', zIndex: 10}} />
            {
                !isMobile? (
                    <polygon 
                        points="20,60 0,0 40,0"
                        style={{fill: "url('#star')"}}
                    />
                ) : null
            }
            {
                !isMobile? null : 
                <animated.text 
                    className={classes.graphicText} 
                    // x={isMobile? "67" : "2"} 
                    // y={isMobile? "25" : "15"} 
                    // transform={isMobile? "rotate(45 21,30)" : "rotate(72 2,20)"}
                    x="67" 
                    y="25"
                    transform="rotate(45 21,30)"
                    // style={{fontSize: !isMobile ? "4px" : "3px"}}
                    >Design. Develop. Deploy.</animated.text>
            }
            </animated.svg>
            <Grid item>
                <AnimatedTypography variant="h1" component="h1" className={classes.upper} 
                style={translateMobile}
                >
                    {isMobile ? 'DAN' : 'DANIEL'}
                </AnimatedTypography> 
            </Grid>
            <Grid item> 
                <AnimatedTypography variant="h1" component="h1" className={classes.lower} 
                style={translateMobile}
                >
                    {isMobile ? 'KOLO' : 'KOLODZIEJ'}
                </AnimatedTypography> 
            </Grid>
            {
                !isMobile? (
                    <Grid item> 
                        <Typography variant="h3" component="h3">
                            Design. Develop. Deploy.
                        </Typography> 
                    </Grid>
                ) : null
            }
            {/* {
                isMobile? (
                    <Grid item style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0, 
                        margin: '0 0 3em 1em', 
                        backgroundImage: `url(${meSmIMG})`,
                        backgroundSize: 'cover',
                        height: '150px',
                        width: '150px',
                        borderRadius: '50%'}}>
                    </Grid>
                ) : null
            } */}
        </Grid>
    );
}

export default Hero;