export const isAuthenticated = () =>{
    //vete al localstorage y verifica si esta la clave token
    return localStorage.getItem("token") ? true : false
}
