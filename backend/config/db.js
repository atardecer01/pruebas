import mongoose from "mongoose";



const conectarDB = async() => {
    let respuesta = "";
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`MongoDB conectado en: ${url}`);
        respuesta = "se ha conectado";

    } catch (error) {
        console.log(`error: ${error.message}`);
        respuesta = "no se pudo conectar";
        process.exit(1);
        
    }
    return respuesta;
};




 export default conectarDB;



