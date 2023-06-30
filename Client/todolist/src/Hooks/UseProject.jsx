
export const UseProject = () =>{
const project =  localStorage.getItem("projectById");
return JSON.parse(project)
}