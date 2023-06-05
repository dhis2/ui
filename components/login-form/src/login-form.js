import React from "react"
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom'
import { CompleteRegistrationPage, ConfirmEmailPage, CreateAccountPage, LoginPage, PasswordResetRequestPage, PasswordUpdatePage } from "./pages"
import { LoginFormProvider } from "./login-form-provider/index.js"

export const LoginForm = ({uiLocale, dir}) => {
    return (
        <LoginFormProvider uiLocale={uiLocale} dir={dir}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/create-account" element={<CreateAccountPage />} />
                    <Route
                        path="/complete-registration"
                        element={<CompleteRegistrationPage />}
                    />
                    <Route
                        path="/reset-password"
                        element={<PasswordResetRequestPage />}
                    />
                    <Route path="/update-password" element={<PasswordUpdatePage />} />
                    <Route path="/confirm-email" element={<ConfirmEmailPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </HashRouter>
        </LoginFormProvider>
    )
} 