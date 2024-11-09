

    export default async function CreateUser(user, password){
        
        let proceed = false; 

        console.log(user, password);

        try{
            const data = {
                name: user,
                password: password,
            };
            const create = await fetch("http://localhost:8182/createUser",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            });
            if(create.status == 200){
                proceed = true;
            }
        }
        catch(err){
            console.log("erro com ao criar usuário");
            proceed = false;
        }

        return(proceed);

    }