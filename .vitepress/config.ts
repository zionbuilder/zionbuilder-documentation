import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  srcDir: 'src',

  lang: 'en-US',
  title: 'Zion Builder',
  description: 'Probably the fastest WordPress site builder.',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/images/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/images/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/images/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/images/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", color:"#646cff", href: "/assets/images/favicons/safari-pinned-tab.svg"}],
    ['meta', { name: "msapplication-TileColor", content:"#646cff"}],
  ],

  themeConfig: {
    // siteTitle: false,
    logo: '/assets/images/logo-black.svg',

    nav: nav(),

    algolia: {
      indexName: 'zionbuilder',
      appId: '4U7I50QXOJ',
      apiKey: '9512ca4d6809339559d9d66bd0d39411'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zionbuilder/zionbuilder' },
      { icon: 'facebook', link: 'https://www.facebook.com/groups/zionbuildercommunity' },
      { icon: 'discord', link: 'https://discord.gg/R272S6WX96' }
    ],

    footer: {
      message: 'Released under GPL-3.0 License',
      copyright: `Copyright © 2014-${new Date().getFullYear()} <a href="https://zionbuilder.io" target="_blank">zionbuilder.io</a>`
    },

    sidebar: sidebarDocs(),
  },
});

function nav() {
  return [
    // { text: 'documentation', link: '/introduction' },
    // { text: 'Get ZionBuilder', link: 'https://zionbuilder.io/pricing/' },
    // { text: 'Try ZionBuilder', link: 'https://try.zionbuilder.io/' },
    // { text: 'Roadmap', link: 'https://feedback.zionbuilder.io/' },
  ]
}

