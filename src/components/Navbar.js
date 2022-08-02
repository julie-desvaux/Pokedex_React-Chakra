import { Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Flex justifyContent="flex-end" p={5} position="fixed" width="100%">
			<Button colorScheme="teal" variant="solid">
				Home
			</Button>
			<Button colorScheme="teal" variant="solid" ml={5}>
				Login
			</Button>
		</Flex>
	);
};

export default Navbar;
