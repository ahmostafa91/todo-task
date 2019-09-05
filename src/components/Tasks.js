import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteTaskAction, completeTaskAction } from '../actions/tasksActions';
import { TableRow, TableCell, Fab, Checkbox } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//import Lottie from 'react-lottie';
//import anim from '../images/checked_done_.json';


class Task extends Component {


  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  }

  completeTask = () => {
    this.props.completeTask(this.props.id);
  }
  
  render() {  
    const { description, time, id } = this.props;
    return (
      <TableRow className="taskItem" key={id}>
        <TableCell align="center">
          <Checkbox onChange={this.completeTask}></Checkbox>
        </TableCell>
        <TableCell align="center">
              { description }
        </TableCell>
        <TableCell align="center">
              { time }
        </TableCell>
        <TableCell align="center">
              <Fab size="small" color="secondary" onClick={this.deleteTask}><DeleteForeverIcon /></Fab>
        </TableCell>
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(deleteTaskAction(id)),
  completeTask: (id) => dispatch(completeTaskAction(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Task);
