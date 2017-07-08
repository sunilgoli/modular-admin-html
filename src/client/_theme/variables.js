const Color = require('color');

let variables = {

  /*----------  Colors palette  ----------*/

  'colorBlue':        Color('#007bff'),
  'colorIndigo':      Color('#6610f2'),
  'colorPurple':      Color('#6f42c1'),
  'colorPink':        Color('#e83e8c'),
  'colorRed':         Color('#dc3545'),
  'colorOrange':      Color('#fd7e14'),
  'colorYellow':      Color('#ffc107'),
  'colorGreen':       Color('#85CE36'),
  'colorTeal':        Color('#20c997'),
  'colorCyan':        Color('#17a2b8'),
  'colorWhite':       Color('#fff'),

  /*----------  Main Colors  ----------*/

  'colorPrimary':          Color('#85CE36'),
  'colorPrimary-light':    () => variables['colorPrimary'].lighten(0.1),
  'colorPrimary-lighter':  () => variables['colorPrimary'].lighten(0.15),
  'colorPrimary-dark':     () => variables['colorPrimary'].darken(0.1),
  'colorPrimary-darker':   () => variables['colorPrimary'].darken(0.15),
  'colorSecondary':        Color('#868e96'),

  'colorText':             Color('#4f5f6f'),
  'colorText-light':       Color('#7e8e9f'),
  'colorText-muted':       Color('#C2CCD6'),
  'colorText-inverse':     Color('#ffffff'),
  'colorText-passive':     Color('#c5c5c5'),

  'colorDivider':          Color('#d7dde4'),

  /*----------  Options  ----------*/



  /*----------  Components  ----------*/

  // Body
  'BodyColorBg':                  Color('#f0f3f6'),

  // App
  'AppColorBg':                   Color('#f0f3f6'),
  'AppHeaderHeight':              '70px',
  'AppHeaderHeight-xs':           '50px',
  'AppSidebarWidth':              '240px',
  'AppSidebarWidth-collapsed':    '70px',
  'AppFooterHeight':              '50px',
  'AppLayoutTransitionDuration':  '.3s',

  // Header
  'HeaderColorBg':          Color('#fff'),
  'HeaderShadow':           '0px 0px 11px rgba(102, 102, 102, 0.05)',
  'HeaderBorderBottom':     '1px solid #e0e0e0',

  // Footer
  'FooterColorBg':          Color('#fff'),
  'FooterShadow':           'none',

  // Sidebar
  'SidebarColorBg':         Color('#3a4651').darken(0.1),
  'SidebarColorText':       () => variables['colorText-inverse'].fade(0.2),
  'SidebarBgImage':         'url(\'~_assets/sidebar-bg-1.jpg\')',
  'SidebarBgImageOpacity':  1,
  'SidebarShadow':          '0px 0px 30px rgba(72, 72, 72, 0.72)',

  // Sidebar Nav
  'SidebarNavColorText':        () => variables['colorWhite'].fade(0.4),
  'SidebarNavColorText-active': () => variables['colorWhite'],

  // Page
  'PagePaddingVertical-xl':     '35px',
  'PagePaddingHorizontal-xl':   '40px',

  'PagePaddingVertical-lg':     '30px',
  'PagePaddingHorizontal-lg':   '35px',

  'PagePaddingVertical-md':     '25px',
  'PagePaddingHorizontal-md':   '20px',

  'PagePaddingVertical-sm':     '20px',
  'PagePaddingHorizontal-sm':   '20px',

  'PagePaddingVertical-xs':     '15px',
  'PagePaddingHorizontal-xs':    '10px',

  // Card
  'CardColorBg':        'rgba(255,255,255,0.94)',
  'CardShadow':         '1px 1px 5px rgba(126, 142, 159, 0.1)',
  'CardMarginBottom':   '10px',

  'CardBlockPaddingVertical':       '10px',
  'CardBlockPaddingVertical-xl':    '15px',
  'CardBlockPaddingVertical-sm':    '8px',

  'CardBlockPaddingHorizontal':     '15px',
  'CardBlockPaddingHorizontal-xl':  '20px',
  'CardBlockPaddingHorizontal-sm':  '10px',


};

module.exports = variables;