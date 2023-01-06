// Source example: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
const fileInput = document.getElementById("choose-file");
const fileImport = document.getElementById("input-file");
let apiRequestBody;

const readFileInput = (callback) => {
  const file = fileInput.files.item(0);
  const reader = new FileReader();

  reader.onload = () => {
    callback(reader.result);
  };

  reader.readAsText(file);
};

const handleFileInput = (result) => {
  const request = processFileInput(result);
  console.log(request);
  apiRequestBody = request;
  console.log("check", apiRequestBody);
  if (apiRequestBody) fileImport.disabled = false;
};

const processFileInput = (result) => {
  console.log("Reached processFileInput");
  console.log(result);
  const env = "Dev";
  let data = { env: "", records: [] };
  return data;
};

fileInput.addEventListener("change", (event) => {
  readFileInput(handleFileInput);
});

fileImport.addEventListener("click", (event) => {});

// TODO: Add code from here?
// https://javascript.info/file

// let selectedFile;

// document.getElementById("choose-file").addEventListener("change", (event) => {
//   let reader = new FileReader();

//   selectedFile = document.getElementById("choose-file").files[0];
//   reader.readAsText(selectedFile);

//   reader.onload = () => {
//     console.log(reader.result);
//   };

//   reader.onerror = () => {
//     console.log(reader.error);
//   };
// });

// document.getElementById("input-file").addEventListener("click", (event) => {
//   const data = processInputFile(selectedFile);
//   // postData(data);
// });

// const processInputFile = (fileInput) => {
//   console.log("What's the file input", fileInput);
//   let data = { env: "", records: [] };
//   const reader = new FileReader();
//   reader.readAsText(fileInput);

//   // TODO: How to defeat this asynchronous process??
//   // Potential? https://developer.mozilla.org/en-US/docs/Web/API/FileReader
//   reader.onload = () => {
//     const result = reader.result;
//     const dataArray = result.split("\r\n");
//     const columnLabels = dataArray.shift().split("|");
//     const columnHeaders = {};
//     const records = [];

//     columnLabels.forEach((label, index) => {
//       columnHeaders[index] = label;
//     });

//     do {
//       let record = {};
//       let rawRecord = dataArray.pop();

//       rawRecord.split("|").forEach((item, index) => {
//         record[columnLabels[index]] = item === "[NULL]" ? "" : item;
//       });
//       records.push(record);
//     } while (dataArray.length > 0);

//     console.log(records);
//     data = { ...columnHeaders, records: records };
//   };

//   console.log(data);

//   return {
//     env: "Dev",
//     records: [
//       { name: "Mario", type: "cow" },
//       { name: "Rucola", type: "tabby" },
//     ],
//   };
// };

// const postData = (data) => {
//   fetch("http://localhost:5001/file-import/", {
//     method: "POST",
//     mode: "no-cors",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   // TODO: Add handling of resolved/rejected promise
// };
