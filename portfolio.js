const lines = [
    "Accessing Bureau Archives...",
    "Identity confirmed: PERSON OF INTEREST",
    "Decrypting case file MDB-001...",
    "WARNING: This file is classified as TOP SECRET.",
    "Accessing case file MDB-001...",
]

let lineIdx = 0, charIdx = 0;
const tw = document.getElementById('typewriter');
const btn = document.getElementById('open-file-btn');


function type(){
  const line = lines[lineIdx];
   
  if(charIdx <= line.length){
    tw.innerText = line.slice(0, charIdx) ;
    charIdx++;
    setTimeout(type, charIdx === 1 ? 400 : 45)
  } else {
    lineIdx++;
    charIdx = 0;
    if(lineIdx < lines.length){
      setTimeout(type, 800);
    }
  }
}

setTimeout(type, 800)

function openFile(){
  const intro = document.getElementById('intro')
  intro.style.transition = 'opacity 0.8s ease';
  intro.style.opacity = '0';
  intro.style.display = 'none';
  
  console.log('button clicked')
}