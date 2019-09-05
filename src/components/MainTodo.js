import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTaskAction } from '../actions/tasksActions';

import Header from './Header';
import Task from './Tasks';
import { Grid, Table, TableHead, TableBody, TableRow, TableCell, TextField, Button } from '@material-ui/core';
import NavBar from './../helper/navBar';


class MainTodo extends Component {

  state = {
    id:0,
    description:'',
    time:'',
    status:''    
  };

  addTask = (e) => {

    this.props.addTaskAction(
      (this.props.tasks.length+1),
      this.state.status,
      this.state.description,
      this.state.time
    );
  }

  handleChange = (e) => {
    this.setState({
      id:(this.props.tasks.length+1),
      [e.target.id]: e.target.value,
      status: this.state.status
    });
  }
  
  render() { 
  

    const { tasks } = this.props;

    const tasksList = tasks.map( task => {
      return (
          <Task key={task.id} id={task.id} description={task.description} status={task.status} time={task.time} />
      )
    });
    console.log(this.props)
    return (
      <div>
        <NavBar />
        <Grid container spacing={5} direction="row" justify="flex-start" alignItems="center">
          <Grid item xs={12}>
            <Header />
          </Grid>

          <Grid item justify="center" xs={12}>
            <form id="form">
              <TextField
              id="description"
              label="Enter Description"
              placeholder="Description"
              margin="normal"
              fullWidth
              onChange={this.handleChange}
              />

              <TextField
              id="time"
              label="Enter Time"
              placeholder="Time"
              margin="normal"
              fullWidth
              onChange={this.handleChange}
            />
            <Button fullWidth variant="contained" color="primary" onClick={this.addTask}>
              Add Task
            </Button>
            </form>
          </Grid>

          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" size="small">Progress</TableCell>
                  <TableCell align="center" size="medium">Description</TableCell>
                  <TableCell align="center" size="medium">Time</TableCell>
                  <TableCell align="center" size="small">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {tasksList}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskAction: (id,status,description,time) => dispatch(addTaskAction(id,status,description,time))
});

export default connect(mapStateToProps,mapDispatchToProps)(MainTodo);
