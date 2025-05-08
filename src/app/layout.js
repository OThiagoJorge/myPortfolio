import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Thiago Jorge - Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/icon.png"></link>
        <link href="./globals.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
