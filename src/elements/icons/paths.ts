type Path = {
  [key: string]: Promise<typeof import("*?raw")>
}

const paths: Path = {
  "arrow-left": import("./variants/Arrows/arrow-left.svg?raw"),
  "arrow-down": import("./variants/Arrows/arrow-down.svg?raw"),
  "arrow-right": import("./variants/Arrows/arrow-right.svg?raw"),
  "arrow-narrow-left": import("./variants/Arrows/arrow-narrow-left.svg?raw"),
  "arrow-narrow-right": import("./variants/Arrows/arrow-narrow-right.svg?raw"),
  "arrow-square-up-right": import(
    "./variants/Arrows/arrow-square-up-right.svg?raw"
  ),
  "cube-01": import("./variants/Shapes/cube-01.svg?raw"),
  "cube-02": import("./variants/Shapes/cube-02.svg?raw"),
  "chevron-right": import("./variants/Arrows/chevron-right.svg?raw"),
  "code-square-01": import("./variants/Development/code-square-01.svg?raw"),
  "bell-02": import("./variants/AlertsAndFeedback/bell-02.svg?raw"),
  "link-external-01": import("./variants/General/link-external-01.svg?raw"),
  "chart-breakout-square": import(
    "./variants/Charts/chart-breakout-square.svg?raw"
  ),
  "rss-01": import("./variants/MediaDevices/rss-01.svg?raw"),
  play: import("./custom/PlayIcon.svg?raw"),
  x: import("./variants/General/x.svg?raw"),
  dot: import("./custom/dot.svg?raw"),
  "x-close": import("./variants/General/x-close.svg?raw"),
  "copy-01": import("./variants/General/copy-01.svg?raw"),
  discord: import("./variants/Socials/svg/gray/Discord.svg?raw"),
  twitter: import("./variants/Socials/svg/gray/Twitter.svg?raw"),
  telegram: import("./variants/Socials/svg/gray/Telegram.svg?raw"),
  github: import("./variants/Socials/svg/gray/Github.svg?raw"),
  youtube: import("./variants/Socials/svg/gray/YouTube.svg?raw"),
  reddit: import("./variants/Socials/svg/gray/Reddit.svg?raw"),
  facebook: import("./variants/Socials/svg/gray/Facebook.svg?raw"),
  linkedin: import("./variants/Socials/svg/gray/LinkedIn.svg?raw"),
  medium: import("./variants/Socials/svg/gray/Medium.svg?raw"),
  "target-05": import("./variants/General/target-05.svg?raw"),
  "target-04": import("./variants/General/target-04.svg?raw"),
  "stars-01": import("./variants/Weather/stars-01.svg?raw"),
  "stars-02": import("./variants/Weather/stars-02.svg?raw"),
  "face-smile": import("./variants/Users/face-smile.svg?raw"),
  "marker-pin-02": import("./variants/MapsAndTravel/marker-pin-02.svg?raw"),
  clock: import("./variants/Time/clock.svg?raw"),
  "users-01": import("./variants/Users/users-01.svg?raw"),
  "chevron-down": import("./variants/Arrows/chevron-down.svg?raw"),
  check: import("./variants/General/check.svg?raw"),
  Dot: import("./custom/dot.svg?raw"),
  "tag-03": import("./variants/FinanceAndEcommerce/tag-03.svg?raw"),
  "message-chat-circle": import(
    "./variants/Communication/message-chat-circle.svg?raw"
  ),
  "code-circle-03": import("./variants/Development/code-circle-03.svg?raw"),
  "check-circle-broken": import(
    "./variants/General/check-circle-broken.svg?raw"
  ),
  "check-circle": import("./variants/General/check-circle.svg?raw"),
  plus: import("./variants/General/plus.svg?raw"),
  minus: import("./variants/General/minus.svg?raw"),
  "check-icon": import("./custom/CheckIcon.svg?raw"),
  "pencil-line": import("./variants/Editor/pencil-line.svg?raw"),
  "folder-plus": import("./variants/Files/folder-plus.svg?raw"),
  "shield-tick": import("./variants/Security/shield-tick.svg?raw"),
  "download-01": import("./variants/General/download-01.svg?raw"),
  "send-03": import("./variants/Communication/send-03.svg?raw"),
  "alert-triangle": import(
    "./variants/AlertsAndFeedback/alert-triangle.svg?raw"
  ),
  ethereum: import("./custom/Brands/default/SvgEthereum.svg?raw"),
  arbitrum: import("./custom/Brands/default/SvgArbitrum.svg?raw"),
  avalanche: import("./custom/Brands/default/SvgAvalanche.svg?raw"),
  bnbchain: import("./custom/Brands/default/SvgBNBChain.svg?raw"),
  polygon: import("./custom/Brands/default/SvgPolygon.svg?raw"),
  "ethereum-round": import("./custom/Brands/default/SvgEthereumRound.svg?raw"),
  "arbitrum-round": import("./custom/Brands/default/SvgArbitrumRound.svg?raw"),
  "globe-01": import("./variants/MapsAndTravel/globe-01.svg?raw"),
  "sun-filled": import("./custom/sun-filled.svg?raw"),
  "moon-star-filled": import("./custom/moon-star-filled.svg?raw"),
  "chevron-up": import("./variants/Arrows/chevron-up.svg?raw"),
  "chevron-selector-vertical": import(
    "./variants/Arrows/chevron-selector-vertical.svg?raw"
  ),
  bank: import("./variants/FinanceAndEcommerce/bank.svg?raw"),
  "edit-03": import("./variants/General/edit-03.svg?raw"),
  "annotation-dots": import("./variants/Communication/annotation-dots.svg?raw"),
  "database-01": import("./variants/Development/database-01.svg?raw"),
  "file-code-01": import("./variants/Development/file-code-01.svg?raw"),
  "flag-06": import("./variants/MapsAndTravel/flag-06.svg?raw"),
  "glasses-02": import("./variants/Education/glasses-02.svg?raw"),
  "tool-01": import("./variants/General/tool-01.svg?raw"),
  folder: import("./variants/Files/folder.svg?raw"),
  "book-closed": import("./variants/Education/book-closed.svg?raw"),
  "menu-01": import("./variants/General/menu-01.svg?raw"),
  "alert-circle": import("./variants/AlertsAndFeedback/alert-circle.svg?raw"),
  "download-cloud-01": import("./variants/General/download-cloud-01.svg?raw"),
  "refresh-ccw-02": import("./variants/Arrows/refresh-ccw-02.svg?raw"),
  "switch-horizontal-02": import(
    "./variants/Arrows/switch-horizontal-02.svg?raw"
  ),
  "align-bottom-01": import("./variants/Layout/align-bottom-01.svg?raw"),
  "wallet-04": import("./variants/FinanceAndEcommerce/wallet-04.svg?raw"),
  "chevron-right-double": import(
    "./variants/Arrows/chevron-right-double.svg?raw"
  ),
  "log-out-01": import("./variants/General/log-out-01.svg?raw"),
  metamask: import("./custom/Brands/default/SvgMetamask.svg?raw"),
  "okx-wallet": import("./custom/Brands/default/SvgOkxWallet.svg?raw"),
  "gnosis-wallet": import("./custom/Brands/default/SvgGnosisWallet.svg?raw"),
  "wallet-connect": import("./custom/Brands/default/SvgWalletConnect.svg?raw"),
  "metamask-dark": import("./custom/Brands/dark/SvgMetamaskDark.svg?raw"),
  "okx-wallet-dark": import("./custom/Brands/dark/SvgOkxWalletDark.svg?raw"),
  "gnosis-wallet-dark": import(
    "./custom/Brands/dark/SvgGnosisWalletDark.svg?raw"
  ),
  "wallet-connect-dark": import(
    "./custom/Brands/dark/SvgWalletConnectDark.svg?raw"
  ),
  "search-lg": import("./variants/General/search-lg.svg?raw"),
  "link-03": import("./variants/General/link-03.svg?raw"),
  "arrow-circle-right": import("./variants/Arrows/arrow-circle-right.svg?raw"),
  "trash-01": import("./variants/General/trash-01.svg?raw"),
  "help-circle": import("./variants/General/help-circle.svg?raw"),
  table: import("./variants/Layout/table.svg?raw"),
  "base-goerli": import("./custom/Brands/default/SvgBaseGoerli.svg?raw"),
  mumbai: import("./custom/Brands/default/SvgPolygon.svg?raw"),
  clapperboard: import("./variants/General/clapperboard.svg?raw"),

  "twitter-white": import("./variants/Socials/svg/white/Twitter.svg?raw"),
  "telegram-white": import("./variants/Socials/svg/white/Telegram.svg?raw"),
  "github-white": import("./variants/Socials/svg/white/GitHub.svg?raw"),
  "discord-white": import("./variants/Socials/svg/white/Discord.svg?raw"),
  "download-03": import("./variants/General/download-03.svg?raw"),

  // custom
  "snowflake-round": import("./custom/Brands/default/SvgSnowflakeRound.svg?raw"),
  "stationdex-round": import("./custom/Brands/default/SvgStationdexRound.svg?raw"),
  "check-circle-filled": import("./custom/check-circle-filled.svg?raw"),
  "stationdex-lock": import("./custom/stationdex-lock.svg?raw"),
  "banner-bar": import("./custom/banner-bar.svg?raw"),
  "banner-arrows": import("./custom/banner-arrows.svg?raw"),
  "title-shield": import("./custom/title-shield.svg?raw"),
  "star": import("./custom/star.svg?raw"),
};

export { paths };
