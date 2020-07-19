import Axios from "axios";
import AuthSession from "../services/AuthSession";

class SearchService {
  apiURL = "http://localhost:3000/api/v1";

  getAllItem() {
    const { id, username, password } = AuthSession.handleGetUser();
    return Axios.get(`${this.apiURL}/items`);
  }

  getAllItemWithUsername() {
    const { id, username, password } = AuthSession.handleGetUser();
    return Axios.get(`${this.apiURL}/items/with/username`);
  }

  getItemById(itemId) {
    const { id, username, password } = AuthSession.handleGetUser();
    return Axios.get(`${this.apiURL}/items/${itemId}`);
  }
}

export default new SearchService();
