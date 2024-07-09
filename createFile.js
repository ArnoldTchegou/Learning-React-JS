//create file and write inside
//Import fileSystem module fs
const { isUtf8 } = require('buffer');
const fs = require('fs');
const file = 'new.txt';
const mode = 'w'
//open file in w -mode => create the file and write in file
fs.open(file, mode, function (err, fd){
    if(err){
        console.log('cannot open file '+ file +'\n', err.message);
    }
    else{
        console.log('file opened sucessfully!')
        fs.write(fd, 'Hello word', null, isUtf8, (err, data)=>{
            if(err){
                console.log('cannot write in file '+ file +'\n', err.message);
            }
            else{
                console.log('operation successful!');
            }
        });
    }

    //close file
    fs.close(fd, (err)=>{
        if(err){
            console.log('cannot close file '+ file +'\n', err.message);
        }
        else{
            console.log('file closed successfully!');
        }
    });
});

