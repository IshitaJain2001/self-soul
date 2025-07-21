// Middlewares/checkSuperAdmin.js
export function checkSuperAdmin(req, res, next) {
  if (!req.user || !req.user.isSuperAdmin) {
    return res.status(403).json({ error: "Access denied. Super Admins only." });
  }
  next();
}
