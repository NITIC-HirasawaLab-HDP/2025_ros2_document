# ROS2 Setup
ROS2 HumbleをUbuntu22.04にインストールする際の手順を解説します。

## 1. ROS2をインストール

以下のコマンドを順番に1つずつターミナルで実行

パッケージリストを更新、curl等とpython3-rosdepをインストール

```bash
sudo apt update && sudo apt install curl software-properties-common python3-rosdep
```

Universeリポジトリを有効化

```bash
sudo add-apt-repository universe
```

ROS2のGPGキーを取得しキーリングに保存

```bash
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

ROS2のaptソースを追加

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

リポジトリ追加後に更新とアップグレードを実行

```bash
sudo apt update && sudo apt upgrade -y
```

ROS2 Humbleのデスクトップ版をインストール

```bash
sudo apt install ros-humble-desktop
```

ターミナル起動時にROS2環境を自動で読み込む設定を.bashrcに追加

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

追記内容を現在のシェルに反映

```bash
source ~/.bashrc
```

rosdepを初期化してデータベースを更新

```bash
sudo rosdep init && rosdep update
```

## 2. ROS2の動作テスト

インストールが成功したか確認するために、TalkerとListenerのデモを実行します。

これは、ROS2による通信が正常に行われているのかを、同じPCの中で確かめる方法です。

- **Talkerの実行:**
    
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_cpp talker
    ```
    
- **Listenerの実行 (別のターミナルで):**
    
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_py listener
    ```
    

## 5. 環境設定

新しいターミナルを開くたびに環境設定が自動的に読み込まれるように、`.bashrc`に設定を追記します。

`.bashrc`とは、ubuntuのユーザ下のディレクトリに存在しており、**ターミナルが起動するたびに読み込まれるコマンド**が書いてあります。

ここにROS2の設定を読み込むコマンドを追加することで、ターミナルを開けばいつでもROS2を使えるようになるとても便利なものです。

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source .bashrc
```

## 6.その他

### colconのインストール
colconとは、

```bash
sudo apt install python3-colcon-common-extensions
```

### Gazeboのインストール

ros-desktop-full でGazeboがインストールされなくなったので別にインストール

```bash
sudo apt -y install gazebo
sudo apt install ros-humble-gazebo-*
```

## rqtのプラグインをインストール

rqt\_tf\_treeなどよく使うものはデフォルトではインストールされないのでaptから入れる

```bash
sudo apt install ros-humble-rqt-*
```


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown)
