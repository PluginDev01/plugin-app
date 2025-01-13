import { InputOTPForm } from '@/components/common/auth/otp/register-otp'
import Logo from '@/components/common/logo/logo'
import React from 'react'

export default function VerifyPage() {
  return (
    <div className='bg-custom-gold-gradient w-full h-screen flex flex-col gap-6 text-3xl items-center justify-center'>
      <Logo type='white'/>
      <h3>OTP Verification</h3>
      <InputOTPForm/>
    </div>
  )
}
