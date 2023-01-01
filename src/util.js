// TODO: Add code from here?
// https://javascript.info/file

document.getElementById("choose-file").addEventListener("change", (event) => {
  let selectedFile;
  let reader = new FileReader();

  selectedFile = document.getElementById("choose-file").files[0];
  reader.readAsText(selectedFile);

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.onerror = () => {
    console.log(reader.error);
  };

  // TODO: Tutorial mentions that fetch natively accepts File objects => check into this
});

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
