import React from 'react';
import { Box } from '@material-ui/core';

const LittleBox = () => {
    return (
        <>
            <Box color='primary.main' border={1}>
                <h3>This is a Box</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                border={1}>
                <h3>This is another Box</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                m={2}
                border={1}>
                <h3>This is a Box with a Complete Margin = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                mr={2}
                border={1}>
                <h3>This is a Box with a Margin Rigth = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                ml={2}
                border={1}>
                <h3>This is a Box with a Margin Left = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                mt={2}
                border={1}>
                <h3>This is a Box with a Margin Top = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                mb={2}
                border={1}>
                <h3>This is a Box with a Complete Bottom = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                my={2}
                border={1}>
                <h3>This is a Box with a Margin Y = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                mx={2}
                border={1}>
                <h3>This is a Box with a Margin X = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                p={2}
                border={1}>
                <h3>This is a Box with a Complete Padding = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                pr={2}
                border={1}>
                <h3>This is a Box with a Padding Rigth = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                pl={2}
                border={1}>
                <h3>This is a Box with a Padding Left = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                pt={2}
                border={1}>
                <h3>This is a Box with a Padding Top = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                pb={2}
                border={1}>
                <h3>This is a Box with a Padding Bottom = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                py={2}
                border={1}>
                <h3>This is a Box with a Padding Y = 16px(2*8px).</h3>
            </Box>
            <Box
                color='primary.constrastText'
                bgcolor='primary.main'
                px={2}
                border={1}>
                <h3>This is a Box with a Padding X = 16px(2*8px).</h3>
            </Box>
        </>
    );
};

export default LittleBox;
