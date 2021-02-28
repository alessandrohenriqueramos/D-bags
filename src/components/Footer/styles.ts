import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.footer};
	color: ${({ theme }) => theme.colors.primary};
	padding: 2rem;
	z-index: 2;
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1000px;

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;

export const Items = styled.div`
	> h1 {
		font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
		font-size: 2.8rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.6rem;
		font-weight: 200;
		padding: 1rem 0;
		opacity: 0.95;
	}

	@media (max-width: 550px) {
		text-align: center;
	}
`;

export const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors["button-hover"]};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 7px;
	box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
	padding: 0.6rem 1.4rem;
`;

export const Moon = styled.button`
	background: transparent;
	border-width: 0;
	outline: transparent;

	> svg {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 1.8rem;
		margin: 0 0.6rem 0 0;
		cursor: pointer;
	}
`;
