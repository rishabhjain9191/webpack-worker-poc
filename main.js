console.log("main script");
const myWorker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

myWorker.addEventListener("message", (event) => {
  console.log(event.data);
  document.getElementById("result").innerHTML += `<p>${event.data}</p>`;
});
