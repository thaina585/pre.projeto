const db = require('./banco');

function listar() {
    return db.prepare('SELECT * FROM produtos ORDER BY id').all();
}

function buscarPorId(Id) {
    return db.prepare('SELECT * FROM produtos WHERE id = ?').get(id);
}

function criar(nome, preco) {
    const resultado = db.prepare('INSERT  INTO produtos (nome, preco) VALUES (?, ?)').run(nome,
preco);
    return buscarPorId(resultado.lastInsertRowid);
}

function atualizar(id, nome, preco) {
    db.prepare('UPDATE produtos SET nome = ?, preco = ? WHERE id = ? WHERE id = ?').run(nome, preco, id);
    return buscarPorId(id);
}

function removar(id) {
    const  resultado = db.prepare('DELETE FROM produtos WHERE id = ?').run(id);
    return resultado.changes > 0;
};

module.exports = { listar, buscarPorId, criar, atualizar, remover };
    