interface IPerson {
    name: string
}


document.addEventListener("DOMContentLoaded", e => {

    function Fun() : void {
        
        let i : number = 20;
        
        while(i > 0){
            console.log(i);
        }
    }

    function New(): IPerson{
        return {
            name: "Dackla"
        }
    }
    
})