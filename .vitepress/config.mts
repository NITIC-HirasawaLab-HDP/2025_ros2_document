import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NITIC_HirasawaLab",
  description: "Robotics Documents",
  markdown: {
    config: (md) => {
      const defaultFence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info === 'mermaid') {
          const code = token.content.trim()
          return `<Mermaid code="${md.utils.escapeHtml(code).replace(/"/g, '&quot;')}" />`
        }
        return defaultFence(tokens, idx, options, env, self)
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'hoge', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'About SHIHO',
        items: [
          { text: 'About SHIHO', link: '/about_shiho/about_shiho.md' }
        ]
      },
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
          { text: 'hoge', link: '/trouble_shooting/hoge.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NITIC-HirasawaLab-HDP' }
    ]
  }
})
