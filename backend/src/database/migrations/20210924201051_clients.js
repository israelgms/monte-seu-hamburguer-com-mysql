exports.up = function (knex) {
    return knex.schema.createTable('clientes', (table) => {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('cpf').notNullable().unique()
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable().defaultTo('Solicitado');
        table.timestamps(true,true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('clientes');
};

