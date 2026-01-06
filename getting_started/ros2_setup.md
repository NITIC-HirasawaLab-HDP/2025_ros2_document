# ROS2 Setup ⚙️

<Badge type="tip" text="所要時間: 約30分" />

::: info 📖 このページで行うこと
ROS2 Humble Hawksbill を Ubuntu 22.04 にインストールし、基本的な動作確認まで行います。
:::

## 📋 インストールの概要

### インストール手順の流れ

```mermaid
graph LR
    A[📦 依存パッケージ] --> B[🔑 GPGキー取得]
    B --> C[📂 リポジトリ追加]
    C --> D[⬇️ ROS2インストール]
    D --> E[🔧 環境設定]
    E --> F[✅ 動作確認]
```

| ステップ | 内容 | 所要時間 |
|---------|------|---------|
| 1 | 依存パッケージのインストール | 約2分 |
| 2 | GPGキーとリポジトリの設定 | 約1分 |
| 3 | ROS2のインストール | 約10〜20分 |
| 4 | 環境設定 | 約1分 |
| 5 | 動作確認 | 約2分 |

---

## 📦 1. 依存パッケージのインストール

まず、ROS2をインストールするために必要なパッケージをインストールします。

::: tip 💡 ターミナルについて
ターミナルは `Ctrl + Alt + T` で開くことができます。以下のコマンドを**1つずつ**順番に実行してください。
:::

### パッケージリストの更新と必要なツールのインストール

```bash
sudo apt update && sudo apt install curl software-properties-common python3-rosdep -y
```

::: details 🔍 このコマンドは何をしている？
- `sudo apt update` - パッケージリストを最新の状態に更新
- `curl` - URLからデータをダウンロードするツール
- `software-properties-common` - リポジトリを管理するためのツール
- `python3-rosdep` - ROS2の依存関係を解決するツール
:::

### Universe リポジトリの有効化

```bash
sudo add-apt-repository universe
```

::: info 📖 Universe リポジトリとは
Ubuntu の Universe リポジトリには、コミュニティによってメンテナンスされるオープンソースソフトウェアが含まれています。ROS2 の一部のパッケージが依存しています。
:::

---

## 🔑 2. ROS2 リポジトリの設定

ROS2 の公式パッケージをダウンロードするために、リポジトリの設定を行います。

### GPG キーの取得と保存

```bash
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

::: details 🔍 GPG キーとは？
GPG キーは、ダウンロードするパッケージが**公式のものであること**を検証するために使用されます。これにより、改ざんされたパッケージをインストールするリスクを防ぎます。
:::

### APT ソースの追加

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

::: warning ⚠️ コマンドについて
このコマンドは長いですが、**1行で全体をコピー＆ペースト**してください。途中で改行するとエラーになります。
:::

### パッケージリストの更新とアップグレード

```bash
sudo apt update && sudo apt upgrade -y
```

---

## ⬇️ 3. ROS2 Humble のインストール

いよいよ ROS2 本体をインストールします。

```bash
sudo apt install ros-humble-desktop -y
```

::: tip 💡 インストールパッケージの選択
ROS2 には複数のインストールオプションがあります：

| パッケージ | 内容 | おすすめ度 |
|-----------|------|-----------|
| `ros-humble-desktop` | GUI ツール（RViz, Gazebo等）を含む完全版 | ⭐⭐⭐ |
| `ros-humble-ros-base` | コア機能のみ（軽量版） | ⭐⭐ |

通常は **desktop** 版をおすすめします。可視化ツールが含まれており、デバッグに便利です。
:::

::: warning ⚠️ インストール時間について
このステップは**10〜20分程度**かかる場合があります。ネットワーク環境によってはさらに時間がかかることもあります。コーヒーでも飲んで待ちましょう ☕
:::

---

## 🔧 4. 環境設定

ROS2 を使用するために、環境変数の設定を行います。

### .bashrc への設定追加

`.bashrc` にROS2の設定を追加することで、**ターミナルを開くたびに自動でROS2環境が読み込まれます**。

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

::: details 🔍 .bashrc とは？
`.bashrc` は、Ubuntu のユーザーディレクトリ（`~`）に存在するファイルで、**ターミナルが起動するたびに実行されるコマンド**が記述されています。

ここにROS2の設定読み込みコマンドを追加することで、毎回手動で `source` コマンドを実行する手間が省けます。
:::

### 現在のシェルに設定を反映

```bash
source ~/.bashrc
```

### rosdep の初期化

`rosdep` は ROS2 パッケージの依存関係を自動で解決してくれるツールです。

```bash
sudo rosdep init && rosdep update
```

::: danger 🚨 エラーが出た場合
`sudo rosdep init` で「すでに初期化されている」というエラーが出た場合は、既に初期化済みなので問題ありません。その場合は `rosdep update` のみ実行してください：

```bash
rosdep update
```
:::

---

## ✅ 5. 動作確認

ROS2 が正しくインストールされたか、デモプログラムで確認しましょう。

::: tip 💡 Talker / Listener デモ
このデモは、ROS2 の基本的な通信機能（トピック通信）が動作しているかを確認します。
- **Talker** - メッセージを送信するノード
- **Listener** - メッセージを受信するノード
:::

### Talker の実行

**ターミナル1** で以下を実行：

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_cpp talker
```

