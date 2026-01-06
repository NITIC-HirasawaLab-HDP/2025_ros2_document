# NITIC HirasawaLab - Robotics Documents

![VitePress](https://img.shields.io/badge/VitePress-2.0%20alpha-646CFF?logo=vitepress&logoColor=white)
![ROS2](https://img.shields.io/badge/ROS2-Humble-22314E?logo=ros&logoColor=white)
![License](https://img.shields.io/badge/License-Apache%202.0-blue)

> 2025年度 廃炉創造ロボコン 制作のノウハウをまとめたドキュメントサイト

## 概要

このリポジトリは、NITIC（茨城工業高等専門学校）平沢研究室が2025年度の廃炉創造ロボコンに向けて作成したROS2関連のドキュメントサイトです。VitePressを使用して構築されています。

## ドキュメント構成

- **About SHIHO** - 2025年度ロボット「SHIHO」について
- **Getting Started** - ROS2の導入ガイド
  - ROS2とは？
  - Ubuntu セットアップ
  - ROS2 セットアップ
- **ROS2 Theory** - ROS2の理論（準備中）
- **Trouble Shooting** - トラブルシューティング（準備中）

## デプロイ

GitHubのhirakenアカウントにてログインできるcloudflare pagesを使用してデプロイ済みです。

[![Live Site](https://img.shields.io/badge/Live_Site-Visit_Now-F38020?style=for-the-badge&logo=cloudflare-pages&logoColor=white)](https://2025-ros2-document.pages.dev/)

## クイックスタート

### 必要条件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/NITIC-HirasawaLab-HDP/2025_ros2_document.git
cd 2025_ros2_document

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run docs:dev
```

ブラウザで http://localhost:5173 にアクセスしてください。

### 本番用ビルド

```bash
npm run docs:build
```

### ビルドのプレビュー

```bash
npm run docs:preview
```

## ディレクトリ構成

```
2025_ros2_document/
├── .vitepress/          # VitePress設定ファイル
├── about_shiho/         # SHIHOについてのドキュメント
├── getting_started/     # 入門ガイド
│   ├── what_is_ros2.md
│   ├── ubuntu_setup.md
│   └── ros2_setup.md
├── ros2_theory/         # ROS2理論（準備中）
├── Trouble_Shooting/    # トラブルシューティング（準備中）
├── images/              # 画像ファイル
├── index.md             # トップページ
└── package.json         # npm設定
```

---

**NITIC HirasawaLab** © 2025
