import React, {Component} from 'react';
import firebase from '../firebase';
import { TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const CollisionLinkSignup = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/main-todo" {...props} />
));

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            error: null
        }
        this.onChangeE = this.onChangeE.bind(this);
        this.onChangeP = this.onChangeP.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeE(e) {
        this.setState({email: e.target.value})
    }

    onChangeP(e) {
        this.setState({password: e.target.value})
    }

    onSubmit() {
       const { email, password } = this.state;
       firebase.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
           this.setState({error: err.message})
       })
    };

    render() {
        return(
            <div>
            <h3 className="sign-up">Signup</h3>
            <TextField
            label="Enter Email"
            placeholder="Email"
            margin="normal"
            fullWidth
            onChange={this.onChangeE}
          />
  
          <TextField
            label="Enter Password"
            placeholder="Password"
            type="password"
            margin="normal"
            fullWidth
            onChange={this.onChangeP}
          />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
              component={CollisionLinkSignup}
              m={10}
            >
              Signup
            </Button>


            </div>
        );
    }
}

export default Signup;