成功すると、以下のようなメッセージが表示されます：

```
[INFO] [talker]: Publishing: 'Hello World: 1'
[INFO] [talker]: Publishing: 'Hello World: 2'
[INFO] [talker]: Publishing: 'Hello World: 3'
...
```

### Listener の実行

**新しいターミナル（ターミナル2）** を開いて以下を実行：

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

成功すると、以下のようなメッセージが表示されます：

```
[INFO] [listener]: I heard: [Hello World: 1]
[INFO] [listener]: I heard: [Hello World: 2]
[INFO] [listener]: I heard: [Hello World: 3]
...
```

::: info ✨ 成功！
両方のターミナルで上記のようなメッセージが表示されれば、**ROS2のインストールは成功**です！🎉

`Ctrl + C` でそれぞれのプログラムを終了してください。
:::

---

## 📦 6. 追加パッケージのインストール

開発をスムーズに進めるために、よく使う追加パッケージをインストールしておきましょう。

### colcon のインストール

::: info 📖 colcon とは？
`colcon` は ROS2 のビルドツールです。自分で作成したパッケージをビルドする際に必要になります。
:::

```bash
sudo apt install python3-colcon-common-extensions -y
```

### Gazebo のインストール

::: info 📖 Gazebo とは？
`Gazebo` は ROS2 と統合されたロボットシミュレータです。実機がなくてもロボットの動作をテストできます。
:::

::: warning ⚠️ 注意
`ros-humble-desktop` では Gazebo が含まれなくなったため、別途インストールが必要です。
:::

```bash
sudo apt install gazebo -y
sudo apt install ros-humble-gazebo-* -y
```

### rqt プラグインのインストール

::: info 📖 rqt とは？
`rqt` は ROS2 の GUI ツールキットです。トピックの可視化やノードグラフの表示など、デバッグに役立つ機能が揃っています。
:::

```bash
sudo apt install ros-humble-rqt-* -y
```

---

## ✅ インストール完了チェックリスト

以下の項目をすべて確認できれば、ROS2 のセットアップは完了です！

- [ ] `ros2 --help` でヘルプが表示される
- [ ] Talker / Listener デモが動作する
- [ ] `colcon --help` でヘルプが表示される
- [ ] `gazebo` でシミュレータが起動する

---

## 🔧 トラブルシューティング

::: details ❌ 「コマンドが見つかりません」と表示される場合
`.bashrc` の設定が反映されていない可能性があります：

```bash
source ~/.bashrc
```

または、新しいターミナルを開いてやり直してください。
:::

::: details ❌ インストール中にエラーが発生した場合
1. ネットワーク接続を確認してください
2. パッケージリストを更新してから再試行：
```bash
sudo apt update
sudo apt install ros-humble-desktop -y
```
:::

::: details ❌ rosdep init でエラーが出る場合
既に初期化されている場合は、以下のコマンドで初期化ファイルを削除してから再実行：
```bash
sudo rm /etc/ros/rosdep/sources.list.d/20-default.list
sudo rosdep init
rosdep update
```
:::

---

## 🚀 次のステップ

<div class="next-steps">

- 🏗️ [ワークスペースの作成](./create_workspace.md) - 開発の準備をしよう
- 📝 [最初のパッケージ作成](./create_package.md) - ROS2 プログラミングを始めよう

</div>

---

## 📚 More

公式ドキュメントでさらに詳しく学ぶことができます：

- 🌐 [ROS2 Humble インストールガイド（公式）](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- 📖 [ROS2 チュートリアル](https://docs.ros.org/en/humble/Tutorials.html)
- 🎓 [ROS2 コンセプト](https://docs.ros.org/en/humble/Concepts.html)
