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
  // TODO: Ensure all lines have the same number of elements, based on header
  // TODO: Can this be split out?
  // TODO: Or can this be driven full off import button click?
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
