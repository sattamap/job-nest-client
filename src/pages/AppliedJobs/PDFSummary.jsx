
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFSummary = ({ appliedJobs }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Applied Jobs Summary</Text>
          {appliedJobs.map((job) => (
            <Text key={job._id}>
              Job Title: {job.jobTitle} <br />
              Job Category: {job.jobCategory} <br />
              Salary Range: {job.salaryRange} <br />
              Deadline: {job.applicationDeadline} <br />
              Applicants: {job.jobApplicantsNumber}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};
PDFSummary.propTypes = {
    appliedJobs: PropTypes.object ,
}
export default PDFSummary;
