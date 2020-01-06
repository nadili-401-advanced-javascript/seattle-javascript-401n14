import React from 'react';

// This is my "Deck"

class List extends React.Component {
    render() {
        let listItems = [];

        for (let i = 0; i < this.props.children.length; i++)
            listItems.push(<li>{this.props.children[i]}</li>);

        console.log(this.props.children);
        return (
            <div>
                <h1>{this.props.title}</h1>

                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default List;
