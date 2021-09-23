function isIPV4Adress(address) {
    let regExp = /^([1-9][0-9]{0,2}.){3}[1-9][0-9]{0,2}$/;
    if (address.match(regExp)) {
        return "This is a valid address"
    }
    throw Error("This is not a valid internet address")
}

console.log(isIPV4Adress("173.456.89.213"));