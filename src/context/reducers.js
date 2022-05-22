export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorities.includes(action.payload.item)) return state;

      const newList = [...state.favorities, action.payload.item];
      return {...state, favorities: newList};

    case 'REMOVE_FAVORITE':
      const removeList = state.favorities.filter(f => f != action.payload.item);
      console.log(removeList);
      return {...state, favorities: removeList};

    case 'APPLY_JOB':
      if (state.submitJobs.includes(action.payload.item)) return state;

      const newAplyJobList = [...state.submitJobs, action.payload.item];
      return {...state, submitJobs: newAplyJobList};

    case 'REMOVE_APPLY_JOB':
      const removeApplyJobList = state.submitJobs.filter(f => f != action.payload.item);
      return {...state, submitJobs: removeApplyJobList};

    default:
      return state;
  }
};
