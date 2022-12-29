const btnSelect = document.getElementById("btnSelect");
const btnInput = document.getElementById("btnInput");
const fileItem = document.getElementById("fileItem");

btnSelect.addEventListener(
  "click",
  (event) => {
    if (fileItem) {
      fileItem.click();
    }
  },
  false
);

fileItem.addEventListener("click", () => {
  console.log("The file item was clicked");
});

btnInput.addEventListener("click", (event) => {
  const selectedFile = getFileSelection();

  selectedFile ? handleFileSelected(selectedFile) : handleNoFileSelected();
});

const getFileSelection = () => {
  //   return document.getElementById("fileItem").files[0];
  return fileItem.files[0];
};

const handleFileSelected = (selectedFile) => {
  console.log(selectedFile);
};

const handleNoFileSelected = () => {
  console.log("No file selected");
};
