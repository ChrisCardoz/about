import {FC} from 'react';
import Image from 'next/image';
import {styled} from '@mui/system';

interface SimpleProps {
	src: string;
	alt: string;
}

const StyledImage = styled(Image)`
	width: 100%;
	height: auto;
`;

const ResponsiveImage: FC<SimpleProps> = (props) => {
	const {alt, src} = props;
	return <StyledImage alt={alt} src={src} width="0" height="0" sizes="100vw" />;
};

export default ResponsiveImage;
