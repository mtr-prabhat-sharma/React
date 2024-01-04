import React from "react";

// using simple jsx function - Function Component
export let DesiMovie = (props) => {
    return(
        <div>
            <img src={props.thumbnail} />
            <hr />
            <strong>{props.mname}</strong>
        </div>
    )
}

// using class component - Class Component

export class EnglishMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={this.props.thumbnail} />
                <hr />
                <strong>{this.props.mname}</strong>
            </div>
        )
    }
}