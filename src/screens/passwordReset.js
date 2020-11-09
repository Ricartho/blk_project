import React from 'react';
import {
  Form,
  Link,
  Button,
  View,
  Flex,
  Header,
  RadioGroup,
  Radio,
} from '@adobe/react-spectrum';
import { NavLink } from 'react-router-dom';

const SendPasswordReset = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/success';
  };

  return (
    <>
      <Flex direction="column" width="100%" height="100%" alignItems="center">
        <View marginX="size-100">
          <Form onSubmit={handleSubmit}>
            <Header>
              <h2>How do you want to reset your password?</h2>
            </Header>
            <Header>
              <h3>How do you want to reset your password?</h3>
            </Header>
            <RadioGroup>
              <Radio value="1">
                Text a confirmation code to my phone ending in ...
              </Radio>
              <Radio value="2">Email a confirmation code to ...</Radio>
            </RadioGroup>

            <Button variant="cta" type="submit">
              Continue
            </Button>

            <Link isQuiet>
              <NavLink to="#">I don&#39;t have access to any of these</NavLink>
            </Link>
          </Form>
          {/* <Footer marginStart="size-1700" > Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer> */}
        </View>
      </Flex>
    </>
  );
};

export default SendPasswordReset;