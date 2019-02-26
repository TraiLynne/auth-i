const knex = require('knex');

const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);
const dbName = 'users';


function find() {
    return db(dbName).select('id', 'username', 'password');
}

function findBy(filter) {
    return db(dbName).where(filter);
}

async function add(user) {
    const [id] = await db(dbName).insert(user);

    return findById(id);
}

function findById(id) {
    return db(dbName)
        .where({
            id
        })
        .first();
}
module.exports = {
    add,
    find,
    findBy,
    findById,
};