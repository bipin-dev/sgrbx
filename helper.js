module.exports = {
  formatUserData: (data) => {
    // format the data, as there is no schema
    return {
      email: data.email,
      password: data.password,
    };
  },
  isValidToken: (header) => {
    console.log("token : ", header.token);
    if (!header.token) {
      return false; // no token is present
    }
    return true; // valid string is there.
  },
};
