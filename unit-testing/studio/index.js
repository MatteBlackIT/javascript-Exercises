
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(n){
        if(n%2===0){
            return 'Launch!';
        }
        
        if(n%3===0){
            return 'Code!'
        }

        if(n%5===0){
            return 'Rocks!'
        }
        
        if(n%2===0 && n%3===0){
            return 'LaunchCode!'
        }
        
    }
};

function launchOutput(n){

}

module.exports = launchcode;
