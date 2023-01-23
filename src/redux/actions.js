
export function PostNFT(payload) {
    if(payload.nombre && payload.image && payload.descripcion){
        return {
            type: 'POST_NFT',
            payload: {
                metadata: {
                    name: payload.nombre,
                    image: payload.image,
                    description: payload.descripcion
                },
                attributes: [
                    {
                        trait_type: payload.propiedad_1,
                        value: payload.value_1
                    },
                    {
                        trait_type: payload.propiedad_2,
                        value: payload.value_2
                    },
                    {
                        trait_type: payload.propiedad_3,
                        value: payload.value_3
                    },
    
                ]
    
            }
        }
    }else{
        alert('Error de minteo, falta de datos')
    }
}
export function claudinaryPost(payload) {
    return async function (dispatch) {
        const data = new FormData();
        data.append("file", payload);
        data.append("upload_preset", "challenge_web3");
        data.append("cloud_name", "dhedsktxa");

        return await fetch("https://api.cloudinary.com/v1_1/dhedsktxa/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'CLAUDINARY_POST',
                    payload: json.url
                })
            })
    }

}

export function Reset(){
    return{
        type:"RESET",
    }
}