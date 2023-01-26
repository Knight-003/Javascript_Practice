const isHaveDrivingLicance = true;
const isvisionok = true;
const isTired = true;

//here are the logical operators
console.log(isHaveDrivingLicance && isvisionok);
console.log(isHaveDrivingLicance || isvisionok);
console.log(!isHaveDrivingLicance || isvisionok);
if (isHaveDrivingLicance && isvisionok && isTired) {

    console.log("you are able to drive");
} else {

    console.log("you are not able to drive ");
}
