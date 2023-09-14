URL = ""

db.tipo_documento.insertMany(
    [
        {
            "tipodoc_nombre": "cedula",
            "tipodoc_abreviatura": "CC"
        },
        {
            "tipodoc_nombre": "tarjeta identidad",
            "tipodoc_abreviatura": "TI"
        },
        {
            "tipodoc_nombre": "cedula extranjeta",
            "tipodoc_abreviatura": "CE"
        }
]);



db.usuario.insertMany([
  {
    "usu_nombre": "Juan",
    "usu_segundo_nombre": "Carlos",
    "usu_primer_apellido_usuar": "Pérez",
    "usu_segdo_apellido_usuar": "López",
    "usu_telefono": 1234567890,
    "usu_direccion": "Calle 123",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4d")
  },
  {
    "usu_nombre": "María",
    "usu_segundo_nombre": "Isabel",
    "usu_primer_apellido_usuar": "García",
    "usu_segdo_apellido_usuar": "Martínez",
    "usu_telefono": 9876543210,
    "usu_direccion": "Avenida 456",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4e")
  },
  {
    "usu_nombre": "Pedro",
    "usu_segundo_nombre": "Antonio",
    "usu_primer_apellido_usuar": "López",
    "usu_segdo_apellido_usuar": "Rodríguez",
    "usu_telefono": 5555555555,
    "usu_direccion": "Calle 789",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc48"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc50")
  },
  {
    "usu_nombre": "Luisa",
    "usu_segundo_nombre": "Fernanda",
    "usu_primer_apellido_usuar": "Martínez",
    "usu_segdo_apellido_usuar": "González",
    "usu_telefono": 2223334444,
    "usu_direccion": "Avenida 567",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4c"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc51")
  },
  {
    "usu_nombre": "Carlos",
    "usu_segundo_nombre": "Andrés",
    "usu_primer_apellido_usuar": "Sánchez",
    "usu_segdo_apellido_usuar": "Hernández",
    "usu_telefono": 1112223333,
    "usu_direccion": "Avenida 678",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc52")
  },
  {
    "usu_nombre": "Ana",
    "usu_segundo_nombre": "María",
    "usu_primer_apellido_usuar": "González",
    "usu_segdo_apellido_usuar": "Rodríguez",
    "usu_telefono": 9998887777,
    "usu_direccion": "Calle 890",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc54")
  },
  {
    "usu_nombre": "Manuel",
    "usu_segundo_nombre": "Alejandro",
    "usu_primer_apellido_usuar": "Fernández",
    "usu_segdo_apellido_usuar": "Pérez",
    "usu_telefono": 7778889999,
    "usu_direccion": "Avenida 234",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc55")
  },
  {
    "usu_nombre": "Andrea",
    "usu_segundo_nombre": "Carolina",
    "usu_primer_apellido_usuar": "Gómez",
    "usu_segdo_apellido_usuar": "Hernández",
    "usu_telefono": 6667778888,
    "usu_direccion": "Avenida 345",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc48"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc56")
  },
  {
    "usu_nombre": "Santiago",
    "usu_segundo_nombre": "José",
    "usu_primer_apellido_usuar": "López",
    "usu_segdo_apellido_usuar": "Sánchez",
    "usu_telefono": 4445556666,
    "usu_direccion": "Calle 456",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4d")
  },
  {
    "usu_nombre": "María",
    "usu_segundo_nombre": "Isabel",
    "usu_primer_apellido_usuar": "Pérez",
    "usu_segdo_apellido_usuar": "García",
    "usu_telefono": 3334445555,
    "usu_direccion": "Avenida 567",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc56")
  }
]);



db.especialidad.insertMany([
    { "esp_nombre": "Cardiología" },
  { "esp_nombre": "Dermatología" },
  { "esp_nombre": "Gastroenterología" },
  { "esp_nombre": "Neurología" },
  { "esp_nombre": "Oftalmología" },
  { "esp_nombre": "Oncología" },
  { "esp_nombre": "Ortopedia" },
  { "esp_nombre": "Pediatría" },
  { "esp_nombre": "Psiquiatría" },
  { "esp_nombre": "Urología" }
])

