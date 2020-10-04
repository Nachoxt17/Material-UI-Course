import React from 'react';
import { withWidth, Typography, Hidden, Button } from '@material-ui/core';

const Hide = (props) => {
    return (
        <div>
            <Typography variant='h5' color='initial'>
                Width Size: {props.width}
            </Typography>
            <br />
            <Hidden xsDown>
                <Button variant='contained' color='secondary'>
                    Button XS Down
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant='contained' color='secondary'>
                    Button SM Down
                </Button>
            </Hidden>
            <Hidden mdDown>
                <Button variant='contained' color='secondary'>
                    Button MD Down
                </Button>
            </Hidden>
            <Hidden lgDown>
                <Button variant='contained' color='secondary'>
                    Button LG Down
                </Button>
            </Hidden>
            <Hidden xlDown>
                <Button variant='contained' color='secondary'>
                    Button XL Down
                </Button>
            </Hidden>
            <Hidden xsUp>
                <Button variant='contained' color='primary'>
                    Button XS Up
                </Button>
            </Hidden>
            <Hidden smUp>
                <Button variant='contained' color='primary'>
                    Button SM Up
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant='contained' color='primary'>
                    Button MD Up
                </Button>
            </Hidden>
            <Hidden lgUp>
                <Button variant='contained' color='primary'>
                    Button LG Up
                </Button>
            </Hidden>
            <Hidden xlUp>
                <Button variant='contained' color='primary'>
                    Button XL Up
                </Button>
            </Hidden>
            <Hidden only='xs'>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only XS
                </Button>
            </Hidden>
            <Hidden only='sm'>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only SM
                </Button>
            </Hidden>
            <Hidden only='md'>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only MD
                </Button>
            </Hidden>
            <Hidden only='lg'>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only LG
                </Button>
            </Hidden>
            <Hidden only='xl'>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only XL
                </Button>
            </Hidden>
            <Hidden only={['xs', 'md', 'xl']}>
                <Button variant='contained' color='secondary'>
                    Button Hidden Only XS, MD & XL
                </Button>
            </Hidden>
        </div>
    );
};

export default withWidth()(Hide);
