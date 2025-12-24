# What is ROS2?
ROS2の概要をざっくり説明します。

## ROS2とはなにか
>The Robot Operating System (ROS) is a set of software libraries and tools that help you build robot applications. From drivers to state-of-the-art algorithms, and with powerful developer tools, ROS has what you need for your next robotics project. And it's all open source.

これはROS2公式の解説です。何を言っているのかよくわかりませんね。

OSとは名ばかりで、「**ロボット用の通信フレームワークと便利なライブラリの集まり**」と考えてもらって結構です。

ROS2の強みは、抽象化されたフレームワークで、かんたんにロボットの制御システムを構築できるところにあります。

## どんなときに使うのか
主にロボットを制作するとき、特に複数のコンピュータを接続してそれぞれを通信させたい場合に効果を発揮します。

2025年度のロボット「紫峰」を見てわかるように、大会当時のロボットにはRaspberryPi4BとノートPC1台が搭載されていました。

「紫峰」の詳細な制御プロセスは後述しますが、操作室から有線LAN1本のみで通信を行っており、カメラ映像の受信から制御信号の送信までを1本で行いました。

一から制御工学で学んだ式を実装しなくても、ROS2がライブラリを提供してくれますし、LANを使う上で必要なTCP/IPの実装も抽象化してくれているので、とてもかんたんに制御システムを組むことができます。

それぞれのコンピュータの橋渡しをし、またモータのループ制御やカメラ映像の転送などのライブラリを提供してくれるのがROS2というわけです。

## どのように使うのか
まず、ROS2はUbuntuと呼ばれるOSの上で動かすことが基本です。

WindowsやMacで動作するROS2は公式にサポートされておらず、コミュニティによって運営されているため、避けるべきです。

DockerやWSL等の仮想環境でも開発が可能ですが、GUIでロボットの情報を見たりすることも多いので、Ubuntuをネイティブにインストールして使用することをおすすめします。詳しくはSetupの章で解説します。

ROS2のバージョンにはいくつか種類があり、LTSバージョンを使うことを強くおすすめします(Ubuntuも同様)。また、各バージョンには対応しているUbuntuのバージョンがあり(ROS2 HumbleはUbuntu22.04まで等)、インストールする際には十分注意してください。

## More
Check out the documentation for the [ROS - Robot Operating System](https://www.ros.org/).
