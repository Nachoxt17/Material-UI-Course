import React from 'react';
import { Box, Grid } from '@material-ui/core';

const GridsResponsive = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box border={2}>Box 1:_ XS 12, SM 6, MD 4 & LG 3.</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box border={2}>Box 2:_ XS 12, SM 6, MD 4 & LG 3.</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box border={2}>Box 3:_ XS 12, SM 6, MD 4 & LG 3.</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box border={2}>Box 4:_ XS 12, SM 6, MD 4 & LG 3.</Box>
                </Grid>
            </Grid>
        </>
    );
};

export default GridsResponsive;
