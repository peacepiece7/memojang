# git start

[git reference](https://git-scm.com/docs)
git [command] --[option]

준비물 

## github UI

현업에서는 command를 많이 쓴다고 한다.

- github desktop
  - 기능이 많이 부족
- sourcetree
  - 클레식한 UI, 전반적으로 많이 쓰임
- gitKraken
  - UI가 화려함, 많이 쓰임

[git UI](https://git-scm.com/downloads/guis)

## git editor ( terminal ) 

mac - > iturn2  
window - > cmd R  
 - git미리 다운로드 되어 있음  

## git setting

`git --version`  

으로 설치 확인  

`git config --list`  
로 모든 설정 확인 가능  

`git config --global -e`  
파일로 열고 싶을땐 위와 같이 작성  

`code`  
vcs를 열고 싶을 떄 text editor로 연결하고 싶을 때 사용  
(커맨드 팔렛에서 code 검색해서 설정 활성화 해야 함)

> vsc로 git 설정 파일 열기  
`git --global core.editor "code"`   
`git config --global -e`  
vsc가 열리고 terminal이 활성화 상태임  

`git --global core.editro "code --wate"`  
'git config --global -e`  
vsc가 열리고, vsc가 닫히기 전 까지 terminal이 비활성화 상태임  
  
## git name, email 설정하기

`git --global user.name "TaeTae"  
`git --global user.email "peacepiece7@naver.com"  

`config user.name`  
=> TaeTae

`config user.email`  
=> peacepiece7@naver.com

## git new line solving

> os 마다 개행 문자가 다르게 들어감  
> window의 경우 text blahblah**/r/n**    (/r = carriage-return, /n = line-feed )  
> mac의 경우 text blahblah**/n**   (/n = line-feed)  
> 이로인해 저장시 띄어쓰기가 달라지는 문제가 발생함  

`git config --global core.autocrlf input`

mac이라면 위와 같이 작성  
input = git으로 저장할 때만 carriage-return 삭제 (문자를 복붙할 수도 있으니까)

`git config --global core.autocrlf true` 

window라면 위와 같이 작성
true = git으로 저장시 carriage-return 삭제 git에서 가져올 때 carriage-return 붙여줌

## git 생성 삭제 

`cd projects`  
`mkdir git`  
`cd git`  

`ls -al`  
=> ..  

`git init`  
깃 만들기  

`ls -al`  
=> drewxr-xr-x 9 taetae staff 288 21 may 06:00 **.git**  
`ls`  
=> empty  

`open .git`  
.git 파일에 들어가보면 기본 설정이 다 들어가 있음  
config, HEAD, hooks, refs 등등 다 있음  

`rm -rf .git`
`ls -al`
깃 파일이 사라지고, 더 이상 깃 파일이 아님

> 요약  
`git init`  
.git 시작  
`re -rf .git`  
.git 삭제 

> source tree에서 생성 삭제

drag로 파일 끌어오기 or
 
create new or 

create loacal repository  
(user1/desktop/projects/git)

## git의 상태 보기, 명령어 줄여쓰기

> git 상태보기  
`git status`  
=> git 상태가 표시됨

> 명령어 줄여 쓰기  
`git config --hlobal alias.st status`  
`git st`  
=> git 상태가 표시 됨  


# basic 

## git workflow

**working directory = > staging area => .git directory 순서로 저장함**  

1. working directory  
 - untracked  
   - git이 tracking하지 않음 ( 파일이 변경되지 않았거나, 새로 생성한 파일 )   
 - tracked  
   - git이 tracking하고 있음 ( 기존에 있는 파일임 )  
   - (tracked)unmodified  
     - 수정되지 않음  
   - (tracked)modified   
     - 수정된 파일로 straging area로 넘어갈 수 있음  
 
2. staging area  
- commit명령어로 git directory로 준비된 파일을 보냄  

3. .git directory
 - 버전의 히스토리를 가지고 있음, 파일이름 = 해시 코드로 저장(+ 작성자, 작성 시간 등 있음)  
 - checkout명령어로 언제든지 working directory로 보낼 수 있음  
 - push, pull명렁어로 server에 .git directory를 주고 받을 수 있음  









