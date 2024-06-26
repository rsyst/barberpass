import { Box, Flex, Icon, Spinner, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface iProps {
  title: string
  isLoading?: boolean
  children: React.ReactNode
}

export const RstAccordion = ({ title, isLoading, children }: iProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex flexDir="column" gap={2}>
      <Box
        p={6}
        bg="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={16}
        onClick={onToggle}
      >
        <Flex gap={2} alignItems="center">
          <Text fontWeight="600">{title}</Text>
          {isLoading && <Spinner size="sm" color="gray.800" />}
        </Flex>
        {isOpen ? (
          <Icon as={FiChevronUp} color="gray" fontSize={20} />
        ) : (
          <Icon as={FiChevronDown} color="gray" fontSize={20} />
        )}
      </Box>
      {isOpen && (
        <Box p={2} bg="white" borderRadius={16} overflow="visible">
          {children}
        </Box>
      )}
    </Flex>
  )
}
