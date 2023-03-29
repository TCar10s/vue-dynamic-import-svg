const myPromise = new Promise((resolve, _) => setTimeout(() => resolve('foo'), 1000));

// invocar la promesa
myPromise.then((res) => {
  console.log(res);
});
