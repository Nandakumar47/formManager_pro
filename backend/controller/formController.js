const testRoute = (req, res) => {
  try {
    return res.json({ success: true, message: "Success" });
  } catch (error) {
    return res.json({ success: false, message: "Failure" });
  }
};
module.exports = { testRoute };
