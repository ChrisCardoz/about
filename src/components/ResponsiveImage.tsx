import {FC, useState} from 'react';
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
`;

const ResponsiveImage: FC<SimpleProps> = (props) => {
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
};

export default ResponsiveImage;
