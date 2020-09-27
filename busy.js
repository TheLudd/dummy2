const start = Date.now()

do {

} while ((Date.now() - start) < 5000)

console.log(`Job ${process.argv[2]} done`)
