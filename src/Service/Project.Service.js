import projectData from "../data/project.json";
import { pagination } from "../helpers/Pagination";
import Instance from "../helpers/KRU.Axios"

export const getProject = async (pageSize, currentPage, prmProjectName) => {
  try {
    // const response = await Instance.get(
    //   `Get/getProject?pagesize=${pageSize}&currentpage=${currentPage}&search=${prmProjectName}`
    // );
    const response = await Instance.get(`Get/getProject`)
    
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteProject = async (code) =>{
  try{
    const res = await Instance.delete(
      `Delete/deleteProject?project_code1=${code}`
    );
    return await res.data;
  }catch (error){
    console.log("error",error)
  }
}

export function getProject2(search = "", pagesize = 10, currentpage = 1) {
  let project = projectData;

  if (search) {
    project = project.filter((a) => a.projectName.includes(search));
  }

  return pagination(pagesize, currentpage, project);
}

