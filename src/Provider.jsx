import React from 'react';
import { BedrockPassportProvider } from "@bedrock_org/passport";

const Provider = ({ children }) => {
  return (
    <BedrockPassportProvider
      baseUrl="https://api.bedrockpassport.com"
      authCallbackUrl="https://echo-ai-delta-six.vercel.app/" // Update this
      tenantId="orange-f615p6cmkv"                                
      subscriptionKey="fe0b7f252109415c99529f255e3b0f5c"                          
    >
      {children}
    </BedrockPassportProvider>
  );
};

export default Provider;