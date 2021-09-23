var nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

function addCountry(country,capital,pop){
    nestedObject.data.continents.europe.countries[country] = {"capital":capital,"population":pop}
}
addCountry("France","Paris",2000000)
console.log(nestedObject.data.continents.europe);