const mysql = require('../../util/mysqlPool')

exports.get = (req, res) => {
    const id = req.params.id

    // 1. Query Check
    const QueryCheck = () => {
        if (!id){
            return Promise.reject({
                message: 'Query Error'
            })
        }
        return Promise.resolve()
    }

    // 2. Get Game
    const getGame = async () => {
        try {
            let conn = await mysql.getConnection()
            let list = await conn.query(`SELECT * FROM game WHERE ID=${id};`)

            if (list == false){
                return res.status(404).json({
                    message: 'Game is not exist'
                })
            }
            conn.release()
            return res.status(200).json(list[0])
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    QueryCheck()
        .then(getGame)
        .catch((err) => {
            if (err)
                return res.status(500).json(err)
        })
}