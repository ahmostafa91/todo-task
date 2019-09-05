import React, { Component } from "react";
import firebase from "../firebase";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';

const CollisionLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/main-todo" {...props} />
));

const styles = theme => ({
    root: {
      margin: '10px 0',
    }
  });

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      error: null,
      success: null,
      logged: null
    };
    this.onChangeE = this.onChangeE.bind(this);
    this.onChangeP = this.onChangeP.bind(this);
    this.login = this.login.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
      }
    });
  }

  showContent() {
    switch (this.state.logged) {
      case true:
        return (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </Button>
        );
      case false:
        return <h4>not loged</h4>;
      default:
        return;
    }
  }

  onChangeE(e) {
    this.setState({ email: e.target.value });
  }

  onChangeP(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.setState({ success: "done" }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h3 className="sign-in">LOGIN</h3>
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
          className={classes.root}
          onClick={this.login}
          component={CollisionLink}
        >
          login
        </Button>
        <Link to="/signup">
          <Button fullWidth variant="contained" color="primary">
            Signup
          </Button>
        </Link>
        {this.showContent()}
      </div>
    );
  }
}

export default withStyles(styles)(Signin);
