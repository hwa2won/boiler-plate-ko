const express = require('express')
// 다운받은 express 모듈을 가져옴
const app = express()
// express의 함수를 이용해서 새로운 express 앱을 만듬
const port = 5000
// port 번호는 상관 X

const mongoose = require('mongoose')
// 다운받은 mongoose 모듈을 가져옴
mongoose.connect('mongodb://hwa2won:Ghkdnjs06@boilerplate-shard-00-00.ya6ew.mongodb.net:27017,boilerplate-shard-00-01.ya6ew.mongodb.net:27017,boilerplate-shard-00-02.ya6ew.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2210tl-shard-0&authSource=admin&retryWrites=true&w=majority',)
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))
// mongoDB의 connect 정보를 넣어준다 <username>과 <password>를 각각 이름과 비밀번호로 대치한다

app.get('/', (req, res) => {
    res.send('안녕하세요!')
})
// root 디렉토리에서 Hello World를 출력하게

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// 5000번에서 이 앱을 실행하게 한다
