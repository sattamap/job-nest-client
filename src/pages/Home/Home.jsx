import { Helmet } from "react-helmet-async";
import AppSote from "../../components/AppSote";
import Banner from "../../components/Banner";
import JobByCategory from "../../components/JobByCategory";
import Testimonials from "../../components/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobNest</title>
            </Helmet>
            <Banner></Banner>
            <JobByCategory></JobByCategory> 
            <Testimonials></Testimonials>
            <AppSote></AppSote>
        </div>
    );
};

export default Home;