function now() {
    // return Promise.resolve(new Date()) //first option
    return new Promise(resolve => {
            resolve(new Date());
        }) //second option

}

now().then(resolution => console.log(resolution));