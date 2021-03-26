import { auth } from "../base"

const useFirebase = () => {
  const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
  }

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
  }

  const logout = async () => {
    await auth.signOut()
  }

  return { login, signup, logout }
}

export { useFirebase }
