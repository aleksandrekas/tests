

async function getPosts() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        
        if(response.ok){
            data.map((user)=>{
                console.log(user.name)

            })
        }else{
            console.log("error :",response.status)
        }

    }catch(error){
        console.log("error connecting to server", error)
    }
}




getPosts()