import Head from 'next/head';
import Container from '@/src/components/Container';
import Footer from '@/src/components/Footer';
import OperatorLogo from '@/src/components/OperatorLogo';

const Design = () => {
	return (
		<>
			<Head>
				<title>{`Chris's Designs for Operator`}</title>
			</Head>
			<Container>
				<OperatorLogo />
			</Container>
			<Footer />
		</>
	);
};

export default Design;
