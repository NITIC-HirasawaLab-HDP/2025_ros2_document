import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NITIC_HirasawaLab",
  description: "Robotics Documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'hoge', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is ROS2', link: '/getting_started/what_is_ros2.md' },
          { text: 'Ubuntu setup', link: '/getting_started/ubuntu_setup.md' },
          { text: 'ROS2 setup', link: '/getting_started/ros2_setup.md' }
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'hoge', link: '/hoge' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NITIC-HirasawaLab-HDP' }
    ]
  }
})
