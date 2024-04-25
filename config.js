//conexión con base de datos.
const { Pool } = require("pg");
const pool = new Pool ({
user: "***",
host: "localhost",
database: "repertorio",
password: "****",
port: 5432,
});

//Funcion para verificar la conexion a la base de datos
const conectarDB = async () => {
    try {
        const res = await pool.query(`SELECT NOW()`);
        console.log("Conexion exitosa, fecha y hora actuales 👌:", res.rows[0]);
    } catch (error) {
        console.error("Error al conectar a la Base de datos", error);
    }
}
//Llamar a la funcion de conectarDB
conectarDB();

//exportar el modulo pool
module.exports = pool;