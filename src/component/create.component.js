import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New product</h3>
                <form>
                    <div className="form-group">
                        <label>Add product Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                     
                    <div className="form-group">
                        <label>Add code Number: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}