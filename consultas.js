//Importar instancia pool.
const pool = require("./config")

//insertar
const insertar = async (datos) => {
    try {
        const consulta = {
            text: "INSERT INTO canciones (titulo, artista, tono) values($1, $2, $3) ",
            values: datos,
        };
        const result = await pool.query(consulta);
        return result;
        } catch (error) {
        console.error("Error al insertar", error)
    }
};


//Consultar.
const consultar = async () => {
    try {
        const result = await pool.query("SELECT * FROM canciones");
        return result.rows;
        } catch (error) {
        console.error("Error al consultar", error)
    }
};

//Editar.
const editar = async (id, titulo, artista, tono) => {

    try {
        const consulta = {
            text: "UPDATE canciones SET titulo = $2, artista = $3, tono = $4 WHERE id = $1 RETURNING *",
            values: [id, titulo, artista, tono,],
        };
        const result = await pool.query(consulta);
        return result;
        } catch (error) {
        console.error("Error al editar", error)
    }
};

//Eliminar.
const eliminar = async (id) => {    
    try {
        const result = await pool.query( `DELETE FROM canciones WHERE id = '${id}'`
        );
        return result;
        } catch (error) {
        console.error("Error al eliminar", error)
    }
};

//Exportar
module.exports = { insertar, consultar, editar, eliminar };

