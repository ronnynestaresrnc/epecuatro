import axios from "axios"

const useCourseAdd = (data) =>{
    //desustur
    axios.post("",{
        nombre:"dd",
        tutor :"lala",
        duracion : "diid",
        precio:222,
        idespecialidad:1,
        valoracion:2
    }).then(res=>console.log(res)).catch(e=>console.log(e))
}
 export default useCourseAdd