const verifyAdmin = (req, res, next) => {
    if (!req.user.access.includes("Admin")) {
      return res.status(403).json({ error: "Access forbidden. You do not have admin rights." });
    }
  
    next(); 
  };
  
  module.exports = verifyAdmin;
  