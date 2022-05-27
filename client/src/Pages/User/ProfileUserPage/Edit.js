import React, { useState, useEffect, Fragment } from 'react'
import './EditProfile.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import FaceIcon from '@material-ui/icons/Face'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateProfile,
    updatePassword,
    clearErrors,
    loadUser
} from '../../../Redux/Actions/UserAction'
import MetaData from '../../../Components/User/More/Metadata'
import { UPDATE_PROFILE_RESET } from '../../../Redux/Constants/UserConstants'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../Components/User/More/Loader'

const EditProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.user)
    const { error, isUpdated, loading } = useSelector(state => state.profile)

    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')

    const [avatar, setAvatar] = useState()
    const [avatarPreview, setAvatarPreview] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1653122947/shoe/24-248253_user-profile-default-image-png-clipart-png-download_vkwpfv.png'
    )

    const updateProfileDataChange = e => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const updateProfileSubmit = e => {
        console.log('updateProfileSubmit')
        e.preventDefault()

        if (!previewSource) return
        uploadImage(previewSource)
    }

    const uploadImage = async base64EncodeImage => {
        console.log(base64EncodeImage)
        try {
            await fetch('/api/v1/me/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodeImage }),
                headers: { 'Content-Type': 'application/json' }
            })
        } catch (error) {
            console.log(error)
        }
    }

    // const updateProfileSubmit = e => {
    //     e.preventDefault()

    //     const myForm = new FormData()
    //     myForm.append('avatar', avatar)

    //     dispatch(updateProfile(myForm))
    // }

    // console.log('myFormout', avatar)

    // const updateProfileDataChange = e => {
    //     const reader = new FileReader()

    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setAvatarPreview(reader.result)
    //             setAvatar(reader.result)
    //         }
    //     }

    //     reader.readAsDataURL(e.target.files[0])
    // }

    // useEffect(() => {
    //     if (user) {
    //         setAvatarPreview(user?.avatar?.url)
    //     }

    //     if (error) {
    //         alert.error(error)
    //         dispatch(clearErrors())
    //     }

    //     if (isUpdated) {
    //         alert.success('Profile Updated Successfully')
    //         dispatch(loadUser())

    //         navigate('/account')

    //         dispatch({
    //             type: UPDATE_PROFILE_RESET
    //         })
    //     }
    // }, [dispatch, error, navigate, user, isUpdated])

    return (
        <Fragment>
            {loading ? (
                <Loading />
            ) : (
                <Fragment>
                    <MetaData title="Update Profile" />
                    <div className="updateProfileContainer">
                        <div className="updateProfileBox">
                            <h2 className="updateProfileHeading">
                                Update Profile
                            </h2>

                            <form
                                className="updateProfileForm"
                                encType="multipart/form-data"
                                onSubmit={updateProfileSubmit}
                            >
                                <div id="updateProfileImage">
                                    <img
                                        src={avatarPreview}
                                        alt="Avatar Preview"
                                    />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        value={fileInputState}
                                        onChange={updateProfileDataChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Update"
                                    className="updateProfileBtn"
                                />
                            </form>
                            {previewSource && (
                                <img
                                    src={previewSource}
                                    alt="Preview"
                                    style={{ height: '90px' }}
                                />
                            )}
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default EditProfile
