function main() {
  if (process.env.SHOW_HELLO === 'true') {
    console.log('Hello, world!');
  } else {
    console.log("Well, doesn't matter -- Hello World anyway");
  }
}

main();
