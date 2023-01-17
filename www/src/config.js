// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "62jv7hn1pqto60kh2b2fplpljv",     // CognitoClientID
  "api_base_url": "https://x120osszn8.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-bdedu-lambda-refarch-webapp.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d11yiiozwxxrrk.amplifyapp.com"                                      // AmplifyURL
};

export default config;
