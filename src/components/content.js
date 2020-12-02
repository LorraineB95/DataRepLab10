import React from 'react';

//Exports the contents of the class 'content' when called
export class Content extends React.Component {

//Render displays the contents in <div>
    render() {
        return (
            //Displays the local time at current location
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
