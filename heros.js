var express = require('express');
var app = express();
var router = express.Router();


app.use(router)
var heros = [
    {name:'于飞',age:22,dec:'巾帼不让须眉',heroId:0},
    {name:'王宇航',age:22,dec:'巾帼不让须眉',heroId:1},
    {name:'周超',age:22,dec:'帅不帅',heroId:2},
]


router.get('/login',function(req,res){
    var {username,password} = req.query
    if(password == 123456){
        res.json({
            code:200,
            token:'dafsdrewrqwer' + new Date().getTime(),
            msg:'登陆成功'
        })
    }else{
        res.json({
            code:210,
            token:null,
            msg:'密码不对'
        })
        
    }
    
})


router.get('/addHeros',function(req,res){

    var {name,age,dec,heroId} =  req.query;
    var hero = {name:name,age:age,dec:dec,heroId:heroId};
    heros.push(hero);
    

    res.json({
        code:200,
        msg: '添加成功'
    })
    console.log(heros);
})

router.get('/deletHero',function(req,res){

    var {name,age,dec,heroId} =  req.query;
   
    heros.pop();

    res.json({
        code:200,
        msg: '删除成功'
    })
    console.log(heros);
})

app.listen(3000)