function sidebarDocs() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'System requirements', link: '/system-requirements' },
        { text: 'Installing Zion Builder', link: '/install' },
        { text: 'Activating Zion Builder PRO', link: '/activate-pro' },
        { text: 'Free vs PRO', link: '/free-vs-pro' },
      ]
    },

    {
      text: 'Fundamentals',
      collapsed: false,
      items: [
        { 
          text: 'Admin panel', 
          link: '/fundamentals/admin-panel',
          collapsed: true,
          items:[
            { text: 'General settings', link: '/fundamentals/visual-editor' },
            { text: 'Font options', link: '/fundamentals/visual-editor' },
            { text: 'Custom icons', link: '/fundamentals/visual-editor' },
            { text: 'Presets', link: '/fundamentals/visual-editor' },
            { text: 'Performance', link: '/fundamentals/visual-editor' },
            { text: 'Library', link: '/fundamentals/visual-editor' },
            { text: 'Permissions', link: '/fundamentals/visual-editor' },
            { text: 'Templates', link: '/fundamentals/visual-editor' },
            { text: 'Custom code', link: '/fundamentals/visual-editor' },
            { text: 'Tools', link: '/fundamentals/visual-editor' },
            { text: 'System info', link: '/fundamentals/visual-editor' },
            { text: 'PRO license key', link: '/fundamentals/visual-editor' },
          ]
        },
        { 
          text: 'Visual editor', 
          link: '/fundamentals/visual-editor',
          collapsed: true,
          items:[
            { text: 'Visual editor', link: '/fundamentals/visual-editor' }
          ]
        },
        { 
          text: 'Theme builder', 
          link: '/fundamentals/admin-panel',
          collapsed: true,
          items:[
            { text: 'General settings', link: '/fundamentals/visual-editor' },
          ]
        },
        { 
          text: 'Mega menu', 
          link: '/fundamentals/admin-panel',
          collapsed: true,
          items:[
            { text: 'General settings', link: '/fundamentals/visual-editor' },
          ]
        },
      ]
    },

    {
      text: 'Features',
      collapsed: false,
      items: [
        { text: 'Theme builder', link: '/features/theme-builder' },
        { text: 'Mega menu', link: '/features/mega-menu' },
        { text: 'Repeater / Query builder', link: '/features/repeater-query-builder' },
        { text: 'Dynamic content', link: '/features/dynamic-content' },
        { text: 'Display conditions', link: '/features/display-conditions' },
        { 
          text: 'Element Styles', 
          link: '/features/element-styles',
          collapsed: true,
          items: [
            { text: 'Background', link: '/features/element-styles/background' },
            { text: 'Typography', link: '/features/element-styles/typography' },
            { text: 'Size & Spacing', link: '/features/element-styles/size-and-spacing' },
            { text: 'Borders & shadows', link: '/features/element-styles/border-and-shadows' },
            { text: 'Display', link: '/features/element-styles/display' },
            { text: 'Transitions', link: '/features/element-styles/transitions' },
            { text: 'Filters', link: '/features/element-styles/background' },
            { text: 'Custom attributes', link: '/features/element-styles/custom-attributes' },
          ]
        },
        { text: 'Element custom attributes', link: '/features/custom-element-attributes' },
        { text: 'Global CSS classes', link: '/features/global-css-classes' },
        { text: 'Global colors', link: '/features/global-colors' },
        { text: 'Global gradients', link: '/features/global-gradients' },
        { text: 'White label', link: '/features/white-label' },
        { text: 'Child selectors', link: '/features/child-selectors' },
        { text: 'Responsive breakpoints', link: '/features/responsive-breakpoints' },
        { text: 'Template Library', link: '/features/template-library' },
        { text: 'Icons', link: '/features/icons' },
        { text: 'Custom fonts', link: '/features/custom-fonts' },
        { text: 'Adobe fonts', link: '/features/adobe-fonts' },
        { text: 'Coming soon/Maintenance mode', link: '/features/coming-soon-maintenance-mode' },
        { text: 'User permissions', link: '/features/user-permissions' },
        { text: 'Shape dividers', link: '/features/shape-dividers' },
        { text: 'Popup builder', link: '/features/popup-builder' },
        { text: 'Inline text editor', link: '/features/inline-text-editor' },
        { text: 'Custom HTML tags', link: '/features/html-tag' },
        { text: 'Link option', link: '/features/link-option' },
        { text: 'Advanced element options', link: '/features/advanced-options' },
      ]
    },
    {
      text: 'Elements',
      collapsed: false,
      items: [
        { text: 'Section', link: '/elements/section' },
        { text: 'Column', link: '/elements/column' },
        { text: 'Container', link: '/elements/container' },
        { text: 'Text', link: '/elements/text' },
        { text: 'Heading', link: '/elements/heading' },
        { text: 'Accordion', link: '/elements/accordion' },
        { text: 'Alert', link: '/elements/alert' },
        { text: 'Anchor point', link: '/elements/anchor-point' },
        { text: 'Button', link: '/elements/button' },
        { text: 'Counter', link: '/elements/counter' },
        { text: 'Custom code', link: '/elements/custom-code' },
        { text: 'Gallery', link: '/elements/gallery' },
        { text: 'Google maps', link: '/elements/google-maps' },
        { text: 'Icon', link: '/elements/icon' },
        { text: 'Icon box', link: '/elements/icon-box' },
        { text: 'Icon list', link: '/elements/icon-list' },
        { text: 'Image', link: '/elements/image' },
        { text: 'Image box', link: '/elements/image-box' },
        { text: 'Progress bars', link: '/elements/progress-bars' },
        { text: 'Separator', link: '/elements/separator' },
        { text: 'Shortcode', link: '/elements/shortcode' },
        { text: 'Sidebar', link: '/elements/sidebar' },
        { text: 'SoundCloud', link: '/elements/soundcloud' },
        { text: 'Tabs', link: '/elements/tabs' },
        { text: 'Testimonial', link: '/elements/testimonial' },
        { text: 'Video', link: '/elements/video' },
        { text: 'Widget', link: '/elements/widget' },
        { text: 'Countdown', link: '/elements/countdown' },
        { text: 'Inner content', link: '/elements/inner-content' },
        { text: 'Menu', link: '/elements/menu' },
        { text: 'Modal', link: '/elements/modal' },
        { text: 'Pagination', link: '/elements/pagination' },
        { text: 'Post comments', link: '/elements/post-comments' },
        { text: 'Search', link: '/elements/search' },
        { text: 'Slider builder', link: '/elements/slider-builder' },
        { text: 'Social share', link: '/elements/social-share' },
        { text: 'Archive add to cart', link: '/elements/archive-add-to-cart' },
        { text: 'Cart cross sells', link: '/elements/cart-cross-sells' },
        { text: 'Cart products', link: '/elements/cart-products' },
        { text: 'Cart totals', link: '/elements/cart-totals' },
        { text: 'Checkout coupon', link: '/elements/checkout-coupon' },
        { text: 'Checkout customer details', link: '/elements/checkout-customer-details' },
        { text: 'Checkout form wrapper', link: '/elements/checkout-form-wrapper' },
        { text: 'Checkout login', link: '/elements/checkout-login' },
        { text: 'Checkout order review', link: '/elements/checkout-order-review' },
        { text: 'Checkout thank you', link: '/elements/checkout-thank-you' },
        { text: 'Mini cart', link: '/elements/mini-cart' },
        { text: 'Notices', link: '/elements/notices' },
        { text: 'Product additional info', link: '/elements/product-additional-info' },
        { text: 'Product add to cart', link: '/elements/product-add-to-cart' },
        { text: 'Product breadcrumbs', link: '/elements/product-breadcrumbs' },
        { text: 'Product description', link: '/elements/product-description' },
        { text: 'Product images', link: '/elements/product-images' },
        { text: 'Product meta', link: '/elements/product-meta' },
        { text: 'Product price', link: '/elements/product-price' },
        { text: 'Product rating', link: '/elements/product-rating' },
        { text: 'Product related', link: '/elements/product-related' },
        { text: 'Product reviews form', link: '/elements/product-reviews-form' },
        { text: 'Product stock', link: '/elements/product-stock' },
        { text: 'Product tabs', link: '/elements/product-tabs' },
        { text: 'Product title', link: '/elements/product-title' },
        { text: 'Product upp sells', link: '/elements/product-upp-sells' },
        { text: 'Billing', link: '/elements/billing' },
        { text: 'Checkout info', link: '/elements/checkout-info' },
        { text: 'Checkout payment', link: '/elements/checkout-payment' },
      ]
    },
    {
      text: 'Integrations',
      collapsed: false,
      items: [
        { text: 'WooCommerce', link: '/integrations/woocommerce' },
        { text: 'Advanced custom fields', link: '/integrations/advanced-custom-fields' },
        { text: 'Yoast', link: '/integrations/yoast' },
        { text: 'RankMath', link: '/integrations/rankmath' },
        { text: 'Polylang', link: '/integrations/polylang' },
      ]
    }
  ]
}

function sidebarDevDocs() {

}