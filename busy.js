const start = Date.now()

console.time(`Job ${process.argv[2]} done`)
function fib (n) {
  if (n < 2) return 1

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(42))
console.timeEnd(`Job ${process.argv[2]} done`)
