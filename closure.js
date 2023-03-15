function refreshToken(number){
    
    console.log("Ádas")
    return new Promise(resolve=>
    {   
        setTimeout(()=>
        resolve("You are the light" +number)
        ,number*1000)
    })
}

const closureRequestApi = ()=>{

    let request= null;
    const requestApi= async(number)=>{

        console.log(number)
        request= request? request: refreshToken(number)
        const data= await request
        
        console.log(data);
        request=null
    }
    return requestApi;
}

const aa= closureRequestApi();

module.exports= aa;




