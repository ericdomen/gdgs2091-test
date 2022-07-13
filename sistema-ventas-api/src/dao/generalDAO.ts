import pool from '../database/database';
class GeneralDAO {

    public async listarRoles() {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                " SELECT * FROM tbl_rol WHERE estatus = ? ", [1]);
        });
        return result;
    }
}
const dao = new GeneralDAO();
export default dao;