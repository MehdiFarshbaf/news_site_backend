import {Sequelize} from 'sequelize'

const db = new Sequelize("news_site", "news_user", "urjn-[9sVf!X48Z0", {
    host: "localhost",
    dialect: "mysql"
})

export default db