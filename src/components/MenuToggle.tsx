import React from "react"
import { Box } from "@chakra-ui/react"
import { IoClose, IoMenu } from "react-icons/io5";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoClose /> : <IoMenu />}
    </Box>
  )
}