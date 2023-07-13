import { pool } from "../data/db.js";

/**
 * Obtiene todos los atrasos en los préstamos.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @returns {Promise<void>}
 */
const GetAllAtrasos = async (req, res) => {
    const connection = await pool.getConnection();
    const query =
        "SELECT isbn , DATEDIFF (fecha_real_devolucion, fecha_esperada_devolucion) AS fecha_devolucion FROM prestamos ";

    const [result] = await connection.execute(query);
    let dataResponse;
    result.forEach((data) => {
        const { isbn, fecha_devolucion } = data;
        if (fecha_devolucion > 7) {
            dataResponse = {
                isbn,
                fecha_devolucion: fecha_devolucion - 7,
            };
        }
    });

    if (dataResponse) {
        const data = `La deuda correspondiente al libro ${
            dataResponse.isbn
        } es de $${dataResponse.fecha_devolucion * 100} `;
        res.status(200).json({
            ok: true,
            body: data,
        });
    } else {
        const data = "No hay Deudas pendientes";
        res.status(500).json({
            ok: false,
            body: data,
        });
    }
};

export { GetAllAtrasos };
