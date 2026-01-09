---
marp: true
theme: default
footer: "by **Keita Sekiguchi**"
size: 16:9
page_number: true
paginate: true
backgroundImage: url('./images/background.jpg')
---
<!-- headingDivider: 2 -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
section {
    font-family: 'Poppins';
}
p,li{
    font-size: 30px;
    font-weight: 500;
}
code, code * {
    }
img[alt~="center"]{
    display: block;
    margin: 0 auto;
}
</style>


# Git/GitHub講習 - はじめの一歩 -
茨城高専 4MS
関口佳汰
<!-- ![height:450 bg right:50% drop-shadow](https://octodex.github.com/images/orderedlistocat.png) -->

# アウトライン

## 目的
Git及びGitHubの基本知識を共有し、部内orgプロジェクトまたは個人開発の基礎を身につける

## 注意
- 本講習に含まれるチュートリアルでは、**vscodeをインストール済みのWindowsマシン**とインターネット環境があることを前提としています。
- リンク等は、事前に共有済みの資料を参照してください。
- 講師は熟練者ではありません。趣味に毛が生えた程度の知識ですので、間違いがありましたらお気軽にご指摘ください。

# 目次
### 1. Git/GitHubとは何か?
### 2. 主なGitの用語
### 3. チュートリアル


## Git/GitHubとは何か?

## こんな経験はありませんか
｢どれが最新のドキュメントかわからない...｣

コーディングの世界でも、バージョン管理は非常に重要な問題です。
この解決策の一つが、**GitとGitHubによる分散型バージョン管理**です。

---
![bg](images/negative.jpg)
![center height:400](https://qph.cf2.quoracdn.net/main-qimg-7cb69b855836b65c97647740daa1f112)


## Git

> **Git**（ギット）は、プログラムのソースコードなどの変更履歴を記録・追跡するための**分散型バージョン管理システム**である。(wikipediaより)
> > 

### 簡単に言うと…

変更履歴の倉庫

![height:300 bg right:30% drop-shadow](images/git.png)
## GitHub

- 世界中の人々がコードを保存・公開できる**ソースコード管理ツール**
- Gitを使ったコード専用の有能なGoogleDriveのようなもの
- ライバルツールもある
    - GitLab
    - tracpath
    - Bitbucket

#### 個人開発はもちろん、共同開発で重宝することになります。

![height:300 bg right:30% drop-shadow](images/github.png)


# 主なGitの用語

## リポジトリ(repository)

- 履歴管理を行う場所。
- GitHub側とPC側に存在する、フォルダのようなもの。(厳密には異なる)
- プロジェクトごとに作成されることが多い。
  ### 2種類のリポジトリ
  - リモートリポジトリ(remote repository): サーバーにあるリポジトリ。
  - ローカルリポジトリ(local repository): 自分のPCにあるリポジトリ。
![height:350 bg right:30% drop-shadow](https://miro.medium.com/v2/resize:fit:512/1*w07Er4gPg8H2Ew-P0HhxNA.png)

## コミット(commit)

- インデックスに登録してある変更対象をローカルリポジトリに反映すること
- **変更履歴**を登録すること、又は変更履歴自体を指す
- 右図の丸一つ一つがコミット
![height:650 bg right:50% drop-shadow](https://wac-cdn.atlassian.com/dam/jcr:7406fe56-d36d-44cf-92e3-b28e4bae36f8/02.svg?cdnVersion=1430)

## ブランチ(branch)

- 履歴管理を枝分かれさせたもの
- 複数の履歴を並列に管理できる
- 同時並行で異なる部分を編集する際に用いられる
- 右図の丸はコミット
  
![height:600 bg right:50% drop-shadow](https://wac-cdn.atlassian.com/dam/jcr:5e550e98-3f0a-4a5e-bebc-9438cc1384e8/03%20Use%20a%20Git%20branch%20to%20merge%20a%20file.svg?cdnVersion=1430)

## マージ(marge)

- 異なるブランチ(枝)の変更を反映させること
- 互いの変更履歴が残る
- **fast-forward** と **non-fast-forward**というマージ方式が存在する
![height:450 bg right:50% drop-shadow](https://wac-cdn.atlassian.com/dam/jcr:c6db91c1-1343-4d45-8c93-bdba910b9506/02%20Branch-1%20kopiera.png?cdnVersion=1430)

---

### fast-forward と non-fast-forward
- fast-forward(早送りマージ) 
  - デフォルト
  - **マージコミットを作成しない**
- non-fast-forward
  - **マージコミットを作成する**

デフォルトで non-fast-forward を使いましょう(エイリアスを使用)
```bash
git config --global alias.nffmerge "merge --no-ff"
```
![height:450 bg right:50% drop-shadow](https://wac-cdn.atlassian.com/dam/jcr:c6db91c1-1343-4d45-8c93-bdba910b9506/02%20Branch-1%20kopiera.png?cdnVersion=1430)


## コンフリクト(conflict)

- 単語の意味は"紛争, 衝突”
- 違う枝同士で同じところを編集してしまったときに起こる
- Gitが困っちゃう(どちらを反映させればいいかわからない)

![height:270 bg right:50% drop-shadow](https://images.datacamp.com/image/upload/v1652028749/image1_d21db326e6.png)

## プルリクエスト(PullRequest)

- 開発者のローカルリポジトリでの変更を他の開発者に通知する機能
  - 機能追加や改修など、作業内容をレビュー・マージ担当者やその他関係者に通知します。
  - ソースコードの変更箇所をわかりやすく表示します。
  - ソースコードに関するコミュニケーションの場を提供します。

![center drop-shadow](https://backlog.com/ja/git-tutorial/assets/img/pull-request/pull_request1_2.png)

# チュートリアル

## 1 Gitのインストールをしよう

- [https://gitforwindows.org/](https://gitforwindows.org/) にアクセスし、GitBashをインストールする
- インストーラは全てNext＞でOK
- GitBashを実行
- 「ls」コマンドを実行、表示に問題がなければOK
- CMDを開いて、「git -v」を実行、バージョンを確認する

---
### macをお持ちの方
- HomeBrewをインストールする(以下のコマンドをターミナルにコピペ)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- HomeBrew経由でGitをインストールする(以下のコマンドをターミナルにコピペ)
```bash
Brew install git
```
- ターミナルを開いて｢git -v｣を実行、問題がないか確認


## 2 Gitの初期設定をしよう

- ユーザー名を設定

```bash
git config --global user.name [任意のユーザ名]
```

- メールアドレスを設定

```bash
git config --global user.email [任意のメールアドレス]
```

- ユーザ名とメールアドレスが登録されていることを確認

```bash
git config --list
```

## 3 GitHubのサインアップをしよう

- [https://github.com](https://github.com/) にアクセスする
- 画面右上「Sign up」をクリック
- メールアドレスとアカウント名、パスワードを入力

## 4 GitHubでリモートリポジトリを作成しよう

- 画面右上の自分のアイコンをクリック
- 「**Your profile**」をクリック
- 左上「**Repositories**」をクリック
- 右上緑色の「**New**」をクリック
- 「**Repository name**」に”**astro-tutorial**”と入力
- デフォルトで公開になっているのでプライベートに変更
- 右下「**Create repository**」をクリック

## 5 ローカルリポジトリを作成しよう

- 任意の場所にフォルダーを作成
- 作成したフォルダに移動

```bash
cd [フォルダのディレクトリ]
```

- ディレクトリをgitのリポジトリとして初期化

```bash
git init
```

## 5 ローカルリポジトリにコミットしてみよう

- 先程作成したフォルダに「test.txt」ファイルを作成
- インデックスに作成したファイルを追加

```bash
git add test.txt
```

- インデックス内のファイルをローカルリポジトリに追加(コミット)

```bash
git commit -m "コメント" #-mはコメントを追加するためのもの
```

## 6 リモートリポジトリにプッシュしてみよう

- ローカルリポジトリとリモートリポジトリを紐付け

```bash
git remote add origin [リモートリポジトリのURL]
```

- GitHubのユーザ名とパスワードを求められるため、アカウント登録時に設定した内容を入力
- リモートリポジトリにプッシュ

```bash
git push origin main
```

## 7 ブランチを作成して同じことをしてみよう

- ブランチを作成

```bash
git branch dev
```

- 作成したdevブランチに移動

```bash
git checkout dev
```

- 作業中のブランチを確認(*が表示されているブランチが作業ブランチ)

```bash
git branch
```
---
- 先程と同様にファイルを作成からコミットまで行う(例としてtest2.txtを作成)

```bash
git add test2.txt
git commit -m "devブランチにコミット"
```

- リモートリポジトリにプッシュ
- GitHubを確認すると、text2.txtがdevブランチにのみ反映されているはず

```bash
git push origin dev
```

## 8 ブランチからmainにマージしてみよう(ここではプルリクエストの説明は行いません)

- ローカルのブランチをdevからmainに変更する

```bash
git checkout main
```

- devをmainにマージする

```bash
git merge dev
```

- リモートブランチにpushする

```bash
git push origin main
```

## 9 コンフリクトを起こして解消してみよう

### コンフリクトを発生させる

- 先程個人リポジトリに作成したtest.txtの中身を編集する。(GitHub)

```bash
Hello, world!
```

- pullする(VSCode)
  
```bash
git pull
```
- devブランチを作成、移動
```bash
git branch dev
git checkout dev
```

---

- test.txtのworldをcatにする
```bash
Hello, cat!
```

- コミットする
```bash
git add .
git commit -m "コンフリクト"
```

- GitHub上でtest.txtのworldをdogにする
```bash
Hello, dog!
```

---

- Mainブランチに移動、pullする
```bash
git checkout main
git pull
```

- Mainブランチにdevブランチをマージする
```bash
git merge dev
```

コンフリクトが発生


---

### コンフリクトを解消する
- VSCodeには｢**3 way merge editor**｣があり、簡単にコンフリクトの解消ができます
- 画面の指示に従い、どちらを残すか、または両方残すなどの判断をしてください
  
![height:350 center drop-shadow ](https://futureys.tokyo/app/uploads/2023/01/img-vscode-git-3-way-merge-conflict-window-expression-3-way-1024x555.png)

## 10 vscodeの便利な機能を試してみよう
VSCodeにはGitをUIで直感的に操作できる便利な機能があります

## 11 天文部orgのリポジトリをクローンしてみよう

- クローン先のディレクトリに移動

```bash
cd [ローカルのクローン先ディレクトリ]
```

- 天文部orgのリポジトリをクローン

```bash
git clone https://github.com/astronomy-club-at-nitic/tutorial
```

- 自分の名前のファイル作成とpush後、GitHubにて確認する

```bash
# ex) astro.txt
```

# その他開発に必要な知識
### プルリクエスト
- 共有のリポジトリ(master branch)を操作することが出来るのは、基本的にリポジトリの管理者だけ
- 別のBranchから、本番環境に対してプルリクを出し、許可されればマージされ、本番環境に反映される
![height:310 bg right:47% drop-shadow](https://www.atlassian.com/blog/wp-content/uploads/bitbucket411-blog-1200x-branches2.png)
---

### イシュー
- issueは様々な用途で用いられる(オープンソースプロジェクトならユーザーが不具合を投稿したりもする)
- 特に非公開グループプロジェクトの場合、ToDoのような使われ方が一般的
- **issue駆動型開発**(issueに応じてブランチを作成し作業する)については塩畑さん作成のドキュメントがNotionにアップされているのでそれを参照 
![height:310 bg right:47% drop-shadow](https://storage.googleapis.com/zenn-user-upload/7f410722d70e-20230714.png)


# Gitの主なコマンド

```
git init #新しいリポジトリを作成する

git clone <url> #リモートリポジトリをローカルにクローンする

git add <file> #ファイルをステージングエリアに追加する

git commit -m "<message>" #ステージングエリアの変更をコミットする

git push #ローカルのコミットをリモートリポジトリにプッシュする

git pull #リモートリポジトリから変更を取得し、ローカルリポジトリにマージする

git branch #ローカルブランチの一覧を表示する

git checkout <branch> #指定したブランチに移動する

git merge <branch> #指定したブランチを現在のブランチにマージする

git status #ファイルの状態を表示する
```

# おすすめサイト

- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/)
    
    Gitの概要のみ、非常にわかりやすいサイトです。その先は異なるやり方なので他のサイトを参照してください。
    
- [Gitインストール手順＜Windows向け＞](https://sukkiri.jp/technologies/devtools/git/git_win.html)
    
    gitのインストール方法はこちらを参照してください。ただし、Windowsマシン向けです。Macユーザの方は他の記事を参照してください。
    
    
- [【超初心者】実務で初の「git push origin ****」まで ･･･ - Qiita](https://qiita.com/shimotaroo/items/ed08d76447144d566637)
    
    Gitの基本的で実践的な使い方がまとめられています。困ったらこれを参照してください。
    
    

# メモ
- 古い記事だとmainブランチがmasterブランチになっているため注意
- ターミナルでgit実行できてもvscodeのターミナルで動かないことがあるので注意(解決方法あり)
- 例のissue駆動開発の資料(https://www.notion.so/nitic-astronomy/db7bc073ce574d18ac8460fd8e36b795?pvs=4)

# ご清聴ありがとうございました
Keita Sekiguchi - NITIC天文部 Git/GitHub講習


![height:400 bg right:35%](./images/bouncercat.png)
