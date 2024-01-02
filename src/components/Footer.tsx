import { memo } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import styled from "@mui/system/styled";
import Padding from "./Padding";
import { useRouter } from "next/router";

const linkCss = `
	text-transform: none;
	text-decoration: none;
	padding: 8px;
	padding-left: 16px;
	padding-right: 16px;
  font-size: .85rem;
	&:hover {
		cursor: pointer;
    background: transparent;
	}
`;

const StyledLink = styled(Link)`
  ${linkCss}
`;

const Footer = memo(() => {
  const router = useRouter();
  return (
    <>
      <Grid container direction="row" justifyContent="center">
        <StyledLink onClick={() => router.push("/")}>home</StyledLink>

        <StyledLink href="Resume2023.pdf" target="_blank">
          resume
        </StyledLink>

        <StyledLink
          href="https://www.linkedin.com/in/chriscardoz/"
          target="_blank"
        >
          linkedin
        </StyledLink>

        <StyledLink onClick={() => router.push("/mlb")}>
          top mlb players 2023
        </StyledLink>

        <StyledLink href="https://github.com/ChrisCardoz/about" target="_blank">
          source code
        </StyledLink>
      </Grid>
      <Padding size={32} div />
    </>
  );
});

Footer.displayName = "Footer";

export default Footer;
