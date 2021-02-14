export const Create = (obj) => async (dipatch)=>{
    try {
        console.log("CI Action Clicked");
        dipatch({
            type:'CREATE_CI',
            payload:'obj',
        })
    }
    catch (err) {
        dispatchEvent({
            type:'Error',
        });
    }
}