import express from 'express';
import mongo from 'mongodb';
import dovte from 'dotenv';
const server = express();

dovte.config();

const url1 = process.env.MONGO_URI;
const puerto = process.env.PORTO
const client = new mongo.MongoClient(url1);


client.connect();
const basedatos = client.db("microCl")

const getlistarPacientes = async (req, res) => {
    const coleccion = basedatos.collection('usuario');
    const Resultado = await coleccion.find().sort({ "usu_nombre": 1 }).toArray();
    res.json(Resultado);
}

const getFecha = async (req, res) => {
    const coleccion = basedatos.collection('cita');
    const Resultado = await coleccion.aggregate([
        {
            $lookup: {
                from: "usuario", 
                localField: "cit_datosUsuario", 
                foreignField: "_id", 
                as: "usuario" 
            }
        },
        {
            $unwind: "$usuario" 
        },
        /*         {
                $sort: {
                  "usuario.usu_nombre": 1
                }}, */
    
        {
            $match: {
                "cit_fecha": new Date("2023-01-02T00:00:00.000Z")
            }
        },
        {
            $project: {
                "usuario.usu_nombre": 1 
            }
        }
    ]).toArray();
    res.json(Resultado);
}

const getEspecialidad = async (req, res)=>{
    const coleccion = basedatos.collection('medico');
    const Resultado = await coleccion.aggregate([
        {
          $lookup: {
            from: "especialidad",
            localField: "med_especialidad",
            foreignField: "_id",
            as: "especialidad"
          }
        },
        {
          $unwind: "$especialidad"
        },
        {
          $match: {
            "especialidad.esp_nombre": "Cardiología"
          }
        },
        {
          $project: {
            "especialidad.esp_nombre": 1
          }
        }
      ]).toArray();
    res.json(Resultado);
}

const getCitaPaciente = async (req, res) => {
    const coleccion = basedatos.collection('cita');
    const Resultado = await coleccion.aggregate([
        {
            $lookup: {
                from: "usuario", 
                localField: "cit_datosUsuario", 
                foreignField: "_id", 
                as: "usuario" 
            }
        },
        {
            $unwind: "$usuario" 
        },
    
        {
            $match: {
                "usuario._id": ObjectId("65033632332eb1f053b5fc57")
            }
        },
    ]).toArray();
    res.json(Resultado);
}

/* Rutas */
server.get('/listarPacientes', getlistarPacientes); //1
server.get('/fechaPacientes', getFecha); //2
server.get('/especialidad', getEspecialidad); //3
server.get('/citaPaciente', getCitaPaciente); //4

server.listen(4004, console.log("Se escucha pai"))