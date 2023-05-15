
import checkAuth from "../middleware/authMiddleware";
//const checkAuth = require("../middleware/authMiddleware").default;
import jwt from "jsonwebtoken";

describe('checkAuth', () => {
    test('Debería enviar una respuesta de error si el token es inválido', async () => {
        const req = { headers: { authorization: 'Bearer token-invalido' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const next = jest.fn();
      
        await checkAuth(req, res, next);
      
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ msg: 'Token no válido o inexistente' });
      });

  
});
