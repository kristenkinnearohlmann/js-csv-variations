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
  // TODO: Add validity check
  apiRequestBody = request;
  if (apiRequestBody.env !== "" && apiRequestBody.records.length > 0)
    fileImport.disabled = false;
};

const processFileInput = (result) => {
  const env = "Dev";
  let responseBody = { env: env, records: [] };

  const dataArray = result.split("\r\n");
  const columnLabels = dataArray.shift().split("|");
  const columnHeaders = {};
  const records = [];

  columnLabels.forEach((label, index) => {
    columnHeaders[index] = label;
  });

  do {
    let record = {};
    let rawRecord = dataArray.pop();

    rawRecord.split("|").forEach((item, index) => {
      record[columnLabels[index]] = item === "[NULL]" ? "" : item;
    });
    records.push(record);
  } while (dataArray.length > 0);

  responseBody = { ...responseBody, records: records };
  return responseBody;
};

fileInput.addEventListener("change", (event) => {
  readFileInput(handleFileInput);
});

fileImport.addEventListener("click", async (event) => {
  const request = {
    msg: "Data to import",
    ...apiRequestBody,
  };

  const response = await fetch("http://localhost:5001/file-import/", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  console.log(data);
});

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
