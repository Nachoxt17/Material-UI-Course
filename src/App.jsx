import React from 'react';
import {
    Button,
    Typography,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import theme from './themeConfig';

import Navbar from './Components/Navbar';
import Lists from './Components/Lists';
import Hide from './Components/Hidden';
import LittleBox from './Components/LittleBox';
import GridsResponsive from './Components/GridsResponsive';

/**+-PENDIENTE DE VER:_ Drawers, both Static and Responsive("Cajones, tanto Estáticos como Adaptables"). https://material-ui.com/es/components/drawers/#permanent-drawer.*/

const useStyles = makeStyles({
    btn1: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '48px',
        padding: '0 30px',
    },
});

function App() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <h1>+-(6)-Navbar(Above this):_</h1>
            <br />
            <h1>+-(1)-Buttons:_</h1>
            <br />
            <br />
            <h2>+-Buttons Colors:_</h2>
            <br />
            <br />
            <Button color='default' variant='text'>
                Button Default
            </Button>
            <Button color='primary' variant='text'>
                Button Primary
            </Button>
            <Button color='secondary' variant='text'>
                Button Secondary
            </Button>
            <Button disabled variant='text'>
                Button Disabled
            </Button>
            <Button variant='text' color='primary' href='https://google.com'>
                Button Link(to Google)
            </Button>
            <br />
            <br />
            <Button color='default' variant='contained'>
                Button Default Contained
            </Button>
            <Button color='primary' variant='contained'>
                Button Primary Contained
            </Button>
            <Button color='secondary' variant='contained'>
                Button Secondary Contained
            </Button>
            <Button disabled variant='contained'>
                Button Disabled Contained
            </Button>
            <Button
                variant='contained'
                color='primary'
                href='https://google.com'>
                Button Contained Link(to Google)
            </Button>
            <br />
            <br />
            <Button color='default' variant='outlined'>
                Button Default Outlined
            </Button>
            <Button color='primary' variant='outlined'>
                Button Primary Outlined
            </Button>
            <Button color='secondary' variant='outlined'>
                Button Secondary Outlined
            </Button>
            <Button disabled variant='outlined'>
                Button Disabled Outlined
            </Button>
            <Button
                variant='outlined'
                color='primary'
                href='https://google.com'>
                Button Outlined Link(to Google)
            </Button>
            <br />
            <br />
            <h2>+-Buttons Sizes and Widths:_</h2>
            <br />
            <br />
            <Button variant='outlined' color='primary' fullWidth>
                Button Full Width (fullWidth)
            </Button>
            <br />
            <br />
            <Button variant='contained' color='primary' size='small'>
                Button Size Small
            </Button>
            <br />
            <br />
            <Button variant='contained' color='secondary' size='large'>
                Button Size Large
            </Button>
            <Button variant='contained' color='primary' size='medium'>
                Button Size Medium (The Default Value)
            </Button>
            <br />
            <br />
            <h1>
                +-(2)-Icons (Installed with SVG:_ npm install
                @material-ui/icons):_
            </h1>
            <br />
            <br />
            <Button
                variant='outlined'
                color='primary'
                href='https://material-ui.com/es/components/material-icons/'>
                <h2>
                    You Need to Go Here to Get All the Icons:_ <br />
                    https://material-ui.com/es/components/material-icons/
                </h2>
            </Button>
            <br />
            <br />
            <DeleteIcon />
            <br />
            <br />
            <AccessAlarmIcon />
            <br />
            <br />
            <AcUnitIcon />
            <br />
            <br />
            <h2>+-Icons Inside Buttons:_</h2>
            <br />
            <br />
            <h3>+-Icons at the Start of The Button:_</h3>
            <br />
            <br />
            <Button
                color='secondary'
                variant='contained'
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <br />
            <br />
            <Button
                color='default'
                variant='contained'
                startIcon={<AccessAlarmIcon />}>
                Alarm
            </Button>
            <br />
            <br />
            <Button
                color='primary'
                variant='contained'
                startIcon={<AcUnitIcon />}>
                Cold
            </Button>
            <br />
            <br />
            <h3>+-Icons at the End of The Button:_</h3>
            <br />
            <br />
            <Button
                color='secondary'
                variant='contained'
                endIcon={<DeleteIcon />}>
                Delete
            </Button>
            <br />
            <br />
            <Button
                color='default'
                variant='contained'
                endIcon={<AccessAlarmIcon />}>
                Alarm
            </Button>
            <br />
            <br />
            <Button
                color='primary'
                variant='contained'
                endIcon={<AcUnitIcon />}>
                Cold
            </Button>
            <br />
            <br />
            <h1>+-(3)-Typography:_</h1>
            <br />
            <br />
            <Typography variant='h1' color='initial' align='inherit'>
                H1 Typography Align Inherit
            </Typography>
            <br />
            <br />
            <Typography variant='h2' color='primary' align='left'>
                H2 Typography Primary Align Left
            </Typography>
            <br />
            <br />
            <Typography variant='h3' color='secondary' align='center'>
                H3 Typography Secondary Align Center
            </Typography>
            <br />
            <br />
            <Typography variant='h4' color='primary' align='right'>
                H4 Typography Primary Align Right
            </Typography>
            <br />
            <br />
            <Typography variant='h5' color='secondary' align='justify'>
                H5 Typography Secondary Align Justify
            </Typography>
            <br />
            <br />
            <Typography variant='h6' color='primary' align='center'>
                H6 Typography Primary Align Center
            </Typography>
            <br />
            <br />
            <Typography variant='body1' color='initial'>
                BODY Typography:_ Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Delectus, sunt? Placeat optio dolore
                consequatur asperiores ducimus, aut voluptatibus nam natus quod
                laudantium nisi atque excepturi, incidunt rem quaerat
                accusantium corporis.
            </Typography>
            <br />
            <br />
            <h2>+-(4)-styles(to Customize Components):_</h2>
            <br />
            <br />
            <Button className={classes.btn1}>
                My Customized Button with Material-UI Styles
            </Button>
            <br />
            <br />
            <h1>
                +-(5)-Global Themes(to Customize Material-UI Default Settings):_
            </h1>
            <br />
            <br />
            <ThemeProvider theme={theme}>
                <Button color='primary' variant='contained'>
                    Button Primary Contained Customized
                </Button>
                <Button color='secondary' variant='contained'>
                    Button Secondary Contained Customized
                </Button>
            </ThemeProvider>
            <br />
            <br />
            <h1>+-(7)-Lists:_</h1>
            <br />
            <br />
            <Lists />
            <br />
            <br />
            <h1>+-(8)-Hidden:_</h1>
            <br />
            <br />
            <Hide />
            <br />
            <br />
            <h1>+-(9)-Boxes:_</h1>
            <br />
            <br />
            <LittleBox />
            <br />
            <br />
            <h1>+-(10)-Grids Responsive:_</h1>
            <br />
            <br />
            <GridsResponsive />
            <br />
            <br />
        </div>
    );
}

export default App;
