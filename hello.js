function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  for (let i = 0; i < 5; i++) {
    console.log(`Waiting ${i} seconds...`);
    await sleep(i * 1000);
  }
  console.log("Done");
}

async function hello() {
  a = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    await sleep( 100);
  }
}

hello();
