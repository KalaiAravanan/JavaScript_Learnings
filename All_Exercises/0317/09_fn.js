function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));