import Cookies from 'js-cookie'
import {request} from './APICall'


export const isAuthenticated = () => {
    return new Promise((resolve, reject)=>{
        request('GET', 'api/is-authenticated', {}, {})
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}

export const logout = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}

export const getFormationOptions = (roleLst)=>{

    const newLst = []
    if (roleLst.length === 0) {return newLst}
    roleLst.forEach(role=>{newLst.push({value:role.type, label:role.type})})
    return newLst
} 

export const createStringHeader = (optionSelected)=>{
    if(optionSelected.length === 0) return ''
    const roleStringLst = optionSelected.map(option=>{
        return option.value;
    })
    return roleStringLst.join(" ").toString()
}

export const getRankAbbrev = (rank) => {
    if (rank === 'District Constable') return 'DC'
     if (rank === 'Constable') return 'Cons.'
     if (rank === 'Corporal') return 'Cpl.'
     if (rank === 'Sergeant') return 'Sgt.'
     if (rank === 'Inspector') return 'Insp.'
     if (rank === 'Assisstant Superintendent of Police') return 'ASP'
     if (rank === 'Deputy Superintendent of Police') return 'DSP'
     if (rank === 'Superintendent of Police') return 'SP'
     if (rank === 'Senior Superintendent of Police') return 'SSP'
     if (rank === 'Assisstant Commissioner of Police') return 'ACP'
     if (rank === 'Deputy Commissioner of Police') return 'DCP'
     if (rank === 'Commissioner of Police') return 'CP'
     return rank
 }

 export const stickyNavBar = () =>{
    window.addEventListener('scroll',()=>{
        
        // grab the footer and nav bar elements
        const footer = document.getElementById('footer')
        const navBar = document.getElementById('navBar')

     
        const navPos = navBar.getBoundingClientRect()
       
        const footPos = footer.getBoundingClientRect()


        let footerTop = footPos.top
        let navBottom = navPos.bottom

        if(footerTop >= navBottom){
           
                navBar.style.position = 'fixed'
            
           
        }else{
                navBar.style.position = 'absolute'
            
           
        }
        console.log('footer '+footerTop)
        console.log('navBottom'+navBottom)
    })
 }