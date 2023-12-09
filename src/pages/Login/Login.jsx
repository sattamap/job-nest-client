import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


    signIn(email, password)
    .then((result) => {
      console.log(result.user);
      // Show a success message using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      });
      // Navigate to the desired location
      navigate(location?.state ? location.state : '/');
    })
    .catch((error) => {
      console.error(error);
      // Show an error message using SweetAlert
      Swal.fire({
        title: 'Error!',
        text: 'Email or password doesn\'t match. Please try again.',
        icon: 'error',
        confirmButtonText: 'ok'
      });
    });
};
      
const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: 'Success!',
            text: 'Login successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          });
          navigate(location?.state ? location.state : '/');
    })
    .catch(error=>{
        console.log(error.message);
        Swal.fire({
            title: 'Error!',
            text: 'Google sign-in failed. Please try again.',
            icon: 'error',
            confirmButtonText: 'ok'
          });
    })
}
   
   

    return (
        <div>
            <Helmet>
              <title>JobNest | Login</title>
            </Helmet>
             <div className="mt-5">
            <h2 className="text-xl text-center">Login Yourself</h2>


<form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
    </div>
    <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
    </div>
   
</form>
<div className="card-body md:w-3/4 lg:w-1/2 mx-auto">
 <div className="divider">OR</div>
    <div className='flex justify-between p-4 space-y-2'>
          <div  className="flex-grow border-r-2 pr-24">
          <h2 className="font-bold text-lg">Login With</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mt-2 mr-8">
               
                Google
            </button>
          </div>
            <div  className=" flex-grow">
            <p className="text-center">Do not have any Account <Link className="text-lime-700 font-bold" to="/register">Register</Link></p>
            </div>
           </div>
        
 </div>

            </div>
        </div>
    );
};

export default Login;