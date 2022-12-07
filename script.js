let secNavDM = document.getElementById('secnav');
let sNavDDM = document.getElementById('secnavAction');
let nxtArrID = document.querySelector('.rt-arrow-id');
let PswrdField = document.querySelector('.PWField');
let IdtfField = document.querySelector('.IDField');
let inputID = document.getElementById('IDInp');
let inputPW = document.getElementById('PWInp');
let bodyDM = document.querySelector('.bodyScrlTgl');
let cnfrmCntnr = document.querySelector('.login-cnfrm-cntnr');
let cnfrmBtn = document.querySelector('.lgn-cnfrm-btn');
let inpIDLen = null;
let PWFldTrg = false;
let idlencndt = false;

sNavDDM.onclick = () => {
  secNavDM.classList.toggle('active');
}

cnfrmBtn.onclick = () => {
  cnfrmCntnr.style.display = "none";
  bodyDM.classList.remove('bodyScrlTgl');
}



inpIDTrg = () => {
  let inputIDVal = inputID.value;
  if (PWFldTrg === false) {
    inpIDLen = inputIDVal.length;
  }
  // inpIDLen = inputIDVal.length;

  if (inputIDVal.length >= 1) {
    // nxtArrID.style.zIndex = "70";
    nxtArrID.classList.add('rtArr-Trg');
  } else {
    // nxtArrID.style.zIndex = "20";
    nxtArrID.classList.remove('rtArr-Trg');
    PswrdField.classList.remove('PWField-Trg');
    inputID.classList.remove('inpIDBRTrg');
    nxtArrID.classList.remove('rtArrIDTrg');
    inputPW.value = '';
  }


  if (idlencndt === true) {
    inpIDLen = inputIDVal.length;
  }

//   document.querySelector('.checkbox-text').innerText = inpIDLen + ' : ' + inputIDVal.length;

  if (inputIDVal.length !== inpIDLen) {
    // console.log("Hello");
    PswrdField.classList.remove('PWField-Trg');
    nxtArrID.classList.remove('rtArrIDTrg');
    inputID.classList.remove('inpIDBRTrg');
    inputPW.value = '';
    idlencndt = true;
    // inpIDLen = inputIDVal.length;
  }
  // inpIDLen = inputID.value.length;

}

inpPWTrg = () => {
  let inputPWVal = inputPW.value;
  nxtArrPW = document.querySelector('.submit-button');

  if (inputPWVal.length >= 1) {
    // nxtArrID.style.zIndex = "70";
    nxtArrPW.classList.add('rtArr-Trg');
  } else {
    // nxtArrID.style.zIndex = "20";
    nxtArrPW.classList.remove('rtArr-Trg');
  }

}

nxtArrID.onclick = () => {
  PswrdField.classList.add('PWField-Trg');
  inputID.classList.add('inpIDBRTrg');
  nxtArrID.classList.add('rtArrIDTrg');
  inputPW.focus();
  inpIDLen = inputID.value.length;
  PWFldTrg = true;
  idlencndt = false;
}