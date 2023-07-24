// 📍 GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. LISTO
// El país es recibido por parámetro (ID de tres letras del país).LISTO

// falta esto:
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.

const { Country } = require('../../db');

const successHandler = async (req) => {
    const {id} = req.params;
    if (id.length !== 3) throw new Error('Invalid ID');
    const upperCaseID = id.toUpperCase();
    const success = await Country.findByPk(upperCaseID);
    if (!success) throw new Error('Country not found');
    return success;
};

const getCountriesByID = async (req, res) => {
    try {
        const country = await successHandler(req);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {getCountriesByID};