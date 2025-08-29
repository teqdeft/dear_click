const { footer } = require("./layout/footer.js")
const { header } = require("./layout/header.js")

const otpEmailTemplate = (data) => {
    const emailContent = (
        `<tr>
            <td align="center" valign="top" style="padding: 20px;">
                <h2 style="margin:0; font-size:22px; color:#333;">Email Verification Code</h2>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top" style="padding: 20px; font-size:16px; color:#333;">
                <p>Dear ${data.email},</p>
                <p>Use the following One-Time Password (OTP) to verify your email address:</p>
                <p style="font-size:24px; font-weight:bold; letter-spacing:4px; color:#007bff; text-align:center; margin:20px 0;">
                    ${data.otp}
                </p>
                <p>This OTP is valid for <strong>${data.expiry}</strong>. Do not share it with anyone.</p>
                <p>If you didn’t request this, please ignore this email.</p>
            </td>
        </tr>`
    );

    return header() + emailContent + footer();
}

module.exports = { otpEmailTemplate } 
