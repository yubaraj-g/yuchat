import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import uploadPhoto from '../img/uploadPhoto.png'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = (e.target[0].value)
    const email = (e.target[1].value)
    const password = (e.target[2].value)
    const file = (e.target[3].files[0])

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, username); // username is working as the filename of the image here.

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true)
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            console.log('File available at', downloadURL);
            await updateProfile(result.user,{
              username,
              photoURL:downloadURL,
            })
          }); // It's returning the download url for the image or file
        }
      );

    } catch (err) {
      setErr(true)
    }
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   console.log(user)
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    // });
  }

  return (
    <div className="flex bg-cyan-600 w-full h-screen text-center text-black justify-center items-center">
      <div className='formContainer bg-white p-10 rounded-md shadow-xl shadow-sky-700 w-2/5'>
        <div className='formWrapper flex flex-col gap-6 p-2 items-center'>
          <div className='logo font-bold text-2xl text-blue-500'>YuChat</div>
          <div className='title'>Register</div>
          <form action="/" className='flex flex-col gap-4 text-black w-2/3' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your username' name='username' />
            <input type="email" placeholder='Enter your email' name='email' />
            <input type="password" placeholder='Enter your password' name='password' minLength={6} required={true} />
            <span className='text-xs text-gray-400 -mt-3'>Minimum 6 characters needed.</span>
            <input type="file" id='fileInput' style={{ display: 'none' }} name='file' />
            <label htmlFor="fileInput" className='my-2 flex gap-2 cursor-pointer items-center text-blue-400'>
              <img src={uploadPhoto} alt="uploaded pic" style={{ width: '30px' }} />
              <span>upload your avatar</span>
            </label>
            <button className='w-3/5 py-3 bg-cyan-600 hover:bg-cyan-700 rounded font-semibold mx-auto text-white' type='submit'>Register</button>
            {err && <span className='text-red-400 text-xs'>Something went wrong!</span>}
          </form>
          <p className='text-sm text-blue-500 cursor-pointer'>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register