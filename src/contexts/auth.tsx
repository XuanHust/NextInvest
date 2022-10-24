import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { ACCESS_TOKEN, EXPIRED_1DAY, REFRESH_TOKEN } from '../contants/auth'
import { SignInParams } from '../models/authentication'
import authenticationAPI from '../services/authentication.service'
import { isSuccess } from '../utils'
import { getCachedData, removeCacheData, setCacheData } from '../utils/storage'

interface IAuthContextProps {
  isAuthenticated?: boolean | undefined
  setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean | undefined>>
  loading?: boolean,
  user?: { [key: string]: any },
  signIn: (params: SignInParams) => void,
  signOut: () => void,
  setUser: React.Dispatch<React.SetStateAction<{ [key: string]: any } | undefined>>
}

const AuthContext = createContext<IAuthContextProps>({
  signIn: () => { },
  signOut: () => { },
  setUser: () => { }
})

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<{ [key: string]: any } | undefined>({})
  const access_token = getCachedData(ACCESS_TOKEN)

  useEffect(() => {
    if (access_token) {
      getCurentUser()
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  // get current user
  const getCurentUser = async () => {
    const dataUser = await authenticationAPI.getCurrentUser()
    if (isSuccess(dataUser.status)) {
      setUser(dataUser?.data)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }
  // signIn
  const signIn = async (params: SignInParams) => {
    setLoading(true)
    const dataUser = await authenticationAPI.signIn(params)
    if (isSuccess(dataUser.status)) {
      setCacheData(ACCESS_TOKEN, dataUser?.data?.auth?.access_token, EXPIRED_1DAY)
      setCacheData(REFRESH_TOKEN, dataUser?.data?.auth?.refresh_token, 7 * EXPIRED_1DAY)
      setUser(dataUser?.data?.user || {})
      setIsAuthenticated(true)
      toast.success('Đăng nhập thành công!')
    } else {
      setIsAuthenticated(false)
      toast.error(dataUser?.message || "Tên đăng nhập hoặc mật khẩu không chính xác");
    }
    setLoading(false)
  }

  // signOut
  const signOut = async () => {
    const status = await authenticationAPI.signOut()
    if (isSuccess(status.status)) {
      removeCacheData(ACCESS_TOKEN)
      removeCacheData(REFRESH_TOKEN)
      setIsAuthenticated(false)
    }
  };

  const value = useMemo(
    () => ({
      loading,
      isAuthenticated,
      user,
      signIn,
      signOut,
      setUser
    }),
    [loading, isAuthenticated, user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
