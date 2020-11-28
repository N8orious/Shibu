import React from "react";
import theme from "theme";
import { Theme, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="5px 0 10px 0" background="#000000" padding="4px 0 4px 0">
			<Override slot="SectionContent" sm-width="64px" sm-max-width="64px" sm-min-width="64px" />
			<Image
				width="64px"
				height="64px"
				src="https://uploads.quarkly.io/5fc28a552c4ef2001e32bd75/images/Drac_logo_brightred.png?v=2020-11-28T18:33:34.247Z"
				position="static"
				margin="0px 0px 0px 0"
				sm-margin="0px 0px 0px 0px"
			/>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		/>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});