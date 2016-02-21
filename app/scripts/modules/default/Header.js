import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="header">
                    <ul className="nav nav-pills pull-right">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="/about" activeStyle={{ color: 'blue' }}>About</Link></li>
                        <li><Link to="/repos" activeStyle={{ color: 'blue' }}>Repos</Link></li>
                    </ul>
                    <h3 className="text-muted">react</h3>

                </div>

                {this.props.children}

            </div>
        )
    }
})
