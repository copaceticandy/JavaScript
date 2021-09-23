let frames = ["/", "–", "\\", "|"] // spin frames

let i = 0
process.stderr.write("\x1B[?25l") // hide cursor
let t = setInterval(_ => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(frames[i])
    i = (i + 1) % 4;
}, 100);

process.on("SIGINT", _ => {
    clearInterval(t)
    process.stderr.write('\x1B[?25h') // show cursor
    console.log("\n I'm done")
})