import { pool } from "../data/db.js";

const GetAllAutores = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const NacimientoQuery = "1970-01-01T04:00:00.000Z";
        const query = "SELECT * FROM autores WHERE fecha_nacimiento > ? ";
        const [result] = await connection.execute(query, [NacimientoQuery]);
        res.status(200).json({
            ok: true,
            msg: "Autores cargados correctamente",
            body: result,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al intentar cargar los autores nacidos despues del año 1970",
            body: error,
        });
    }
};

export { GetAllAutores };
