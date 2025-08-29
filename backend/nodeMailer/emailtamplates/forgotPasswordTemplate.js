const { footer } = require("./layout/footer");
const { header } = require("./layout/header");

const forgotPasswordTemplate = (data) => {
    const emailContent = `
       <table width="100%" border="0" cellspacing="0" cellpadding="0">
       <tr>
           <td>
       <table  style="" border="0" cellspacing="0" cellpadding="0">
       <tr>
           <td valign="top" align="center" style="text-align:center">
           </td>
       </tr>
       <tr>
           <td style="padding-top: 13px;">
               <h2 style="font-size:18px; line-height: 1.6; color:#000; margin-bottom:0px; margin-top: 16px;">Dear <span style="color: #056047 !important;"> ${data.name},</span></h2>
               <h1 style="font-size:17px; line-height: 1; color:#000; margin-bottom:0px; margin-top: 16px; margin-bottom: 20px;">Reset your password</h1>
           </td>
       </tr>
       <tr>
       <td>
       <p style="margin: 16px 0 40px;">Need to reset your password? No problem! Just click the button below and you'll be on your way. If you did not make this request, please ignore this email.</p>
       <p style="margin: 0 0 40px;"><a style="background-color: #056047; padding: 10px 40px; border-radius:10px; color: #fff; display: inline-block;
       font-weight: bold;" href=${data.link}>Reset your password</a></p>
       </td>
   </tr>
       </table>
       </td>
   </tr>
       </table>
       `

    return header() + emailContent + footer();
}

module.exports = { forgotPasswordTemplate };