import axios from "axios";

export const baseURL = "https://kruapi.upskillkan.com/api/Querybuilder/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": ["application/json;multipart/form-data;"],
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVNjUwNzAwMDIiLCJqdGkiOiI3NDEyM2I0My1iY2FiLTRmYTgtYTQ0Mi02NjIyOTBlNWViZTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIm5iZiI6MTY3ODI0MjM1NSwiZXhwIjoxNjc4MzI4NzU1LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM5MiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzkyIn0.chiWs4Iv1QD6FdiESxqApY0kr0GDTk_W7ylSUsBC0jk",
  },
});