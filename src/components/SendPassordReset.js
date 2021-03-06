import React from "react";
import {
  Form,
  Link,
  Button,
  Grid,
  Text,
  View,
  RadioGroup,
  Radio,
} from "@adobe/react-spectrum";
import { NavLink } from "react-router-dom";

const handleSubmit = (event) => {
  event.preventDefault();
  window.location.href = "/success";
};

const SendPasswordReset = () => {
  return (
    <Grid columns="1fr 2fr 1fr" rows="1fr 2fr" width="100%" height="100%">
      <View
        gridColumnStart="2"
        gridColumnEnd="3"
        gridRowStart="2"
        gridRowEnd="3"
        height="100%"
        width="100%"
      >
        <Form
          width="100%"
          height="100%"
          marginStart="single-line-height"
          onSubmit={handleSubmit}
        >
          <Text>
            <h1>How do you want to reset your password?</h1>
          </Text>
          <Text>
            <h3>
              We found the following information associated with yout account
            </h3>
          </Text>
          <RadioGroup>
            <Radio value="1">
              Text a confirmation code to my phone ending in ...
            </Radio>
            <Radio value="2">Email a confirmation code to ...</Radio>
          </RadioGroup>

          <Button variant="primary" id="signInButton" type="submit" width="40%">
            Continue
          </Button>

          <Link isQuiet>
            <NavLink to="#">I don&#39;t have access to any oh these</NavLink>
          </Link>
        </Form>
      </View>
    </Grid>
  );
};
export default SendPasswordReset;
