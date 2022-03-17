import axios from "axios";

//const BASE_URL = "http://localhost:5001"
const BASE_URL="http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class FrienderApi {

    //Look at refactoring to request function
    //to reduce repeated axios calls

    /** Calls backend to signup new user */
    static async signupUser(user) {
        try {
            const res = await axios.post(`${BASE_URL}/signup`, user,);
            return res.data.user;
        } catch (err) {
            return err;
        }
    }

    /** Calls backend to login user */
    static async loginUser(user) {
        try {
            const res = await axios.post(`${BASE_URL}/login`, user);
            return res.data.user;
        } catch (err) {
            return err;
        }
    }

    /** Calls backend to update user profile details */
    static async updateUser(user) {
        try {
            const res = await axios.patch(`${BASE_URL}/profile`, user);
            return res.data.user;
        } catch (err) {
            return err;
        }
    }

}

export default FrienderApi;