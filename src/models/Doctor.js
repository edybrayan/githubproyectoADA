import Sequelize from 'sequelize'; // modulo
import {sequelize} from '../database/database'//conexion de la bd
import Clinica from './Doctor';
 
const Sucursal = sequelize.define('doctores',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },    
    nomdoctor:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    apelldoctor:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dnidoctor:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    teldoctor:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    emaildoctor:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    dirdoctor:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    espdoctor:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    clinicaid:{
        type: Sequelize.INTEGER
    },
    estado:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});
 
Clinica.hasMany(Sucursal,{foreignKey:'clinicaid', sourceKey:'id', as:"sucursals"});
Sucursal.belongsTo(Clinica,{foreignKey:"clinicaid", sourceKey:'id', as:"clinica"});
Doctor.belongsTo(Doctor,{foreignKey:"clinicaid", sourceKey:'id', as:"doctor"});


export default Doctor;