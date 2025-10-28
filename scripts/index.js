const fr = new FileReader();
const display = document.querySelector('.display');
let importedChar = {}; 
fr.addEventListener('load', (e) => {
  const readFile = fr.result;
  console.log(typeof readFile + `\n` + readFile);
  if (readFile.includes('data:image')) {
    display.innerHTML += `<img src="${readFile}">`;
  } else {
    importedChar = JSON.parse(readFile);
    display.innerHTML += `<div>${readFile}</div>`;
  }
  console.log(importedChar);
  
});

const loadCharInput = document.querySelector('.char-input-js');
loadCharInput.addEventListener('change', (e) => {
  const file = loadCharInput.files[0];
  console.log(`file.type is ${file.type}`);
  
  if (!file) console.warn(`file is ${file}`);
  else if (file.type.includes('image')) {
    fr.readAsDataURL(file);
  }
  else if (file.type.includes('text') || file.type.includes('json')) {
    fr.readAsText(file);
  }
  else {
    console.warn('Unkown File Type. Please Try Something Else.');
  }
});


