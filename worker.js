console.log("hello from worker");

console.log(self);

import("./my-module-2").then((mod) => {
  console.log(mod);
  console.log(self);
  self.postMessage("module 2");
  // self.port.postMessage("module 2");
});

import("./my-module-3").then((mod) => {
  console.log("*****************module3******************");
  console.log(mod);
  self.postMessage("module 3");
});

const a = import("./my-module");
a.then((mod) => {
  console.log(mod);
  self.postMessage("module 1");
});
