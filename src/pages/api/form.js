import { Redirect } from "next"
export default function handler(req, res) {
    const body  = req.body

    console.log('body: ', body)

    

    

    if ( !body.Fname || !body.Email || !body.Pnumber) {
        return res.status(400).json({data: 'Details not found'})
    }

    res.status(200).redirect(307, '/thankyou');

    res.status(200).json({ 
        Name: `${body.Fname}`,
        Email: `${body.Email}`,
        Phone_Number: `${body.Pnumber}`
    })
}