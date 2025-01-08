const jwt = require("jsonwebtoken");

function verifyUser(request, response, next) {
  const token = request.headers["authorization"];
  if (!token) {
    return response.status(403).json({
      error: true,
      message: "Token is required for authentication",
    });
  }
  try {
    const decoded = jwt.verify(token, "thisismysecretkey");
    request.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return response.status(401).json({
      error: true,
      message: "Invalid Token",
    });
  }
}

module.exports = verifyUser;
