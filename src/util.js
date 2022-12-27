const btnInput = document.getElementById("btnInput");
btnInput.addEventListener("click", (event) => {
  const selectedFile = getFileSelection();

  selectedFile ? handleFileSelected(selectedFile) : handleNoFileSelected();
});

const getFileSelection = () => {
  return document.getElementById("fileItem").files[0];
};

const handleFileSelected = (selectedFile) => {
  console.log(selectedFile);
};

const handleNoFileSelected = () => {
  console.log("No file selected");
};
