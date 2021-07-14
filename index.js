// Code your solution here
function findMatching(drivers, string){
    let matches = drivers.filter(name => {
        if (name.toUpperCase() == string.toUpperCase()){
            return name;
        }
    })
    return matches;
}

function fuzzyMatch(drivers, string){
    let matches = drivers.filter(name => {
        if(name.charAt(0).toUpperCase() == string.charAt(0).toUpperCase()){
            return name;
        }
    });
    return matches;
}

function matchName(drivers, string){
    return drivers.filter(key => key.name == string );
}