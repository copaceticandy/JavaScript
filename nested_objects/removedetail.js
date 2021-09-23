var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function removeDetail(key){
    if(!(key in instructorData.additionalData.moreDetails)){
        throw ReferenceError("The key you have entered is not valid");
    }
    moreDetailsObj = instructorData.additionalData.moreDetails;
    delete instructorData.additionalData.moreDetails[key];
    return instructorData.additionalData.moreDetails;

}

console.log(removeDetail("favoriteBasketballTeam"));