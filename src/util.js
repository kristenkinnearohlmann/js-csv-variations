console.log("Hello world");

const btnInput = document.getElementById("btnInput");
btnInput.addEventListener("click", (event) => {
  console.log("In button click");
  handleSelectedFile();
});

const handleSelectedFile = () => {
  const selectedFile = document.getElementById("fileItem").files[0];
  console.log(selectedFile);
  console.log("File retrieved");
};
