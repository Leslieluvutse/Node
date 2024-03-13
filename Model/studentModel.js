module.exports=(sequelize,DataTypes)=>{
    const student= sequelize.define('student',{
       Std_id:{
              type:DataTypes.INTEGER,
              primaryKey:true,
              autoIncrement:true,
       },
       student_FirstName:{
              types:DataTypes.STRING,
              allowNull:false,
       },
       student_LastName:{
              types:DataTypes.STRING,
              allowNull:false,
       },
       student_Gender:{
              types:DataTypes.STRING,
              defaultValue:'Male'
       },
});
}

