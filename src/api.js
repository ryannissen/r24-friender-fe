import axios from "axios";

const BASE_URL = "http://localhost:5001"
//const BASE_URL="http://localhost:5000"

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

    static async signupUser(user) {
        console.log('user in api.js signup', user);
        try {
        let res = await axios.post(`${BASE_URL}/signup`,
        user,
        { headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }});
        return res.data.user;
        } catch (err) {
        console.log('err', err);
        }
        
    }
}

export default FrienderApi;