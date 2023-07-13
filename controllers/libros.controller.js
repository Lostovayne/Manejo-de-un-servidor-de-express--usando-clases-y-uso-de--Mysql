import { pool } from "../data/db.js";

/**
 * Obtiene todos los libros con menos de 300 páginas.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 * @returns {Promise<void>} - Una promesa que no resuelve ningún valor.
 */
const getAllLibros = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const queryLibros = "SELECT * FROM libros WHERE numero_paginas < 300";
        const [result] = await connection.execute(queryLibros);

        res.status(200).json({
            ok: true,
            body: result,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            body: error,
        });
    }
};

/**
 * Obtiene el libro más solicitado.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 * @returns {Promise<void>} - Una promesa que no resuelve ningún valor.
 */
const GetIdLibro = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const masSolicitado =
            "SELECT isbn, COUNT(*) as mas_solicitados FROM prestamos GROUP BY isbn ORDER BY mas_solicitados DESC LIMIT 1";

        const [result] = await connection.execute(masSolicitado);
        res.status(200).json({
            ok: true,
            msg: "Libro más solicitado",
            body: result,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al intentar obtener el libro más solicitado",
            body: error,
        });
    }
};

export { getAllLibros, GetIdLibro };
