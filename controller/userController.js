const db=require('../databaseConfig.js')

exports.homePage = (req, res)=>{
    res.render('index')
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
        res.redirect("/welcome")
    }
    })
}

// exports.getLogin= (req, res)=>{
//     res.render('login')
// }


// exports.getWelcome=(req, res)=>{
//     let email = req.body.email
//     let password = req.body.password
//     let sql = 'select * from student where email = ? and password = ?'
//     db.query(sql, [email, password], (err, result)=>{
//         if(err) throw err
//     else{
//         if(result.length > 0){
//             res.redirect('/api/welcome')
//         }else{
//             res.redirect('/api/login')
//         }
//     }
//     })
// }



// exports.welcomePage= (req, res)=>{
//     res.render( 'welcome')
// }
