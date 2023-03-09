import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    const { name, email, phone }  = req.body;

    // Log the values of name, email and phone
    console.log(`Name: ${req.body.name}`);
    console.log(`Email: ${req.body.email}`);
    console.log(`Phone: ${req.body.name}`);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            pass: process.env.TEST_APP_PSWD,
            user: process.env.TEST_APP_NAME
        }
    })

    try {
        const emailData  = await transporter.sendMail({
            from: email,
            to: 'coldnightdev@gmail.com',
            subject: `User details from a new signup ${req.body.name}`,
            html: `<p>You have a new signup for gnpay waitlist</p><br>
            <p><strong>Name: </strong>${req.body.name}</p>
            <p><strong>${req.body.name}'s Email: </strong>${req.body.email}</p>
            <p><strong>${req.body.name}'s Phone No: </strong>${req.body.phone}</p>
            `
        })
        console.log("Email sent", emailData.messageId)
        res.status(200).json("Email sent succefully")
    } catch (error) {
        console.log(error)
    }
}