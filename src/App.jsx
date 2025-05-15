// App.jsx
import { useBedrockPassport, LoginPanel } from "@bedrock_org/passport";
import "@bedrock_org/passport/dist/style.css";
import { Routes, Route } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import EchoAI from "./EchoAI"; 
import "./App.css";

function App() {
  const { isLoggedIn, user, signOut } = useBedrockPassport();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <EchoAI user={user} onLogout={signOut} />
          ) : (
            <div className="flex justify-center items-center h-screen bg-purple-950">
              <LoginPanel
                title="Sign in to"
                logo="https://irp.cdn-website.com/e81c109a/dms3rep/multi/orange-web3-logo-v2a-20241018.svg"
                logoAlt="Orange Web3"
                walletButtonText="Connect Wallet"
                showConnectWallet={false}
                features={{
                  enableWalletConnect: false,
                  enableAppleLogin: true,
                  enableGoogleLogin: true,
                  enableEmailLogin: false,
                }}
                titleClass="text-xl font-bold"
                logoClass="ml-2 md:h-8 h-6"
                panelClass="container p-2 md:p-8 rounded-2xl max-w-[480px]"
                buttonClass="hover:border-orange-500"
                separatorText="OR"
                separatorTextClass="bg-orange-900 text-gray-500"
                separatorClass="bg-orange-900"
                linkRowClass="justify-center"
                headerClass="justify-center"
              />
            </div>
          )
        }
      />
      <Route path="/auth/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;