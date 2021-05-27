import axios from "axios";

export const headers = {
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

// axios get
export const AxiosGet = (url) => {
  axios.get(`${url}`)
    .then(res => {
      const data = res.data;
      return (data)
    })
    .catch(error => {
      console.log("there was an error fetching from my anime list.")
      return ([])
    });
}