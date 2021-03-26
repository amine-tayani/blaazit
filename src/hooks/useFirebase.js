import { auth } from "../base"

const useFirebase = () => {
  const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    auth.signOut()
  }

  return { login, signup, logout }
}

export { useFirebase }
