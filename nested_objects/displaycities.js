
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


function displayCities() {
    for (var i = 0; i < instructorData.additionalData.moreDetails.citiesLivedIn.length; i++) {
        console.log(instructorData.additionalData.moreDetails.citiesLivedIn[i]);
    }
}
console.log(displayCities());