db.cons_nombre.insertMany([
    
        { "cons_nombre": "Consultorio 1" },
        { "cons_nombre": "Consultorio 2" },
        { "cons_nombre": "Consultorio 3" },
        { "cons_nombre": "Consultorio 4" },
        { "cons_nombre": "Consultorio 5" },
        { "cons_nombre": "Consultorio 6" },
        { "cons_nombre": "Consultorio 7" },
        { "cons_nombre": "Consultorio 8" },
        { "cons_nombre": "Consultorio 9" },
        { "cons_nombre": "Consultorio 10" }
      
      
])

med_nombreCompleto, med_consultorio, med_especialidad

db.medico.insertMany([
        {
          "med_nombreCompleto": "Dr. Juan Pérez",
          "med_consultorio": ObjectId("65032e89332eb1f053b5fc49"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc61")
        },
        {
          "med_nombreCompleto": "Dra. María García",
          "med_consultorio": ObjectId("65032e89332eb1f053b5fc49"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc62")
        },
        {
          "med_nombreCompleto": "Dr. Pedro López",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc6c") ,
          "med_especialidad": ObjectId("65033795332eb1f053b5fc63")
        },
        {
          "med_nombreCompleto": "Dra. Laura Fernández",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc6d"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc64")
        },
        {
          "med_nombreCompleto": "Dr. Carlos Rodríguez",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc6e"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc65")
        },
        {
          "med_nombreCompleto": "Dra. Ana Sánchez",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc6f"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc66")
        },
        {
          "med_nombreCompleto": "Dr. Luis Martínez",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc70"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc67")
        },
        {
          "med_nombreCompleto": "Dra. Patricia González",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc71"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc68")
        },
        {
          "med_nombreCompleto": "Dr. Ricardo Pérez",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc72"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc69")
        },
        {
          "med_nombreCompleto": "Dra. María Fernanda",
          "med_consultorio": ObjectId("6503382c332eb1f053b5fc73"),
          "med_especialidad": ObjectId("65033795332eb1f053b5fc6a")
        }
])


db.tipo_documento.insertMany(
    [
        {
            "tipodoc_nombre": "cedula",
            "tipodoc_abreviatura": "CC"
        },
        {
            "tipodoc_nombre": "tarjeta identidad",
            "tipodoc_abreviatura": "TI"
        },
        {
            "tipodoc_nombre": "cedula extranjeta",
            "tipodoc_abreviatura": "CE"
        }
]);



db.usuario.insertMany([
  {
    "usu_nombre": "Juan",
    "usu_segundo_nombre": "Carlos",
    "usu_primer_apellido_usuar": "Pérez",
    "usu_segdo_apellido_usuar": "López",
    "usu_telefono": 1234567890,
    "usu_direccion": "Calle 123",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4d")
  },
  {
    "usu_nombre": "María",
    "usu_segundo_nombre": "Isabel",
    "usu_primer_apellido_usuar": "García",
    "usu_segdo_apellido_usuar": "Martínez",
    "usu_telefono": 9876543210,
    "usu_direccion": "Avenida 456",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4e")
  },
  {
    "usu_nombre": "Pedro",
    "usu_segundo_nombre": "Antonio",
    "usu_primer_apellido_usuar": "López",
    "usu_segdo_apellido_usuar": "Rodríguez",
    "usu_telefono": 5555555555,
    "usu_direccion": "Calle 789",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc48"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc50")
  },
  {
    "usu_nombre": "Luisa",
    "usu_segundo_nombre": "Fernanda",
    "usu_primer_apellido_usuar": "Martínez",
    "usu_segdo_apellido_usuar": "González",
    "usu_telefono": 2223334444,
    "usu_direccion": "Avenida 567",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4c"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc51")
  },
  {
    "usu_nombre": "Carlos",
    "usu_segundo_nombre": "Andrés",
    "usu_primer_apellido_usuar": "Sánchez",
    "usu_segdo_apellido_usuar": "Hernández",
    "usu_telefono": 1112223333,
    "usu_direccion": "Avenida 678",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc52")
  },
  {
    "usu_nombre": "Ana",
    "usu_segundo_nombre": "María",
    "usu_primer_apellido_usuar": "González",
    "usu_segdo_apellido_usuar": "Rodríguez",
    "usu_telefono": 9998887777,
    "usu_direccion": "Calle 890",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc54")
  },
  {
    "usu_nombre": "Manuel",
    "usu_segundo_nombre": "Alejandro",
    "usu_primer_apellido_usuar": "Fernández",
    "usu_segdo_apellido_usuar": "Pérez",
    "usu_telefono": 7778889999,
    "usu_direccion": "Avenida 234",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc55")
  },
  {
    "usu_nombre": "Andrea",
    "usu_segundo_nombre": "Carolina",
    "usu_primer_apellido_usuar": "Gómez",
    "usu_segdo_apellido_usuar": "Hernández",
    "usu_telefono": 6667778888,
    "usu_direccion": "Avenida 345",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc48"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc56")
  },
  {
    "usu_nombre": "Santiago",
    "usu_segundo_nombre": "José",
    "usu_primer_apellido_usuar": "López",
    "usu_segdo_apellido_usuar": "Sánchez",
    "usu_telefono": 4445556666,
    "usu_direccion": "Calle 456",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc47"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4a"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc4d")
  },
  {
    "usu_nombre": "María",
    "usu_segundo_nombre": "Isabel",
    "usu_primer_apellido_usuar": "Pérez",
    "usu_segdo_apellido_usuar": "García",
    "usu_telefono": 3334445555,
    "usu_direccion": "Avenida 567",
    "usu_tipodoc": ObjectId("65032e89332eb1f053b5fc49"),
    "usu_genero": ObjectId("65032f5f332eb1f053b5fc4b"),
    "usu_acudiente": ObjectId("650330f5332eb1f053b5fc56")
  }
]);

