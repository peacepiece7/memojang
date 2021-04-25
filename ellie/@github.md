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
(shell install : code.. 이런식으로 나옴, welcome page에서 팔렛을 열어야 함)

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
mk
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


## 

`cd projects/git/git`  
작업 디렉터리로 들어가서 아래와 같이 작성  


`ehco hello world! > a.txt`
a.txt에 hello world를 작성함

`open.`
git folder를 열어봄

`ehco hello world! > b.txt`
`ehco hello world! > c.txt`

a, b, c.txt 텍스트 파일을 만듬

`git status`
=> 
on branch master  

no commit files   

untracked files :   
a.txt  
b.txt  
c.txt  
> untracked files list를 보여줌  

`git add <a.txt b.txt c.txt or *.txt>`  

a,b,c.txt가 staging area로 이동됨   
즉 commit 상태가 됨  

`echo taetae >> a.txt`  
`git status`  
=>  
on branch master  

Changes to be committed:  
  new file : a.txt  
  new file : b.txt  
  new file : c.txt  

changes not staged for commit:  
  modified : a.txt  
  
위 코드를 보면 a.txt를 "taetae"로 변경했기 때문에  
tracked상태의 a.txt가 만들어짐, 다른말로 commit stage에 있지 않은 파일이 존제함  

`git --rm cashed *`  
전체 파일을 untracked상태로 만듬  
(위치만 untracked로 이동)  

> sourcetree를 사용해서 시각적으로 확인해보자  

`git add *`
는 모두다 커밋하는데
중간에 파일이 삭제될 경우
deleted : a.txt 이런식으로 지워진 파일이 표시됨 그럴 땐
`git add .`
이렇게 적으면 모든 파일을 포함해서 스테이징아레아에 보내줌 ( 삭제된 아이는 지워짐 )

> .css만 추가하고 싶다면
`git add *.css`

요약  

`git add *.txt`   
staging으로 보냄(commit)     
`git --rm cashed *`   
staging파일을 untracked로 보냄  
`git status`  
tracked, untracked, staging 상태 확인  

### .ignore  

`echo log > log.log`  
`echo styles > styles.css`  

`echo *.log > .gitignore`  

`git add *`  
`git status`  
=>  
changed to be commited :   
    new styles.css  

> untracked file에 log.log가 없어짐!  

for instance    
`echo build/ > .gitignore`  
`echo build/*.log > .gitignore`  

`git status -s`
간략하게 status보기

q -> exit  
cmd+k -> clear  

## git diff 사용하기

`git diff`
=>
```
diff --git a/c.txt b/c.txt
index 11saskf..22kasd3s  11200sad
--- a/c.txt
+++ b/c.txt
@@ -1 +1,2 @@
 hello world!
+add
(END)
```


`git cat`  
텍스트 파일의 내용을 터미널에 가져와 보여줌  

`git diff --staged`   
stage에 있는 모든 변경사항을 보여줌  
`git diff`  
를 치면 워킹 디렉토리에 있는 내용 + 변경사항이 표시되고
staged는 변경사항만 보여줌

`git diff --cashed`  
도 --staged와 같음!

## VScode에서 변경사항 확인하가

terminal
`git config --global -e`
를 친다음
vsc에 아래와 같이 작성
`
[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
 `

terminal
`git difftool`
yes 적으면 vsc로 변경사항을 열어서 확일할 수 있다.





