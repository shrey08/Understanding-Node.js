fs=require('fs');

function phoneNo(err,data)
{
    console.log('data:', data);
}
fs.readdir('c:/',phoneNo);
console.log('This comes after');