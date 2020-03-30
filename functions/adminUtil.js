
var admin = require("firebase-admin");

var serviceAccount = require("./keerthik-wsp20-firebase-adminsdk-ki03a-ba7e72a544.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://keerthik-wsp20.firebaseio.com"
});

async function createUser(req,res){
    const email = req.body.email
    const password = req.body.password
    const displayName = req.body.displayName
    const phoneNumber = req.body.phoneNumber
    const photoURL = req.body.photoURL
    try{
        await admin.auth().createUser(
            {email, password, displayName, phoneNumber, photoURL}
        )
        res.render('signin.ejs', {page: 'signin', user: false, error: 'Account created! Sign in please'})
    } catch (e){
        res.render('signup.ejs', {error: e, user:false, page: 'signup'})
    }
}
async function listUsers(req,res){
    try{
        const userRecord = await admin.auth().listUsers()
        res.render('admin/listUsers.ejs', {users: userRecord.users, error: false})
    }catch (e){
        res.render('admin/listUsers.ejs', {users: false, error: e})
    }
}
module.exports = {
    createUser,
    listUsers
}
