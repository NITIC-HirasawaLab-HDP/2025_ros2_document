<!-- Copyright 2026 Keita Sekiguchi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://apache.org

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->

# ROS2 Setup

<Badge type="tip" text="所要時間: 約10分" />

::: info このページで行うこと
ROS 2 Humble をまとめてインストールし、`talker` / `listener` で動作確認します。
:::

## インストール

次のコマンドを実行すると、ROS 2 Humble をインストールできます。

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/NITIC-HirasawaLab-HDP/install_scripts/main/install_ros2_humble.sh)
```

## 環境設定

インストール後、ROS 2 の設定を読み込みます。

```bash
source /opt/ros/humble/setup.bash
```

毎回自動で読み込みたい場合は、`~/.bashrc` に同じ行を追加してください。

## 動作確認

`talker` と `listener` を別々のターミナルで実行します。

### ターミナル1: Talker

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_cpp talker
```

### ターミナル2: Listener

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

`talker` のメッセージが `listener` 側に表示されれば成功です。終了するときは `Ctrl + C` を押してください。
