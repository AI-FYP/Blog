import PageLayout from '../layouts/PageLayout';
import MainContent from '../components/MainContent';
import homepage_data from '../dist/homepage.json'; // Import the JSON data

const Home: React.FC = () => {
  return (
    <PageLayout>
      <MainContent data={homepage_data} /> {/* Pass the data as a prop */}
    </PageLayout>
  );
};

export default Home;
