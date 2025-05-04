const dbConfig = require('./Config')
const{taskService} = require('./Services')


const createData = async () => {
    await dbConfig.sequelize.sync({force: false})

    await taskService.createTask(
        'Estudiar React',
        'Practicar componentes y hooks',
        false,
        new Date(),
    )

    console.log("Se crearon los datos en la Base de datos!")
}

createData();