const initialState = {
    nft:{},
    nftImg:{},
}
export function reducer(state= initialState, action){
    switch(action.type){
        case 'POST_NFT':
            return{
                ...state,
                nft:action.payload
            }
        case 'CLAUDINARY_POST':
            return{
                ...state,
                nftImg:action.payload
            }
            default: return state  
    }

}