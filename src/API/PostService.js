import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get(
        "http://ergast.com/api/f1/drivers.json?limit=100"
        // "https://jsonplaceholder.typicode.com/posts"
      );
      const obj = JSON.stringify(response.data);
      const parsed = JSON.parse(obj);
      const parsDrive = parsed.MRData.DriverTable.Drivers;
      return parsDrive;
    } catch (e) {
      console.log(e);
    }
  }
}
