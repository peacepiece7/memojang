# part 1

# console

console 는 web api로 브라우저가 제공하고 사용가능한 함수

nodejs에서도 공통적으로 포함되어 있어서 node로 실행가능.

#mozilla(mdn)에서 js,html,css 공부하기

# async vs defer (feat. defer를 써야하는 이유)

1. script를 header에 포함시킬 경우 :

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
```

html file:| parsing html | block | parsing html

js file :| | fetching js -> execution js |

- html을 parsing하다가 js파일을 만나는 순간(header에서) js파일을 먼저 패치, 실행 후 parsing을 진행 한다.
- 중간에 html을 멈추고 js 파일을 fatch하기 때문에 **첫 로딩 속도가 느려짐** 그래서 user experience가 좋지 못하다.

2. body 뒤에 script를 붙일 경우

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
<script src="main.js"></script>
</html>
```

html file:| parsing html |

js file :| block | fetching js -> execution js |

- html parsing을 끝내고 js파일을 fetch excution한다.
- html의 **html parsing이 빨리 끝나는 장점**이 있지만 웹 사이트가 js에 의존적일 경우 **html이 끝나기 전까지 js가 동작하지 않기 떄문에** 조심해야 하고,

3. header + async

```js
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script async src="main.js"></script>
</head>
```

html file:| parsing html | block | block | parsing html |
js file : | fetching js a | excuting a |
js file : | fetching js b | | excuting b |

- html parsing 중 js를 만나면 fetching을 동시에 진행, js excuting시 html을 block하고 excuting이 끝나면 다시 html을 피싱한다.
  그리고 먼저 fetching이 끝난 js파일을 먼저 excuting 한다.
- query selector 로 dom요소를 조작하거나, page를 넘어가는 중 js가 완료 되어야 사용가능한 기능을 사용하거나, **특정 기능 사용시 아직 excuting이 되지 않아서** 실행이 안될 수 있다.
- **다운로드 받는 시간을 절약**할 수 있다
- 먼저 다운로드 받은 js file이 실행되기 때문에 js가 순서에 의존적이라면 문제가 생길 수 있다.

4. defer

```js
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="main.js"></script>
</head>
```

html file:| parsing html | excuting a | | excuting b |
js file : | fetching js a |
js file : | fetching js b |

- fatching, parsing이 동시에 진행되고, 실행 순서또면 script 순서대로 실행 된다.
- 제일 효율적이고, 안전하다고 함.

# Vinilla js를 쓸 땐 'use strict'를 선언하자

`'use strict';`

- ecma5에 기술되어있음
- 이렇게 해야 선언하지 않은 함수에 대한 에러를 잡아줌 (조금 더 상식적인 프로그랭이 가능) a=5은 에러 잡아줌
