'user strict';
import sql from './db.js';

//Task object constructor
var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

// var Usuario = {
    
//     id 
//     creationDate
//     lastModificationUser
//     modificationDate
//     version
//     apellidos
//     nombre
//     username
//     creation_date
//     last_modification_user
//     modification_date
// }

Task.getTaskById = function (taskId, result) {
    sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};