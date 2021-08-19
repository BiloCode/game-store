import firebase from "firebase";
import { onMounted, onUnmounted, provide, readonly, ref } from "vue";

import { auth } from "@/firebase-service";

type TUser = {
  id: string;
  email: string;
};

const useAuth = () => {
  let authListener: firebase.Unsubscribe;

  const userAuth = ref<TUser>();

  onMounted(() => {
    authListener = auth.onAuthStateChanged(user => {
      if (!user) {
        userAuth.value = undefined;
        return;
      }

      userAuth.value = {
        id: user.uid,
        email: user.email!
      };
    });
  });

  onUnmounted(() => {
    authListener();
  });

  provide("userAuth", readonly(userAuth));
};

export default useAuth;
