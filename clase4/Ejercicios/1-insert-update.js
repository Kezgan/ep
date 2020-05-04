const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
	host: 'localhost',
	dialect: 'mariadb'
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Se estableció correctamente la conexión.');
	})
	.catch(err => {
		console.error('No se pudo establecer la conexión.', err);
	});

class Cars extends Sequelize.Model {}
Cars.init({
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING
}, {sequelize, modelName: 'users'});


/* Crear usuario */
sequelize.sync()
	.then(() => Cars.create({
		firstName: 'Lautaro',
		lastName: 'Casella'
	}))
	.then(jane => {
		console.log(jane.toJSON());
	});

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'users'
});

/* Actualizar usuario */
User.update({firstName: 'ROBERTO'}, {
	where: {
		lastName: 'Casella'
	}
}).then(() => {
	console.log("Done");
});
