const mysql = require('../../util/mysqlPool')

exports.getList = (req, res) => {
    const page = req.query.page || 1

    // 1. Get List
    const getList = async () => {
        try {
            let conn = await mysql.getConnection()
            let list = await conn.query(`SELECT * FROM game order by -date limit 10 offset ${(page-1)*10};`)
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