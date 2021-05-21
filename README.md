# 낙서장


개인적으로는 아래와 같이 개발자의 수준을 분류하고 싶습니다.

레벨0: 이미 쓰고 있는 개발도구의 사용법을 알려주거나 가이드 문서를 줘도 잘 못 씀<br>

레벨1: 알려주거나 같은 팀에서 만든 가이드 문서에 있는 만큼만 쓸 수 있음<br>

레벨2: 개발도구의 공식 레퍼런스를 보고 사용법을 스스로 익힐 수 있음<br>
자신이 경험한 사용법을 문서화해서 팀 내에 전파할 수 있음<br>

레벨3: 여러 개발도구를 비교 분석해서 상황에 적합한 도구를 선택할 수 있음<br>
공식 레퍼런스 문서에서 부족한 부분을 수정해서 기여할 수 있음<br>

레벨4: 개발도구의 문제를 소스 코드를 수정해서 Fork/패치해서 사용할 수 있음<br>
신입사원이라도 레벨2 정도는 함께 일할 개발자에게 기대를 하게 됩니다.<br>


reference - [백엔드를 꿈꾸는 학생들에게](https://d2.naver.com/news/3435170)

# Assignment
>노마드 코딩 assingment
1. 데이터 불러오기

https://codesandbox.io/s/express-controller-blueprint-forked-358te?file=/src/db.js
https://codesandbox.io/s/express-controller-blueprint-forked-o2srm?file=/src/db.js

답안

https://codesandbox.io/s/express-controller-blueprint-forked-358te?file=/src/views/movies.pug

2. 11-12   번 문제

답안

https://codesandbox.io/s/day-11-12-solution-forked-w3s0b?file=/src/views/detail.pug

3. 16 번 문제

답안

https://codesandbox.io/s/day-sixteen-solution-zrrru?file=/src/index.js
https://codesandbox.io/s/day-sixteen-blueprint-forked-xe8r1?file=/src/movieController.js

4. 17번 문제 

https://codesandbox.io/s/day-17-18-19-blueprint-forked-470j8?file=/src/models/Movie.js
https://codesandbox.io/s/day-17-18-19-blueprint-forked-470j8?file=/src/movieController.js

답안

https://codesandbox.io/s/day-17-18-19-solution-nt9zg

5. 18번 분제

https://codesandbox.io/s/txt2html-forked-14db2?file=/src/index.js
https://codesandbox.io/s/txt2html-forked-14db2?file=/src/index.js

답안

https://codesandbox.io/s/txt2html-solution-0wb76?file=/src/index.js:598-602

## 1번 문제 express-controller
> 주어진 함수 네 가지를 활용해서 searching, detail page를 만들기
* mixin으로 데이터를 가공하여 movies.pug에 뿌려준다. (db는 json형식임)
* req.query.year에 서칭 조건을 붙임 ex) https:nomard/filter?year=2021
```
const {
  query: { year, rating }
  } = req;

const {
  params: { id }
  } = req;
```
문제에서 함수가 몇 가지 주어짐
```
import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
```
함수들은 이렇게 코딩 되어 있음
```
export const getMovieById = id => {
  if (!id) {
    throw Error("❌  YOU FORGOT TO PASS THE MOVIE ID TO THE FUNCTION  ❌ ");
  }
  return movies.find(m => m.id === parseInt(id, 10));
};

// This gives you an array of movies with a release date of minimum X
export const getMovieByMinimumYear = year => {
  if (!year) {
    throw Error("❌  YOU FORGOT TO PASS THE MOVIE YEAR TO THE FUNCTION  ❌");
  }
  return movies.filter(m => m.year >= year);
};
```
중요한 점은 db부분을 이렇게 내가 짜야한다는 것임. 

find로 특정 year, rating, id가 포함되는 {}부분 데이터를
추출해는 방법 조건 범위 지정하는 법은 이 예시를 참고하자.

내가 직접 짠다면, 코딩순서:
1. express, pug 작성
2. db연결
3. db에서 특정 데이터를 꺼낼 함수 만들기
4. mixin 작성
5. routes controller 작성하기


