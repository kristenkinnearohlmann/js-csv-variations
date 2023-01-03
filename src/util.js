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
  postData(selectedFile);
});

const postData = (fileInput) => {
  // TODO: Tutorial mentions that fetch natively accepts File objects => check into this
  console.log("Reached file input");
  console.log(selectedFile);

  const formData = new FormData();
  formData.append("title", "My file I uploadd");
  formData.append("file", selectedFile);

  fetch("http://localhost:5001/file-import/", {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
  // TODO: Add handling of resolved/rejected promise
};

// const btnSelect = document.getElementById("btnSelect");
// const btnInput = document.getElementById("btnInput");
// const fileItem = document.getElementById("fileItem");

// btnSelect.addEventListener(
//   "click",
//   (event) => {
//     if (fileItem) {
//       fileItem.click();
//     }
//   },
//   false
// );

// fileItem.addEventListener("change", () => {
//   console.log("The thing changed");
//   console.log(fileItem.files[0].name);
//   document.getElementById("fileNameDisplay").value = fileItem.files[0].name;
// });

// btnInput.addEventListener("click", (event) => {
//   const selectedFile = getFileSelection();

//   selectedFile ? handleFileSelected(selectedFile) : handleNoFileSelected();
// });

// const getFileSelection = () => {
//   //   return document.getElementById("fileItem").files[0];
//   return fileItem.files[0];
// };

// const handleFileSelected = (selectedFile) => {
//   console.log(selectedFile);
// };

// const handleNoFileSelected = () => {
//   console.log("No file selected");
// };
