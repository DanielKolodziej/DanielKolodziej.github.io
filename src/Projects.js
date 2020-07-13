import React, {useState} from 'react';
import projIMG from './images/DashMobile.PNG';
import projIMG2 from './images/messengerApp.PNG';
import projIMG3 from './images/databaseIT.PNG';
import projIMG4 from './images/jobApplications.PNG';
import projIMG5 from './images/weatherApp.PNG';
import projIMG6 from './images/noteApp.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, IconButton, useMediaQuery } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const useStyles = makeStyles({
    background: {
        padding: '2em',
        minHeight: '100vh',
        backgroundColor: '#090909',
        color: '#fff',
        '& > div > div > div': {
            marginBottom: '1.5em',
          },
    },
    title:{
        backgroundColor: '#00ffa8',
    },
    button: {
        textDecoration: 'none',
        backgroundColor: '#00ffa8',
        padding: '0.75em',
        color: '#090909',
        borderRadius: 3,
    },
    carouselContainer: {
        width: '80%',
        maxWidth: '480px',
        margin: '1em auto 1em auto',
        '& > div':{
          borderBottom: '4px solid #00ffa8',
          borderRight: '4px solid #00ffa8',
        },
        '& .carousel-slider':{
        overflow: 'visible',
        '& .control-dots':{
            bottom: '-40px'
        }
        }
      },
  });

const Projects = ({
    refSection1
}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 844px)');
    const [count, setCount] = useState(0);
    const projectsArr = [
        {
            img: projIMG,
            title: "SimplyFit",
            desc: "This is a fitness tracker app with user authentication.  Users have the ability to log and view workout data, search past logs of themselves or others, and track bodyweight. Built using React and Firebase",
            live: "http://simply-fit.dkolodz1.vercel.app",
        },
        {
            img: projIMG2,
            title: "Message App",
            desc: "This is a message commucication web app.  Users can log in to view, create, and delete messages between themselves and any other user.  Built using React and Firebase",
            repo: "https://github.com/DanielKolodziej/messengerApp",
        },
        {
            img: projIMG3,
            title: "Help Desk Glossary",
            desc: "This is a help desk glossary intended for use by either IT staff or general users.  Users can log in and depending on their status can potentially view, edit, create, and delete instructional posts dealing with various IT issues. Built using React, Node/Express, MongoDB.",
            repo: "https://github.com/DanielKolodziej/iDatabaseIT",
        },
        {
            img: projIMG4,
            title: "Job Applications",
            desc: "This is a job application tracking web app.  You can view, add, edit, delete, and search through job listings you've applied for.  Built using Javascript, HTML, CSS/SASS, localstorage",
            repo: "https://github.com/DanielKolodziej/jobApplications",
        },
        {
            img: projIMG5,
            title: "Weather Search",
            desc: "This is a weather search web app that allows you enter any city name in order to retrieve a detailed weather report over the course of the new fews days of that city.  Built using React.",
            repo: "https://github.com/DanielKolodziej/weather_app",
        },
        {
            img: projIMG6,
            title: "Note Taker",
            desc: "This is a little note taking application that allows you to add, edit, and delete notes that you have created. Built using React",
            repo: "https://github.com/DanielKolodziej/evernoteApp",
        },
    ];
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        color: '#000',
        backgroundColor: '#00ffa8',
        // '&:hover': {
        //     backgroundColor: 'red',
        // },
    };

    const indicatorStyles = {
        background: '#aaa',
        // borderRadius: '50%',
        transform: 'rotate(45deg)',
        width: 12,
        height: 12,
        display: 'inline-block',
        margin: '0 10px',
    };

    return (
        <Grid container alignItems="center" className={classes.background} ref={refSection1}>
            <Grid item xs={12} md={6}>
                <Grid 
                container 
                direction="column" 
                justify="space-between" 
                alignItems="flex-start"
                style={{
                    maxHeight: '500px',
                }}>
                <Grid item>
                    <Typography variant="h2" component="h2" className={classes.title}>
                    PROJECTS.
                    </Typography> 
                </Grid>
                <Grid item>
                    <Typography variant="h6" component="h6" style={{textDecoration: 'underline solid #00ffa8'}}>
                        {projectsArr[count].title}
                    </Typography> 
                </Grid>
                {
                    projectsArr[count].live? (
                        <Grid item>
                            <a href={projectsArr[count].live} rel="noopener" style={{textDecoration: 'none'}}><Button variant="contained" style={{backgroundColor: '#00ffa8'}} startIcon={<DesktopWindowsIcon />}>
                                View Live
                            </Button></a>
                </Grid>
                    ) : (
                        <Grid item>
                            <a href={projectsArr[count].repo} rel="noopener" style={{textDecoration: 'none'}}><Button variant="contained" style={{backgroundColor: '#00ffa8'}} startIcon={<GitHubIcon />}>
                                View Repo
                            </Button></a>
                        </Grid>
                    )
                }
                <Grid item>
                    <Typography variant="body1" component="p">
                        {projectsArr[count].desc}
                    </Typography> 
                </Grid>
                </Grid>
            </Grid>
        
            <Grid item xs={12} md={6}>
                <Carousel 
                    statusFormatter={(current, total) => {
                        setCount(current -1);
                        return `Current slide: ${current} / Total: ${total}`}}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                    <IconButton onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: -40 }}>
                        <ChevronLeftIcon />
                    </IconButton>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <IconButton onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: -40,}}>
                            <ChevronRightIcon />
                        </IconButton>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#00ffa8' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                            <li
                                style={indicatorStyles}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                title={`${label} ${index + 1}`}
                                aria-label={`${label} ${index + 1}`}
                            />
                    );
                }}
                    showThumbs={false} 
                    className={classes.carouselContainer} 
                    autoPlay={true} 
                    infiniteLoop={true}>
                    {projectsArr.map((itm, index) =>(
                        <div key={index}>
                            <img src={itm.img} alt={`${itm.title} project`} style={{minWidth: '200px', minHeight: '400px', maxHeight: '400px', }}/>
                            <p className='legend'>{itm.title}</p>
                        </div>
                    ))}
                </Carousel>
            </Grid>
        </Grid>
    );
}

export default Projects;