cit_fecha, cit_estadoCita, cit_estadoCita


db.estado_cita.insertMany([
    { "estcita_nombre": "Pendiente" },
    { "estcita_nombre": "En Espera" },
    { "estcita_nombre": "Cancelada" },
    { "estcita_nombre": "Finalizada" }
])

db.cita.insertMany([
  {
    "cit_fecha": ISODate("2023-01-01T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc75"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc57")
  },
  {
    "cit_fecha": ISODate("2023-01-02T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc76"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc58")
  },
  {
    "cit_fecha": ISODate("2023-01-03T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc80"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc77"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc59")
  },
  {
    "cit_fecha": ISODate("2023-01-04T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc81"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc78"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5a")
  },
  {
    "cit_fecha": ISODate("2023-01-05T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc79"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5b")
  },
  {
    "cit_fecha": ISODate("2023-01-06T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc80"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc7a"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5c")
  },
  {
    "cit_fecha": ISODate("2023-01-07T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc7b"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5d")
  },
  {
    "cit_fecha": ISODate("2023-01-08T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc7c"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5e")
  },
  {
    "cit_fecha": ISODate("2023-01-09T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc7f"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc7c"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc5f")
  },
  {
    "cit_fecha": ISODate("2023-01-10T00:00:00.000Z"),
    "cit_estadoCita": ObjectId("65033d57332eb1f053b5fc81"),
    "cit_medico": ObjectId("65033b21332eb1f053b5fc7d"),
    "cit_datosUsuario": ObjectId("65033632332eb1f053b5fc60")
  }
]
)

db.cita.aggregate([
    {
      $lookup: {
        from: "usuario", 
        localField: "_id", 
        foreignField: "cit_datosUsuario", 
        as: "usuario" 
      }
    }
  ]);

  db.cita.aggregate([
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
      $project: {
        "usu_nombre": 1,
      }
    }
  ]);

  db.cita.aggregate([
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
            "cit_fecha": ISODate("2023-01-02T00:00:00.000Z")
        }
    },
    {
        $project: {
            "usuario.usu_nombre": 1 
        }
    }
]);

db.medico.aggregate([
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
        "especialidad.esp_nombre": "Dermatología"
      }
    },
    {
      $project: {
        "especialidad.esp_nombre": 1
      }
    }
  ]);

  db.medico.aggregate([
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
        "especialidad.esp_nombre": "Dermatología"
      }
    }
  ]);


  db.cita.aggregate([
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
]);