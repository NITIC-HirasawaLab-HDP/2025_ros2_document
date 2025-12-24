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
          { text: 'What is ROS2', link: '/Getting_Started/what_is_ros2.md' },
          { text: 'Ubuntu setup', link: '/Getting_Started/ubuntu_setup.md' },
          { text: 'ROS2 setup', link: '/Getting_Started/ROS2_setup.md' }
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
