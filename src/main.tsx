import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import client from "./graphql/apolloClient.ts";
import {ApolloProvider} from "@apollo/client";
import {MenuContextProvider} from "./context/MenuContext.tsx";
import {ItemModalContextProvider} from "./context/ItemModalContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MenuContextProvider>
            <ItemModalContextProvider>
                <ApolloProvider client={client}>
                    <App/>
                </ApolloProvider>
            </ItemModalContextProvider>
        </MenuContextProvider>
    </StrictMode>,
)
