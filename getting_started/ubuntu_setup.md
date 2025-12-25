# Ubuntu Setup
UbuntuをWindowsPCにデュアルブートでインストールする手順を解説します

Raspberry Piへのインストール方法は他の節で解説します

## インストールメディアの作成
### 1. イメージの取得
以下のリンクから、"Desktop Image"をダウンロードしてください。"{ファイル名}.iso"のダウンロードが始まるはずです。

[Ubuntu 22.04.5 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)

### 2. イメージの書き込み
16GB以上のUSBメモリを用意してください。

以下のリンクからRufus(isoイメージャー)をダウンロードし、インストールしてください。

[Rufus - Create bootable USB drives the easy way](https://rufus.ie/ja/)

インストールが完了したら、USBメモリとisoファイルを選択し、書き込みを開始してください。

## PCへのインストール
1. PCの電源を落とし、作成したUSBイメージディスクを接続します。

2. 起動時にF2またはDelキーを連打し、BIOS画面へ入ります。

3. Bootの順位でUSBを一番上にし、再起動します。

4. Ubuntuのインストール画面が出てくるので、画面に従ってセットアップします。
   
   日本語配列にするのは構いませんが、言語はEnglishにしておくことをおすすめします。日本語のままだとたまにトラブルが起こります。

## More
Check out the documentation for the [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview).