## db에서 데이터 가져온 뒤 가져온 데이터 searching하기
# pug
## 데이터 작성하기
```
mixin movieMix(item={})
  div
    a(href=`detail/${item.id}`)
      p=item.title
    p=item.id
    p=item.year
    p=item.rating
    p 야호야호야호
```
<p>야호야호야호</p>
데이터를 불러올 떈 equal을 쓰고 
string으로 작성할 떈 한 칸 띄워서 씀

# YouTube Clone Coding Restart



## nodejs res.locals
For session or request dependent values you can store those common values in a global variable and then use them directly in res.render. To do that you have following options

세션 또는 요청 종속 값의 경우 이러한 공통 값을 전역 변수에 저장 한 다음 res.render에서 직접 사용할 수 있습니다. 이를 위해 다음과 같은 옵션이 있습니다.
* Use app.use to store values :

In your app.js add a middleware which does this for you. Remember to write this middleware before any other routes you define because middleware functions are executed sequentially.

app.js에서이 작업을 수행하는 미들웨어를 추가하십시오. 미들웨어 기능은 순차적으로 실행되므로 정의한 다른 경로보다 먼저이 미들웨어를 작성해야합니다.
    
    app.use(function(req, res, next){
        res.locals.items = "Value";
        next();
    });
    //your routes follow
    app.use(‘/’, home);

In your routes you can place `items` directly in res.render like:

    res.render('layout', {title: 'My awesome title',view: 'home', item :res.locals.items });

* Use express-session to store values : 

If you have express-session installed you can save some data in `req.session.item` and place them in any route like:

    res.render('layout', {title: 'My awesome title',view: 'home', item :req.session.items });

* in my case 

middleware에 이렇게 작성하고
```
export const localMiddleWare = (req, res, next) => {
  res.locals.siteTitle = {
    title: "wetube",
    view: "landPlace",
    testText: "Hi taetae"
  };
  next();
};
```
contoller는
```js
const home = (req,res) => {
  ("home" {pageTitle:"Movie",siteTitle:res.locals.siteTitle.title})
}
```
Pug에서 불러올 떈
```html
h1 #{pageTitle} | #{siteTitle}
```
이렇게 함


## nodejs mixin

mixin template을 사용하지 않으면 json형태의 데이터를 파싱하지 못하기 떄문에 json형태의 데이터를 파싱해서 표현하기 위한 조건은 아래 사항을 참고하길 바람:
1. 반드시 mixin.pug template을 따로 만들어야 함
2. json이 복수의 배열일 경우 불러오기위해 each items in jsonDataBaseInMixin 형태를 취해야 한다.
3. mixin 작성, item은 {}배열을 가진 json이 들어올 자리이다.

```
mixin movieMix(item={})
  div
    a(href=`detail/${item.id}`)
      p=item.title
    p=item.year
    p=item.rating
```
4. view.pug에서 데이터 시각화 하기
```
include mixin/mixing.pug
block content
  each items in movie
    +movieMix(items)
```
include를 사용해서 데이터를 가져온다.

5. router contorller에서 json 데이터를 가져온다 
* controller(json데이터를 가짐) -> view.pug로 전달 -> each items in json데이터 로 화면에 뿌기리

## mongostore (로그인 유지하기)

1. terminal에 

`npm i connect-mongo`

2. app.js에서 Mongoose에서 mongoStroe에 연결할 거니까? mongoStroe import하기

```
import MongoStore from "connect-mongo"
import mongoose from "mongoose"
const CokieStore = MongoStore(session)
```
3. app.js에서 store 추가

```
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
```

4. terminal을 종료하고 다시 실행해도 로그인 상태가 유지됨

## Login 상태에서 회원가입 못하게 하기

> 로그인 상태에서 주소창에 locallhost:4000/join 입력시 회원가입 창으로 이동하는 것, 반대의 경우까지 만들어보자

1. middleware.js에 로그인시 home으로 redirect되도록 middleware를 만들어 줌

```
export const onlyPublic = (req,res,next) => {
    if(req.user){
        res.redirect(routes.home);
    }else {
        next()
    }
}
export const onlyPrivate = (req,res,next) => {
    if(req.user){
        next()
    }else{
        res.redirect(routes.home)
    }
}
```

2. router에 추가하기 

```
import { onlyPublic } from "../meddileware"

userRouter.get(routes.editProfile,onlyPublic, editProfile);
userRouter.get(routes.changePassword,onlyPublic, changePassword);
```
onlyPublic 도 필요한 부분에 입력해주자 













