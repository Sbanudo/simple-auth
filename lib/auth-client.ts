import { createAuthClient } from "better-auth/vue"
import { usernameClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
    plugins: [
        usernameClient(),
    ]
})
export const {
    signUp,
    signIn,
    signOut,
    useSession,
    user,
    resetPassword,
    forgetPassword,
} = createAuthClient();