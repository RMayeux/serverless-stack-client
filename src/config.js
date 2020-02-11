import Amplify from 'aws-amplify';

export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-rm"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://9qgml5i17e.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_0DJdJ1ixm",
      APP_CLIENT_ID: "2d8amqdh1dsfjo5mr6unpbtaur",
      IDENTITY_POOL_ID: "us-east-2:cdde75cc-33d8-47f8-8204-9bdf5df0f18b"
    }
};