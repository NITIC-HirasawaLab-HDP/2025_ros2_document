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

# Ubuntu Setup 🐧

<Badge type="tip" text="所要時間: 約30分" />

::: info 📖 このページで行うこと
Ubuntu を Windows PC にデュアルブートでインストールする手順を解説します。
:::


## 📀 インストールメディアの作成

### Step 1: イメージの取得

Ubuntu の公式サイトから **Desktop Image** をダウンロードします。

::: tip 💡 バージョンについて
ROS 2 Humble は **Ubuntu 22.04 LTS** を公式サポートしています。  
最新の Ubuntu 24.04 では ROS 2 Jazzy を使用します。
:::

|    バージョン    |  コードネーム   |    ROS 2 対応    |
| :--------------: | :-------------: | :--------------: |
| Ubuntu 22.04 LTS | Jammy Jellyfish | Humble Hawksbill |
| Ubuntu 24.04 LTS |  Noble Numbat   |  Jazzy Jalisco   |

👉 **ダウンロードリンク**: [Ubuntu 22.04.5 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)

::: details ダウンロード手順
1. 上記リンクにアクセス
2. 「**64-bit PC (AMD64) desktop image**」をクリック
3. `ubuntu-22.04.5-desktop-amd64.iso` のダウンロードが開始されます
4. ダウンロード完了まで待機（約5〜15分、回線速度による）
:::

---

### Step 2: イメージの書き込み

USBメモリに Ubuntu のイメージを書き込んで、ブートメディアを作成します。

#### 必要なもの

| アイテム       | 要件                          |
| :------------- | :---------------------------- |
| 💾 USBメモリ    | **16GB以上** （32GB推奨）     |
| 🖥️ Windows PC   | Rufus を実行するため          |
| 📁 ISO ファイル | Step 1 でダウンロードしたもの |

::: danger ⚠️ 注意
USBメモリの中身は**すべて消去**されます！  
大切なデータがある場合は、必ず事前にバックアップしてください。
:::

#### Rufus による書き込み

**Rufus** は使いやすい ISO イメージ書き込みツールです。

👉 **ダウンロードリンク**: [Rufus - Create bootable USB drives the easy way](https://rufus.ie/ja/)

::: details Rufus の使い方
1. Rufus をダウンロードして起動
2. 「デバイス」で USBメモリ を選択
3. 「選択」ボタンで ISO ファイルを指定
4. その他の設定はデフォルトのままでOK
5. 「スタート」をクリックして書き込み開始
6. 完了まで待機（約5〜10分）
:::

---

## 💻 PCへのインストール

準備が整ったら、実際に Ubuntu をインストールしましょう！

### Step 1: USBからの起動

```
PC電源OFF → USBメモリ接続 → 電源ON → BIOS画面へ
```

1. **PC の電源を完全にオフ** にします
2. 作成した **USB ブートメディア** を接続します
3. 電源を入れた直後に **`F2`** または **`Del`** キーを連打して BIOS 画面へ

::: tip 💡 BIOS キーについて
メーカーによって異なります：
| メーカー         | キー                       |
| :--------------- | :------------------------- |
| ASUS / DELL / HP | `F2`                       |
| Lenovo           | `F1` または `Enter` → `F1` |
| MSI / Gigabyte   | `Del`                      |
| その他           | `F10`, `F12`, `Esc` など   |
:::

---

### Step 2: ブート順位の変更

BIOS 画面で USB を最優先に設定します：

1. **Boot** または **起動** タブに移動
2. **Boot Priority** / **起動順序** で USB を **1番目** に設定
3. **Save & Exit** / **保存して終了** を選択

---

### Step 3: Ubuntu のインストール

Ubuntu のインストーラーが起動したら、画面の指示に従ってセットアップを進めます。

::: warning 🌐 言語設定について
**言語は English（英語）** を強くおすすめします！

理由：
- 日本語環境ではホームディレクトリ名が日本語になる
- ターミナル操作時にパスの入力が面倒になる
- 一部のパッケージで文字化けが発生することがある

キーボードレイアウトは **Japanese** で問題ありません。
:::

::: details インストール時の推奨設定
| 項目               | 推奨設定                            |
| :----------------- | :---------------------------------- |
| Language           | **English**                         |
| Keyboard           | Japanese (お使いの配列に合わせて)   |
| Installation Type  | Normal Installation                 |
| その他のオプション | Download updates while installing ✅ |
:::

---

## ✅ インストール完了後

インストールが完了したら、再起動して Ubuntu を起動しましょう！

::: tip 🚀 次のステップ
Ubuntu のセットアップが完了したら、次は **ROS 2 のインストール** に進みましょう！

👉 [ROS 2 セットアップガイド](./ros2_setup.md)
:::

---

## 📚 参考リンク

さらに詳しい情報は公式ドキュメントをご覧ください：

- 📖 [Install Ubuntu Desktop - Official Tutorial](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
- 📖 [Ubuntu Japanese Team - 日本語版情報](https://www.ubuntulinux.jp/)
- 📖 [ROS 2 Humble Installation Guide](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
