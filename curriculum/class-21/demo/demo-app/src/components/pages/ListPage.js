import React from 'react';
import List from '../List';
import ListItem from '../ListItem';

function ListPage(props) {
    return (
        <List title='Test List'>
            <ListItem>List Item 01</ListItem>

            <ListItem>List Item 02</ListItem>

            <ListItem>List Item 03</ListItem>

            <ListItem>List Item 04</ListItem>

            <ListItem>List Item 05</ListItem>
            <div>Hello I'm a Div!</div>
            <p>I'm a Paragraph!</p>
            <a href='/'>MyLink</a>
        </List>
    );
}

export default ListPage;
