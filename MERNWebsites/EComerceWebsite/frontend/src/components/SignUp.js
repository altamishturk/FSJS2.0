import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
            <div className="w-full max-w-md mx-auto my-10 p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-900">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create Accout</h2>
                    <p className="text-sm text-center text-gray-400">Already have account?
                        <Link to="/login" className='focus:underline hover:underline'>
                           Login here
                        </Link>
                    </p>
                   
                    <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid my-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm">First Name</label>
                                <input type="text" name="firstName" id="firstName" placeholder="Raj..." className="w-full px-3 py-2 border rounded-md border-brandbg2 bg-brandbg1 text-brandtext1 focus:border-brandbg2" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm">Last Name</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Singh..." className="w-full px-3 py-2 border rounded-md border-brandbg2 bg-brandbg1 text-brandtext1 focus:border-brandbg2" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-brandbg2 bg-brandbg1 text-brandtext1 focus:border-brandbg2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-brandbg2 bg-brandbg1 text-brandtext1 focus:border-brandbg2" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="profileImg" className="text-sm">Profile Photo</label>
                                </div>
                                <input type="file" name="profileImg" id="profileImg" className="w-full px-3 py-2 border rounded-md border-brandbg2 bg-brandbg1 text-brandtext1 focus:border-brandbg2" />
                            </div>
                        </div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-brandbg2 text-gray-100">Sign Up</button>
                    </form>
                </div>
        </div>
  )
}

export default SignUp