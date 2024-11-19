import React, { useState } from 'react'

export function useDisclosure(intialState= false) {
 const [isOpen,setIsOpen]=useState(intialState);
 const onOpen =()=> setIsOpen(true);
 const onClose =()=> setIsOpen(false);
 const onToggle =()=> setIsOpen((prev)=> !prev);
  return {isOpen,onOpen,onClose,onToggle}
}
