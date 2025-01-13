import LoginForm from '@/components/common/auth/login/form'
import Logo from '@/components/common/logo/logo'
import React from 'react'

export default function LoginPage() {
  return (
    <div className='bg-custom-gold-gradient w-full h-screen flex flex-col gap-4 text-3xl items-center justify-center'>
      <Logo type='white'/>
      <h3>Login to Plugin</h3>
      <LoginForm/>
    </div>
  )
}
