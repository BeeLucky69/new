const f = ["file1.txt","file2.txt","file3.txt"]

function loadFiles(files,callback) {
    let newarr = []

    for (let i = 0; i < files.length; i++){
        newarr.push(files[i])
    }
    for (let x = 0; x < newarr.length; x++){
        readFile(newarr[x], callback)
    }
}

function readFile(file, callback) {
    setTimeout(()=>{
       callback('Content of ' + file)
    },1000)
}


loadFiles(f,(results)=>{
    console.log(results);
})