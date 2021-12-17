const express = require('express')
// 다운받은 express 모듈을 가져옴
const app = express()
// express의 함수를 이용해서 새로운 express 앱을 만듬
const port = 5000
// port 번호는 상관 X
const bodyParser = require('body-parser')
// 다운받은 body-parser 모듈을 가져옴
const config = require('./config/key')
const {User} = require('./models/user')
// user 불러옴

app.use(bodyParser.urlencoded({extended:true}));
// application/x-www-form-urlencoded 형식으로 된 것을 분석해서 가져온다는 뜻
app.use(bodyParser.json());
// application/json 형식으로 된 것을 분석해서 가져온다는 뜻

const mongoose = require('mongoose')
// 다운받은 mongoose 모듈을 가져옴
mongoose.connect(config.mongoURI,)
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))
// mongoDB의 connect 정보를 넣어준다 <username>과 <password>를 각각 이름과 비밀번호로 대치한다

app.get('/', (req, res) => {
    res.send('Hello!')
})
// root 디렉토리에서 Hello World를 출력하게

app.post('/register',(req,res)=> {
    // 회원 가입에 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    //user 객체를 생성함
    // { id : "hello", password : "12345" } 이런 식의 json이 담김
    user.save((err,userInfo)=>{
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success:true
        })
        // status 200은 정상이라는 뜻
    })
    //user 모델에 저 값이 저장됨
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// 5000번에서 이 앱을 실행하게 한다
