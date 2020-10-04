import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import DeckIcon from '@material-ui/icons/Deck';

const Lists = () => {
    return (
        <>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon />
                    </ListItemIcon>
                    <ListItemText>My First Element</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon />
                    </ListItemIcon>
                    <ListItemText>My Second Element</ListItemText>
                </ListItem>
            </List>
        </>
    );
};

export default Lists;
