const fs = require('fs');
setTimeout(() => {


    fs.writeFile('employes.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Dosya oluşturuldu.')
        }
    })
}, 1000)
setTimeout(() => {
    fs.readFile('employes.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
}, 2000)
setTimeout(() => {
    fs.appendFile('employes.json', '\n{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Dosyaya veri eklendi')
    })
}, 3000)
setTimeout(() => {
    fs.unlink('employes.json', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Dosya başarıyla silindi');
    })
}, 4000)