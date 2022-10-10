import { Sequelize } from "sequelize"
import config from '../config'

const { user, host, database, password, port } = config

const db = new Sequelize(
    database,
    user,
    password,
    {
        host: host,
        port: port,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    });

const connectDB = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

connectDB()

export default db;