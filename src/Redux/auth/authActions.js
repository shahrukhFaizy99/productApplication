import { auth } from "../../Firebase/Firbase";

export var signup =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      var user = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
