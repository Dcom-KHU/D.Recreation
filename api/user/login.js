const bcrypt=require('bcrypt-nodejs')
const mysql=require('../../util/mysqlPool')

exports.Login=(req,res)=>{
    const userId=req.body.userId
    const password=req.body.password

    const DataCheck=()=>{
        return new Promise((resolve, reject) => {
            if(!userId || !password){
                return reject({
                    code: 'request_body_error',
                    message:'Request body is not defined'
                })
            }
            else resolve()
        })
    }

    const UserCheck=()=>{
        mysql.getConnection()
            .then((connection)=>{
                connection.query(`select * from user where USERID=\'${userId}\'`)
                    .then((err,result,fields)=> {
                        if (err) throw err
                        if (result[0]==null){
                            return Promise.reject({
                                code:'ID_wrong',
                                message:'ID wrong'
                            })
                        }
                        else{
                            connection.release()
                            return Promise.resolve(result[0])
                        }
                    })
            })
    }

    const PWCheck=(user)=>{
        if(bcrypt.compareSync(password, user.password)){
            req.session.sid=userId
            return Promise.resolve()
        }
        else{
            return Promise.reject({
                code:'PW_wrong',
                message:'PW wrong'
            })
        }
    }

    DataCheck()
        .then(UserCheck)
        .then(PWCheck)
        .then(()=>{
            res.status(200).json({message:'Login Complete'})
        })
        .catch((err)=>{
            res.status(500).json(err | err.message)
        })

}