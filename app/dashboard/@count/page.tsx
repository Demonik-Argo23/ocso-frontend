import axios from "axios";
const CountPage = async () =>{
    const response = await axios.get("http://localhost:3000/locations");
    return "Hay tantas locations: " + response.data?.length;
}

export default CountPage;