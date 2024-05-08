const db=require('../databaseConfig.js')

exports.homePage = (req, res)=>{
    res.sendFile(__dirname + '/index.html')
}

exports.saveData= (req, res)=>{
    let name = req.body.name
    let email = req.body.email
    let age = req.body.age
    let image = req.file.filename
    let password = req.body.password
    let value = [[name, email, age, password, image]]
    let sql = 'insert into student(name, email, age, password, image) values ?'
    db.query(sql, [value], (err, result)=>{
        if(err) throw err
    else{
        res.send("data saved")
    }
    })
}

exports.getLogin= (req, res)=>{
    res.sendFile(__dirname + '/login.html')
}


exports.getWelcome=(req, res)=>{
    let email = req.body.email
    let password = req.body.password
    let sql = 'select * from student where email = ? and password = ?'
    db.query(sql, [email, password], (err, result)=>{
        if(err) throw err
    else{
        if(result.length > 0){
            res.redirect('/api/welcome')
        }else{
            res.redirect('/api/login')
        }
    }
    })
}



exports.welcomePage= (req, res)=>{
    res.sendFile(__dirname + '/welcome.html')
}
