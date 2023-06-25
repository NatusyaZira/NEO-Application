import {  Box,
    Card,
    CardBody,
    Heading,
    CardHeader,
    Stack,
    StackDivider,
    Text } from '@chakra-ui/react';


const CreateCard = ()=> {
    
    
    return (
        
        <Card 
            >
            <CardHeader> <Heading className='heading' as='h4' size='xs'></Heading>
            </CardHeader>
            <CardBody >
            <Stack divider={<StackDivider />} spacing='-12'>
                <Box>
                    <Heading as='h5' size='xs'>
                        km
                    </Heading>
                    
                     <Text className='text' fontSize='xs'>
                    max estimated diameter of NEO in kilometers per day
                    </Text>
                    
                </Box>
                <Box>
                    <Heading as='h5' size='xs'>
                     pcs
                    </Heading>
                    <Text fontSize='xs'>
                    number of potentially hazardous NEOs per day
                    </Text>
                </Box>
                 <Box>
                    <Heading as='h5' size='xs'>
                      km
                    </Heading>
                    <Text fontSize='xs'>
                    closest NEO
                    </Text>
                </Box>
                <Box>
                     <Heading as='h5' size='xs'>
                      kph
                    </Heading>
                    <Text fontSize='xs'>
                    fastest NEO
                    </Text>
                </Box>
                </Stack>
                </CardBody>
                </Card>
                
    )
}

export default CreateCard;