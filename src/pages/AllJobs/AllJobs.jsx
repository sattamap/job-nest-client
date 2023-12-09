import { Helmet } from "react-helmet-async";
import JobsCard from "../../components/JobsCard";



const AllJobs = () => {
    return (
        <div>
              <Helmet>
              <title>JobNest | All Jobs</title>
            </Helmet>
            <JobsCard></JobsCard>
        </div>
    );
};

export default AllJobs;