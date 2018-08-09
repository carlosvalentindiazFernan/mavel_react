import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Characters extends Component {
    data = {
        info: ["data","data1","data2","data3"]
    }

    render() {
        return (
            <div className="App">
                <Button variant="contained" color="primary">
                    Demo
              </Button>
              <ul>
                  {this.data.info.map(e => <li>{e}</li>)}
              </ul>
            </div>
        )
    }

    componentDidMount(){
        
    }
}

export default Characters;