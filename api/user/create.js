const bcrypt=require('bcrypt-nodejs')
const mysql=require('../../util/mysqlPool')

exports.Create=(req,res)=>{
    const userId=req.body.userId
    const password=req.body.password
    const email=req.body.email

    const DataCheck=()=>{
        return new Promise((resolve, reject) => {
            if(!userId || !password || !email){
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
                    .then((err,result,fields)=>{
                        if(err) throw err
                        if(result[0]!=null){
                            return Promise.reject({
                                code:'user_already_exists',
                                message:'User already exists'
                            })
                        }
                    })
                connection.query(`select * from user where EMAIL=\'${email}\'`)
                    .then((err,result,fields)=>{
                        if(err) throw err
                        if(result[0]!=null){
                            return Promise.reject({
                                code:'user_already_exists',
                                message:'User already exists'
                            })
                        }
                    })
                connection.release()
            })
            .then(()=>{
                return Promise.resolve()
            })
            .catch((err)=>{
                return Promise.reject({
                    code:'database_error',
                    message:'Database error'
                })
            })
    }

    const SignUp=()=>{
        const hash=bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)
        mysql.getConnection()
            .then((connection)=>{
                connection.query(`insert into user (USERID,PASSWORD,EMAIL) values (\'${userId}\',\'${hash}\',\'${email}\');`)
                    .then((err,result,fields)=>{
                        if(err) throw err
                        else{
                            connection.release()
                            return Promise.resolve()
                        }
                    })
            })
    }

    DataCheck()
        .then(UserCheck)
        .then(SignUp)
        .then(()=>{
            res.status(200).json({message:'SignUp Complete'})
        })
        .catch((err)=>{
            res.status(500).json(err | err.message)
        })
}