import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import RstInput from '@shared/components/Input'
import { useAuth } from '@shared/providers/auth'
import RstButton from '@shared/components/Button'
import RstText from '@shared/components/Text'
import { useRouter } from 'next/router'
import { COOKIES_NAMES } from '@shared/constants/cookie-names'
import { parseCookies } from 'nookies'
import RstRadioButton from '@shared/components/RadioButton'

export interface iLogin {
  email: string
  password: string
  role: {
    label?: string
    value: 'BARBERSHOP'
    id: number
  }
}

const options = [{ label: 'Barbearia', value: 'BARBERSHOP', id: 0 }]

const BarbershopLogin = () => {
  const initialValues: iLogin = useMemo(() => {
    return {
      email: '',
      password: '',
      role: {
        id: 0,
        value: 'BARBERSHOP',
        label: 'Barbearia'
      }
    }
  }, [])

  const [formValues, setFormValues] = useState<iLogin>(initialValues)

  const { handleLogin, isLoadingLogin } = useAuth()
  const router = useRouter()

  const handleChangeValue = (fname: keyof iLogin, value: unknown) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [fname]: value
    }))
  }

  const handleSubmit = () => {
    handleLogin(formValues)
  }

  //Redirect to Dashboard if is logged
  useEffect(() => {
    const { [COOKIES_NAMES.BARBER_SHOP_TOKEN]: barbershopToken } = parseCookies()

    if (barbershopToken) {
      router.push('/barbershop/dashboard')
    }
  }, [router])

  return (
    <Box
      as="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault()
      }}
    >
      <Flex justifyContent="center" alignItems="start" minH="100vh" bg="gray.100">
        <Grid maxW={480} w="100%" gap={6} p={8} borderRadius={16} m={6}>
          <GridItem>
            <RstText fontVariant="h3" color="newYellow.1100">
              Bem-vindo
            </RstText>
            <RstText fontVariant="body1" color="gray.1100">
              Estamos felizes em ver você aqui. para acessar sua conta, primeiro realize o login.
            </RstText>
          </GridItem>

          <RstRadioButton
            options={options}
            onChange={(value) => handleChangeValue('role', value)}
            colorScheme={`newYellow`}
          />

          <RstInput
            placeholder="E-mail"
            onChange={({ target }) => handleChangeValue('email', target.value)}
            value={formValues.email}
          />

          <GridItem display="flex" flexDir="column" alignItems="end">
            <RstInput
              placeholder="Senha"
              onChange={({ target }) => handleChangeValue('password', target.value)}
              type="password"
              value={formValues.password}
            />
          </GridItem>

          <RstButton
            size="md"
            type="submit"
            onClick={handleSubmit}
            isLoading={isLoadingLogin}
            colorScheme={`newYellow`}
          >
            Login
          </RstButton>

          <Box color="gray.600" w="100%" h="2px" bg="gray.600" />

          <RstText color="gray.1200" fontVariant="body1" textAlign="center">
            Não possui conta?
            <RstButton ml={2} variant="link" as="a" href="/barbershop/register" colorScheme={`newYellow`}>
              Cadastre-se
            </RstButton>
          </RstText>
        </Grid>
      </Flex>
    </Box>
  )
}

export default BarbershopLogin
