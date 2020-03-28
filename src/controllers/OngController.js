const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/index');

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        res.json(ongs)
    },

    async cretate(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        })

        return res.json({ id })
    }

}