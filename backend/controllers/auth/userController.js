const { success, error } = require("../../helpers/response");

const test = async (req, res) => {
  try {
    return success(res, "test route is working...", 200, "route working");
  } catch (err) {
    return error(res, "Something went wrong", err.message, 500);
  }
};
module.exports = { test };
