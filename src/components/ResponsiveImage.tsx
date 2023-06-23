import {memo, useState} from 'react';
import Image from 'next/image';
import {styled} from '@mui/system';
import {ButtonBase, Dialog, Tooltip} from '@mui/material';

interface SimpleProps {
	src: string;
	alt: string;
}

const StyledImage = styled(Image)`
	width: 100%;
	height: auto;

	-webkit-box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 1);
`;

const ResponsiveImage = memo<SimpleProps>((props) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const {alt, src} = props;

	return (
		<>
			<Tooltip placement="bottom" title="Click to Enlarge">
				<ButtonBase onClick={handleClickOpen}>
					<StyledImage alt={alt} src={src} width="0" height="0" sizes="100vw" />
				</ButtonBase>
			</Tooltip>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
				<StyledImage alt={alt} src={src} width="0" height="0" sizes="100vw" />
			</Dialog>
		</>
	);
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;
