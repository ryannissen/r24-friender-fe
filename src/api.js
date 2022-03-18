import axios from "axios";
import BASE_URL from './config'

/** API Class.
 *
 * - Holds static methods for:
 *  - signupUser
 *  - loginUser
 *  - updateUser
 *
 */
class FrienderApi {

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

    static async getAllUsers() {
        try {
            const res = await axios.get(`${BASE_URL}/cards`)
            return res.data.users;
        } catch (err) {
            return err;
        }
    }

    static async likeUser(user) {
        try {
            const res = await axios.post(`${BASE_URL}/like`, user)
        } catch (err) {
            return err;
        }
    }

    static async dislikeUser(user) {
        try {
            const res = await axios.post(`${BASE_URL}/dislike`, user)
        } catch (err) {
            return err;
        }
    }

}

export default FrienderApi;