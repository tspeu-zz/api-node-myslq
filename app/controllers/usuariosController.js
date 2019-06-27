const sql = require('../db.js');
const User = require('../models/user.model');

// const user = new User();
exports.findAllUser = ( req, res) => {
    sql.query("Select * from usuario", 
    function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
    
    
}

// }
        
exports.finOneUser = (req, res) => {
    // const id = id;
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }

    sql.query("SELECT * FROM usuario WHERE id = ? ", 
        id,   (error, results, fields) => {             
            if(error) {
                console.log("error: ", error);
                // result(err, null);
                throw error;
            }
             console.log(results[0]);   
            return res.send({ error: false, data: results[0], message: '1 users list.' });   
        }); 
}



