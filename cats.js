// the following program uses an API call to fetch a random gif of a cat.
// uses of async/await and outputs the image URL in the console.
async function getUrl() {
    try {
        const result = await fetch("https://api.thecatapi.com/v1/images/search");
        const res = await result.json();
        console.log(res[0].url); 
    }
    catch (error){
        console.log('Error')
    }
}
getUrl() //calls the function 

