import Sucursal from '../models/Sucursal';
 
//insertar (POST)
export async function createDoctor(req, res) {
   const {nomdoctor,apelldoctor,dnidoctor,telldoctor,emaildoctor,dirdoctor, espdoctor,clinicidad,clinicaid} = req.body;
   try {
    let newDoctor = await Doctor.create({
        nomdoctor,
        apelldoctor,
        dnidoctor,
        telldoctor,
        emaildoctor,
        dirdoctor,
        espdoctor,
        clinicidad
    },{
        fields:['nomdoctor','apelldoctor','dnidoctor', 'telldoctor','emaildoctor','dirdoctor','espdoctor','clinicaid']
    });
    if(newSucursal){
        const doctor = await Doctor.findOne({
            include:["doctor"],
            where:{
                id:newSucursal.id
            }
        });
        res.json({
         message: "Doctor creado correctamente",
         data:doctor
        });
    }      
   } catch (error) {
       res.status(500).json({
           message:"Un error a ocurrido",
           data:{}
       });
   }  
}
//seleccionar todo
export async function getDoctor(req, res) {
    try {
        const doctor = await Doctor.findAll({
            include:["doctor"]
        });
        res.json({
            message: "doctor obtenido correctamente",
        data:sucursals
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Seleccionar una sucursal por id (GET)
export async function getOneDoctor(req, res) {
    const {id} = req.params;
    try {
        const doctor = await Doctor.findOne({
            where:{
                id
            },
            include:["doctor"]
        });
        res.json({
            message: "Doctor obtenido correctamente",
            data: doctor
        });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Actualizar (PUT)
export async function updateSucursal(req, res) {
    const {id} = req.params;
    try {
        const {nomsucursal,dirsucursal,telsucursal,nrosillas,clinicaid} = req.body;
    const sucursals = await Sucursal.findAll({
        attributes:['id','nomdoctor','apelldoctor','dnidoctor','telldoctor','emaildoctor','dirdoctor','espdoctor','clinicidad'],
        where:{
            id
        }
    });
    if(sucursals.length>0){
        sucursals.forEach(async sucursal =>{
            await doctor.update({
                nomdoctor,
                apelldoctor,
                dnidoctor,
                telldoctor,
                emaildoctor,
                dirdoctor,
                espdoctor,
                clinicidad
            })
        });
       
        }
        res.json({
            message: "Doctores actualizadas exitosamente",
            data: doctors
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Eliminar por ID (DELETE)
export async function deleteSucursal(req, res) {
    const {id} = req.params;
    try {
        const deleteRowCount = Doctor.destroy({
            where:{
                id
            }
        });
        res.json({
            message: "Doctor eliminado exitosamente",
            count: deleteRowCount,
            data:{}
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
