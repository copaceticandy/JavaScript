let dataT;
let data1 = "Sunt praesentium repudiandae qui consectetur modi. Sint praesentium et aut ad odio voluptas recusandae fugiat. Sed voluptate cupiditate occaecati est non voluptatem quis."

let data2 = "Laudantium corrupti delectus laudantium. Quasi harum deleniti earum et fugiat et. Fuga labore odit culpa sint delectus dignissimos hic. Excepturi minima distinctio quia sit unde omnis voluptatibus. Commodi aliquid cumque enim voluptas quibusdam."

function readFile(path, next) {
    // top-secret: you know only the signature
    next(data) // and that the callback is called with `data` in the end
}

function writeFile(path, data, next) {
    // top-secret: you know only the signature
    next() // and that the callback is called in the end
}

readFile("a1.text", function(data) {
    let file = arguments[0];
    setTimeout(() => {
        console.log(`File: ${file} read`);
        console.log(`Data: ${data}`)

        readFile("a2.txt", function(file) {
            setTimeout(() => {
                console.log(`File: ${file} read`)
                console.log(`Data: ${data}`)
            }, Math.random() * 5000)
        });
    }, Math.random() * 5000);
})