import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center  items-center'>
            <Helmet>
              <title>JobNest | Error Page </title>
            </Helmet>
            <h1 className="font-extrabold text-5xl">Oops!!</h1>
            <p className="mt-4 text-xl ">Page not found.</p>
        </div>
    );
};

export default ErrorPage;