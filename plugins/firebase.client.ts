import { initializeApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'


declare module '#app' {
  interface NuxtApp {
    $auth: Auth
    $firestore: Firestore
    $storage: FirebaseStorage
  }
}

export default defineNuxtPlugin(nuxtApp => {
  let runtimeConf = useRuntimeConfig();
  
  const config = {
    apiKey: runtimeConf.public.firebaseApiKey,
    authDomain: runtimeConf.public.firebaseAuthDomain,
    projectId: runtimeConf.public.firebaseProjectId,
    storageBucket: runtimeConf.public.firebaseStorageBucket,
    messagingSenderId: runtimeConf.public.firebaseMessagingSenderId,
    appId: runtimeConf.public.firebaseAppId,
  }

  const app = initializeApp(config)
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  nuxtApp.provide('auth', auth)
  nuxtApp.provide('firestore', firestore)
  nuxtApp.provide('storage', storage)
})