import { authClient } from "~/lib/auth-client";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data: session } = await authClient.useSession(useFetch);
    if (session.value) {
        if (to.path === "/sign-up") {
            return navigateTo("/");
        }
    }
    if (!session.value) {
        if (to.path === "/account") {
            return navigateTo("/");
        }
    }
});

