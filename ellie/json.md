# part 10 JSON

## HTTP

- Hypertext Transfer Protocal
  server와 client간 어떻게 hypertext를 주고 받을지에대한 protocal이다.<br>
  reqiest <--> response,

## AJAX

= Asyncronous JavaScript And XML (비동기 JS and XML)
비동기로 데이터를 주고 받는 기술을 의미함

## XHR

- XML Http Request
  browser에서 제공하는 object로,<br>
  XHR를 사용해서 서버와 클라이언트 간에 데이터를 주고 받는 방식이 가장 많이 사용 됨

## fetch() API

XHR과 마찬가지로 browser에서 제공하는 object로,<br>
가장 최근에 나온 api로 서버와 클라이언트 간에 데이터를 주고 받는데 사용함.(IE 미지원)

## AJAX, XHR에 대한 오해

AJAX, XHR에 공통적으로 사용되는 xml을 보면 데이터 통신에 사용되는 파일 포멧이 .xml뿐일 거 같지만<br>
사실은 json이나 그외 다양한 file format을 사용할 수 있음!<br>
microsoft사에서 HTTP Request를 개발 당시 xml이 활발히 사용됐기 때문에 xml을 앞에 붙여서<br>
**XML Http Request**라고 사용했고 이는 와부로 노출되는 class, object, api의 이름을 잘 지어야한다는 교훈을 줌

- 요약 : XHR은 다양한 file format을 지원한다. 요즘은 json을 씀!

## JSON

- JavaScript Object Notation

data format임<br>
mobile, sever, file system에 저장할 때도 씀<br>
object {key : value }<br>
independent program language and platform<br>

- serialization(서버로 보냄), deserialization(받아 옴):
  client language, server가 알아들을수 있게 string type으로 변환해서 주고 받음

## Object to JSON
