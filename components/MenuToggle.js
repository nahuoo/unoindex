import React from 'react'
import { Box } from '@chakra-ui/react'
import { Logo } from './Logo'


const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    )
  }

  const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return(
      ...
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      ...
    )
  }

  const MenuLinks = () => {

    
  }

  const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
  }
  <Box
  display={{ base: isOpen ? "block" : "none", md: "block" }}
  flexBasis={{ base: "100%", md: "auto" }}
>
  <Stack
  spacing={8}
  align="center"
  justify={["center", "space-between", "flex-end", "flex-end"]}
  direction={["column", "row", "row", "row"]}
  pt={[4, 4, 0, 0]}
>
  <MenuItem to="/">Home</MenuItem>
  <MenuItem to="/how">How It Works</MenuItem>
  ...
</Stack>
</Box>