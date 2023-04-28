function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    res.status(401).json({ message: 'No se ha proporcionado un token' });
    return;
  }
  
  try {
    const decoded = jwt.verify(token, 'secreto');
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Token inválido' });
  }
}
