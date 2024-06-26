//const auth = firebase.auth();
const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(googleProvider)
    .then(() => {
      window.location.assign('./home');
      return null;
    })
    .catch(error => {
      console.error(error);
    })
  }
  
