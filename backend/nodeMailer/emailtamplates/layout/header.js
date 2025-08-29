require("dotenv");

const header = (data) => {
   return (`
      <!doctype html>
      <html>
      <!-- Header Starts-->
      <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="x-apple-disable-message-reformatting">
         <title>House Of Books</title>
         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap"
            rel="stylesheet">
         <!-- CSS Reset : BEGIN -->
         <style type="text/css">
            
            html,
            body {
               margin: 0 auto !important;
               padding: 0 !important;
               height: 100% !important;
               width: 100% !important;
               font-family: 'DM Sans', sans-serif;
               box-sizing: border-box;
            }
      
            * {
               -ms-text-size-adjust: 100%;
               -webkit-text-size-adjust: 100%;
               box-sizing: border-box;
            }
      
            div[style*="margin: 16px 0"] {
               margin: 0 !important;
            }
      
            table,
            td {
               mso-table-lspace: 0pt !important;
               mso-table-rspace: 0pt !important;
            }
      
            table {
               border-spacing: 0 !important;
               border-collapse: collapse !important;
            }
      
            img {
               -ms-interpolation-mode: bicubic;
            }
      
            a {
               text-decoration: none;
            }
      
            a[x-apple-data-detectors],
            .unstyle-auto-detected-links a,
            .aBn {
               border-bottom: 0 !important;
               cursor: default !important;
               color: inherit !important;
               text-decoration: none !important;
               font-size: inherit !important;
               font-family: inherit !important;
               font-weight: inherit !important;
               line-height: inherit !important;
            }
      
            .im {
               color: inherit !important;
            }
      
            .a6S {
               display: none !important;
               opacity: 0.01 !important;
            }
      
            img.g-img+div {
               display: none !important;
            }
      
            body {
               font-family: 'DM Sans', sans-serif;
            }
      
            html,
            table,
            tr,
            td {
               margin: 0;
               padding: 0;
            }
      
            h2 {
               margin: 0;
               padding: 0
            }
      
            .responsive-table {
               width: calc(33.3% - 4px);
               display: inline-block;
               vertical-align: middle;
               text-align: left;
            }
      
            img {
               max-width: 100%
            }
      
            .conatiner-space {
               padding-left: 55px;
               padding-right: 55px;
            }
      
            @media (max-width:600px) {
      
      
               .responsive-table {
                  width: 100%;
                  min-width: 100% !important;
               }
      
               .conatiner-space {
                  padding-left: 20px;
                  padding-right: 20px;
               }
            }
         </style>
      </head>
      
      <body style="background-color: #d3c91d;">
         <table bgcolor="#F0E0BD;" width="100%" style="background-color: #d3c91d; max-width:100%; font-family: 'DM Sans', sans-serif;" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tr>
               <td align="center" valign="top">
      
                  <table width="100%" style="max-width:100%;" border="0" cellspacing="0" cellpadding="0">
                     <tr>
                        <td align="center" style="text-align: center;">
                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
                           <tr>
                        <td><br><br></td>
                      </tr>
                              <tr>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td style="width: 100%; text-align: center;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td style="width: 100%; text-align: center;">
                                    <a href="#" target="_blank"
                                                style="display: block;"><img style="width: 120px;"
                                                   src="http://hob.studioubique.com/assets/image/logo.png"
                                                   alt="" />
                                    </a>
                                 </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                              <tr>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>&nbsp;</td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                     <tr>
                  
                        <td class="conatiner-space" style="">
      
                        <table width="600" style="max-width:100%; width:100%; margin: 0 auto;" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td bgcolor="#ffffff" style="padding:30px; background-color:#ffffff;" valign="top">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                           <tr>
                              <td valign="top">
                                <div><br></div>
                              </td>
                           </tr>
                           
                           <tr>
                              <td valign="top" style="font-size:16px; line-height: 1.8; font-weight:400; color:#231f20;">
                              <!-- Header  Ends-->
      `)
}
module.exports = { header }

