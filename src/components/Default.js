import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className='disaplay-3'>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h5 className='pt-5'>the requested url <span className='text-danger'>
                            {this.props.location.pathname}</span> - was not found</h5>
                    </div>
                </div>
            </div>
        )
    }
}
