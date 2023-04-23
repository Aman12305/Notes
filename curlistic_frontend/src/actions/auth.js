import * as api from '../api'

export const login = async(_data) =>{
    try{
        const {data} = await api.logIn(_data);
        localStorage.setItem('Profile',JSON.stringify(data.data))
        return data.data

    }catch(error){
        console.log(error.message)
        return error
    }
}

export const signup = async(_data) =>{
    try{
        const {data} = await api.signUp(_data);
        localStorage.setItem('Profile',JSON.stringify(data.data))
        return data.data

    }catch(error){
        console.log(error.message)
        return error
    }
}

export const logOut = () =>{
    localStorage.removeItem('Profile')
}