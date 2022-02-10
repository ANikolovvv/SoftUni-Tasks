

function solve(){
    let arr=["Van@ia", "ivanova", "Zhivkova"]
    if(arr.includes('ivanova')){
        throw new Error('yes')
    }
}
 try{
    solve()
 }catch(err){
    console.error(err);
 }