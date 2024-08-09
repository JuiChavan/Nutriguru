import axios from "axios";
var baseUrl="http://localhost:9090/nutritionist/"

class NutritionistService{

   getAll=()=>{
        return axios.get(baseUrl+"getAllNutritionist")
    }

  getAllTimeSlots=()=>{
        return axios.get("http://localhost:9090/client/showAllTimeSlots");
    }
//not done
getNutritionistById=()=>{
        return axios.get();
    }
}

export default new NutritionistService();