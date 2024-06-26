const {Model, DataTypes, Sequelize} = require('sequelize')
const {CLIENTES_TABLE} = require('./clientes.model')

const DIRECCION_TABLE = 'direccion';

const DireccionSchema = {
  idDireccion:{
    allowNull:false,
    autoIncrement:true,
    field:'direccion_id',
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  codigopostal:{
    allowNull:false,
    type:DataTypes.STRING(5)
  },
  tipoVialidad:{
    allowNull:true,
    field:'tipo_vialidad',
    type:DataTypes.STRING(30)
  },
  nombreVialidad:{
    allowNull:false,
    field:'nombre_vialidad',
    type:DataTypes.STRING(60)
  },
  numeroExterior:{
    allowNull:false,
    field:'numero_exterior',
    type:DataTypes.STRING(30),
  },
  numeroInterior:{

    allowNull:true,
    field:'numero_interior',
    type:DataTypes.STRING(30)

  },
  nombreColonia:{
    allowNull:false,
    field:'colonia',
    type:DataTypes.STRING(30)
  },
  nombreLocalidad:{
    allowNull:false,
    field:'localidad',
    type:DataTypes.STRING(30)
  },
  municipio:{
    allowNull:false,
    type:DataTypes.STRING(40)
  },
  activo:{
    allowNull:false,
    type:DataTypes.STRING(40)
  },
  fechaAlta:{
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field:'fecha_alta'

  },
  fechaModificacion:{
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field:'fecha_modificacion'


  },
  fechaBaja:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'fecha_baja'
  },
  idCliente:{
    allowNull: false,
    field:"cliente_id",
    type: DataTypes.INTEGER,
    unique:true,
    references:{
      model: CLIENTES_TABLE,
      key:'clientes_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'
  },
  /* contador:{
    allowNull:false,
    field: 'contador_id',
    type:DataTypes.INTEGER,
    references:{
      model:CONTADORES_TABLE,
      key: 'contadores_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'


  }, */

}

class Direccion extends Model{
  static associate(models){
    this.belongsTo(models.clientes,{as: 'cliente'} );

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:DIRECCION_TABLE,
      modelName:'Direccion',
      timestamps:false
    }
  }
}


module.exports = {DIRECCION_TABLE, DireccionSchema, Direccion}
