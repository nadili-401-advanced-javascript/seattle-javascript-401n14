import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default ListItem;
