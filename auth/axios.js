import axios from 'axios'

function CreatAxios (){

        return (
                axios.create({
                baseURL:process.env.NEXT_PUBLIC_BASE_URL,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Headers': '*',// j'ai galeré pour resoudre le probleme cros polycy a cause de sa
                    'Access-Control-Allow-Credentials': true
                }
            })
        )


}

  

const api = CreatAxios()

export default api

