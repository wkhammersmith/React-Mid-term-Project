import React from 'react';
// This page is just for ME :)

class TestingCode extends React.Component {
    render() {
        let testing = [
        "TESTING CODE: Why isn't this working?", 
        "TESTING CODE: Getting Closer!!", 
        "TESTING CODE: Victory!!!",
        " "   
        ]
        let successLevel = 3
        //          ^^ Use index 3 in successLevel for submission :)
        return (
            <div>
                <h3> {testing[successLevel]} </h3>
            </div>
        )
    }
}

export default TestingCode


