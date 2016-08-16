export function selectProject(Project){
  //an action creator needs to return an action
  return {
    type: 'PROJECT_SELECTED',
    payload: Project
  }
}
