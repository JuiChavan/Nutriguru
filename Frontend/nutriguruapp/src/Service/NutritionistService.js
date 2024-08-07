import axios from "axios";
var baseUrl="http://localhost:9090/nutritionist/"

class NutritionistService{

    getAll=()=>{
        return axios.get(baseUrl+"getAllNutritionist")
    }
}

export default new NutritionistService();