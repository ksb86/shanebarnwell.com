// This template is used to generate/prerender html that is sent to the client.

const Template = ({path, title, body, cssPath, jsPath}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <meta property="og:url" content="http://www.shanebarnwell.com" />
      <meta property="og:title" content="Shane Barnwell - Senior Front End Developer" />
      <meta property="og:description" content="A little bit about who I am and what I do." />
      <meta property="og:image" content="https://media.licdn.com/dms/image/C5603AQEd8UEV07YLrA/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=9LDpBr1zpJlRB3UhHe926AhaDkULHFKYx4faEK83S4k" />
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <link rel="stylesheet" href="${cssPath}">
      <script src="${jsPath}" defer></script>
      <!-- script src="https://www.google.com/recaptcha/api.js?render=6LcNzugUAAAAAJwPesYxSIz6nhDdtJ0uVXJW-r7x"></script -->
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CG5LHC8BRL"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CG5LHC8BRL');
      </script>
    </head>
    <body class="page-${path}">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Template;
