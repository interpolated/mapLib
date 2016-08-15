import { combineReducers } from 'redux';
import ProjectsReducer from './reducers-project';


const rootReducer = combineReducers({
  projects: ProjectsReducer,
});

export default rootReducer;
