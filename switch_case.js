day = 'nn';

switch (day) {
    case 'monday':
        console.log("please do work w1");
        break;
    case 'tuesday':
        console.log("please do w2");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("please do w3");
        break;
    case 'friday':
    case 'saturday':
        console.log("please do w4");
        break;
    case 'sunday':
        console.log("please do w5");
        break;


    default:
        console.log("invalid weak days")
        break;
}