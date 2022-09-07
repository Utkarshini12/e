import { AxiosInstance } from "../util/AxiosInstance";


export const signup = async (user) => {

    const URL = '/auth/signup';
  
    try {
  
      const response = await AxiosInstance.post(URL, user);
      console.log(response);
      return response;
    } catch (error) {
  
      console.log(error);
      throw error;
  
    }
  
  }


export const signin = async (user) => {

    const URL = '/auth/signin';
  
    try {
  
      const response = await AxiosInstance.post(URL, user);
      console.log(response);
      return response;
    } catch (error) {
  
      console.log(error);
      throw error;
  
    }
  
  }