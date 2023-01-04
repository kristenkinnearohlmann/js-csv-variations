// TODO: Add code from here?
// https://javascript.info/file

let selectedFile;

document.getElementById("choose-file").addEventListener("change", (event) => {
  let reader = new FileReader();

  selectedFile = document.getElementById("choose-file").files[0];
  reader.readAsText(selectedFile);

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.onerror = () => {
    console.log(reader.error);
  };
});

document.getElementById("input-file").addEventListener("click", (event) => {
  const data = processInputFile(selectedFile);
  postData(data);
});

const processInputFile = (fileInput) => {
  console.log("What's the file input", fileInput);
  return {
    env: "Dev",
    records: [
      { name: "Mario", type: "cow" },
      { name: "Rucola", type: "tabby" },
    ],
  };
};

const postData = (data) => {
  fetch("http://localhost:5001/file-import/", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // TODO: Add handling of resolved/rejected promise
};
