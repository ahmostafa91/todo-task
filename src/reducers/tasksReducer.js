export default (
  state = {
    tasks: [
      {
        id: 1,
        status: "pending",
        description: "Study",
        time: "11:00 AM"
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            task.status = "completed";
          }
          return task;
        })
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
};
