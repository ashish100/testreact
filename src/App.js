import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  
export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          code:'',
      }
  }

  Insert_Data_Into_MySQL = () =>
    {
         
            fetch('http://localhost:3000/insert.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  name : this.state.name,
 
                  code : this.state.code,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
 
                 
 
            }).catch((error) =>
            {
                console.error(error);
            });
         
    }


  onChangePersonName(e) {
    this.setState({
       name: e.target.value
    });
  }
   
  onChangeGstNumber(e) {
    this.setState({
      code: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
     alert(this.state.name);
    console.log(`The values are ${this.state.name}, and ${this.state.code}`)
    this.setState({
       name: '',
       code: ''
    })
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Business</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                   
                  <div className="form-group">
                      <label>GST Code: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.code}
                        onChange={this.onChangeGstNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}