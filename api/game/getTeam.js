const mysql = require('../../util/mysqlPool')

exports.getTeam = (req, res) => {
    const id = req.params.id

    // 1. Get List
    const getList = async () => {
        try {
            let conn = await mysql.getConnection()
            let list = await conn.query(`SELECT * FROM team WHERE GAMEID = ${id}`)
            conn.release()
            return res.status(200).json(list)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    getList()
        .catch((err) => {
            if (err)
                return res.status(500).json(err)
        })
}