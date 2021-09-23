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

function addDetail(key,value){
    instructorData.additionalData.moreDetails[key] = value;
    return instructorData.additionalData.moreDetails;
}

console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));