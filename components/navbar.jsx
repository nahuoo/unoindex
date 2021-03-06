import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  SimpleGrid,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box pos="fixed" boxShadow="base" w="100%" zIndex={30}>
      <Flex
        bg='white'
        color='gray.600'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor='gray.200'
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          ml={5}
          align={'center'}
          justify={{ base: 'center', md: 'start' }}
        >
          <Link href="/">
            <Image
              boxSize="40px"
              objectFit="cover"
              src="/uno.png"
              alt="Logo UnoElectromedicina"
            />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >
            Ingresar
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'red.base'}
            href={'#'}
            _hover={{
              bg: 'red.hover',
            }}
          >
            Registrarse
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor ='gray.600'
  const linkHoverColor ='gray.800'
  const popoverContentBgColor ='white'

  return (
    <Stack direction={'row'} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'2xl'}
              >
                <Stack>
                  <SimpleGrid columns={2} spacing={2}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                    ))}
                    </SimpleGrid>
                </Stack>
                
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = (NAV_ITEMS) => {
  return (
    <Link     
      href={NAV_ITEMS.href}
      role={'group'}
      display={'flex'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'gray.50' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'verde' }}
            fontWeight={500}
          >
            {NAV_ITEMS.label}
          </Text>
          <Text fontSize={'sm'}>{NAV_ITEMS.subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.base'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg='white'
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = (NAV_ITEMS) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={NAV_ITEMS.children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={NAV_ITEMS.href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color='gray.600'
        >
          {NAV_ITEMS.label}
        </Text>
        {NAV_ITEMS.children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor='gray.200'
          align={'start'}
        >
          {NAV_ITEMS.children &&
            NAV_ITEMS.children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: "Equipos",
    children: [
      {
        label: "Agitadores",
        subLabel: "",
        href: "/agitadores",
      },
      {
        label: "Autoanalizadores de quimica clinica",
        subLabel: "",
        href: "categories/autoanalizadores",
      },
      {
        label: "Ba??o termicos",
        subLabel: "",
        href: "categories/banos",
      },
      {
        label: "Biomarcadores de urgencia",
        subLabel: "",
        href: "categories/biomarcadores",
      },
      {
        label: "Cabinas flujo laminar",
        subLabel: "",
        href: "categories/cabinas",
      },
      {
        label: "Centr??fugas",
        subLabel: "",
        href: "categories/centrifugas",
      },
      {
        label: "Coagul??metros",
        subLabel: "",
        href: "categories/coagulometros",
      },
      {
        label: "Contadores hematol??gicos",
        subLabel: "",
        href: "categories/contadores",
      },
      {
        label: "Estufas de cultivo",
        subLabel: "",
        href: "categories/estufasCultivo",
      },
      {
        label: "Estufas de esterilizaci??n",
        subLabel: "",
        href: "categories/estufasEsterilizacion",
      },
      {
        label: "Gases en sangre",
        subLabel: "",
        href: "categories/gases",
      },
      {
        label: "Ion Selectivo",
        subLabel: "",
        href: "categories/iones",
      },
      {
        label: "Microscopios",
        subLabel: "",
        href: "categories/microscopios",
      },
      {
        label: "Quimioluminiscencia",
        subLabel: "",
        href: "categories/quimioluminiscencia",
      },
    ],
  },
  {
    label: "Nosotros",
    href: "#about",
  },
  {
    label: "Ubicaci??n",
    href: "https://www.google.com.ar/maps/dir//Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires,+Argentina/@-37.982938,-57.5634771,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!2m2!1d-57.5590997!2d-37.9829465!3e2",
  },
  {
    label: "Contacto",
    children: [
      {
        label: "Tel??fono",
        subLabel: "Llamar a (0223)473-9018",
        href: "tel:02234739018",
      },
      {
        label: "Celular",
        subLabel: "Llamar al (0223)156-800944",
        href: "tel:5492236800944",
      },
      {
        label: "WhatsApp",
        subLabel: "Enviar mensaje al (0223)156-800944",
        href: "https://api.whatsapp.com/send?phone=5492236800944",
      },
      {
        label: "Email",
        subLabel: "Escribinos a unoelectromedicina@gmail.com",
        href: "mailto:unoelectromedicina@gmail.com",
      },
    ],
  },
];
