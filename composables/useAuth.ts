import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    type User
  } from 'firebase/auth'
  
  export const useAuth = () => {
    const { $auth } = useNuxtApp()
    const user = ref<User | null>(null)
    const error = ref<string | null>(null)
  
    // Monitor auth state
    onMounted(() => {
      const unsubscribe = onAuthStateChanged($auth, (newUser) => {
        user.value = newUser
      })
      
      // Cleanup subscription on unmount
      onUnmounted(() => unsubscribe())
    })
  
    // Sign in
    const signIn = async (email: string, password: string) => {
      try {
        const credential = await signInWithEmailAndPassword($auth, email, password)
        user.value = credential.user
        error.value = null
      } catch (e: any) {
        error.value = e.message
      }
    }
  
    // Sign up
    const signUp = async (email: string, password: string) => {
      try {
        const credential = await createUserWithEmailAndPassword($auth, email, password)
        user.value = credential.user
        error.value = null
      } catch (e: any) {
        error.value = e.message
      }
    }
  
    // Sign out
    const signOut = async () => {
      try {
        await firebaseSignOut($auth)
        user.value = null
        error.value = null
      } catch (e: any) {
        error.value = e.message
      }
    }
  
    return {
      user,
      error,
      signIn,
      signUp,
      signOut
    }
  }