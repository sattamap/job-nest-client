import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {createUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        if (
            password.length < 6 ||
            !/[A-Z]/.test(password) ||
            !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
          ) {
            Swal.fire({
              title: "Error",
              text: "Password does not meet the criteria.",
              icon: "error",
              confirmButtonText: "OK",
            });
            return; // Exit the function if the password is invalid
          }
        createUser(name, email, password, photoURL)
          .then(() => {
            setUser(null);
            Swal.fire({
                title: 'Success!',
                text: 'Data added successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              }).then(() => {
              navigate("/login");
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Registration Failed',
                icon: 'error',
                confirmButtonText: 'ok'
              });
          });
      };
      
    return (
        <div>
            <Helmet>
              <title>JobNest | Register </title>
            </Helmet>
            <div >
                <h2 className="text-xl text-center mt-5">Register Yourself</h2>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-2">Already have an Account <Link className="text-lime-700 font-bold" to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;