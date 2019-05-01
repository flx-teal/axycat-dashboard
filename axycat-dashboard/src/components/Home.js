import React, { Component } from 'react';
import CheckAccessibility from "./homePage/checkAccessibility";

class Home extends Component {
    render() {
        return (
            <div>
                <CheckAccessibility/>
            </div>
        )
    }
}

export default Home