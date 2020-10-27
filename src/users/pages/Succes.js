import React from "react";
import { Flex, Footer, Text, Image, Button, View,Header } from "@adobe/react-spectrum";

const Succes = () => {
  return (
    <Flex
        direction="column"
        width="100%"
        gap="size-100"
        height="100%"
        alignItems="center"
    >
    
        <View width="size-6000" justifySelf="center" >
        <Header marginStart="size-800"><h1>REGISTRATION SUCCES</h1></Header>
        <Header marginStart="size-800"><h3>Thanks for registering!</h3></Header>
        <Text marginStart="size-800">
            Your registration will be approved within 24 hours
        </Text>
        <Image
            marginStart="size-800"
            width="size-5000"
            src="celebration.png"
          />

        <Button
            marginStart="size-800"
            variant="cta"
            id="signInButton"
            type="submit"
            width="size-5000"
            onPress={() => (window.location.href = "/")}
          >
            BACK TO FULTON COU TY OUTBREACH
          </Button>

          <Footer marginStart="size-1700" > Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer>
        </View>
    </Flex>
   
  );
};

export default Succes;