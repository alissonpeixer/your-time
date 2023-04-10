export const htmlLogin = (params: { url: string; host: string; theme: any }) => {
    const { url, host, theme } = params



    const brandColor = theme.brandColor || "#346df1"
    const color = {
        background: "#f9f9f9",
        text: "#444",
        mainBackground: "#fff",
        buttonBackground: brandColor,
        buttonBorder: brandColor,
        buttonText: theme.buttonText || "#fff",
    }

    return `
        <body style="background: ${color.background};">
            <table width="100%" border="0" cellspacing="20" cellpadding="0"
            style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
            <tr>
                <td align="center"
                style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
                <h1>Your Time⌚</h1>
                Login automático via E-mail
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 20px 0;">
                <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                    <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                        target="_blank"
                        style="font-size: 18px; font-family: Helvetica, Arial, sans-serif;
                        color: ${color.buttonText}; text-decoration: none;
                        border-radius: 5px;
                        padding: 10px 20px;
                        border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;
                        ">
                        Logar
                        </a>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td align="center"
                style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
                Se você não solicitou este e-mail, pode ignorá-lo com segurança.
                </td>
            </tr>
            </table>
        </body>
    `
}