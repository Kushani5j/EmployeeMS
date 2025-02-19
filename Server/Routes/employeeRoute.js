import Express, { response } from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Express.Router();

const app = Express();

// Route for emploee login
router.post('/employee_login', (req, res) => {
    const sql = "SELECT * FROM employee WHERE email = ? ";
    con.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password, (err, response) => {
                if (err) return res.json({ loginStatus: false, Error: "Wrong password" });
                if (response) {
                    const email = result[0].email;
                    const token = jwt.sign({ role: "employee", email: email }, "employee_secret_key", { expiresIn: "1d" }

                    );
                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "Lax"
                    }); return res.json({ loginStatus: true, id: result[0].id });

                }
            })
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});

router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
  })

  router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
  })

export { router as employeeRouter };