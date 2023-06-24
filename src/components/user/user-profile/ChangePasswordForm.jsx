import classNames from 'classnames';
import React, {useState} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import PasswordInput from './InputTypePassword';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axiosServices from '../../../services';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import configData from "../../../config.json";
import {useNavigate} from "react-router-dom";

const ChangePasswordForm = () => {
    const {formatMessage} = useIntl();
    const [enableEdit, setEnableEdit] = useState(false);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
    };
    const formikProps = useFormik({
        initialValues: {
            username: 'leanhvu86@gmail.com',
            password: '123111456',
            newPassword: '123456768',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            password: Yup.string()
                .nullable()
                .trim()
                .required(formatMessage({id: 'Trường này không được để trống'}))
                .min(6)
                .max(32, formatMessage({id: 'password must be at most 32 characters'})),
            newPassword: Yup.string()
                .nullable()
                .trim()
                .required(formatMessage({id: 'Trường này không được để trống'})),
            confirmPassword: Yup.string()
                .nullable()
                .trim()
                .required(formatMessage({id: 'Trường này không được để trống'}))
                .oneOf([Yup.ref('newPassword'), null], formatMessage({id: 'password must match'}))
                .min(6, formatMessage({id: 'password must be at least 6 characters'}))
                .max(32, formatMessage({id: 'password must be at most 32 characters'}))
        }),
        onSubmit: (values, {setSubmitting}) => {
            if (user) {
                setEnableEdit((prev) => !prev);
                const refreshToken = localStorage.getItem('servicesToken');

                fetch(configData.SERVER_URL + '/auth/changePassword', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${refreshToken}`
                    },
                    body: JSON.stringify({
                        username: user?.email,
                        password: values.password,
                        newPassword: values.newPassword
                    })
                })
                    .then((res) => res.json())
                    .then(
                        (json) => {
                            console.log(json);
                            toast.success('Change password success!Please login again');
                            // this.props.logout(1);
                            setTimeout(navigateToContacts(), 3000);

                        },
                        (error) => {
                            if (error) {
                                toast.error('Cannot provide user information, please login first.');
                            }
                        }
                    );
            } else {
                toast.error('Cannot provide user information, please login first.');
            }
        }
    });
    const {handleSubmit, handleChange, values, errors, touched} = formikProps;

    const handleEnableEdit = () => {
        if (enableEdit) {
            handleSubmit();
        } else {
            setEnableEdit((prev) => !prev);
        }
    };

    return (
        <div className="w-100 p-3 border border-divider text-white rounded">
            <div className="d-flex align-items-center justify-content-between">
                <h5 className="m-0">Change password</h5>
                <button
                    className={classNames('btn btn-sm shadow-none', {' btn-outline-light': !enableEdit}, {'btn-primary': enableEdit})}
                    onClick={handleEnableEdit}
                >
                    {enableEdit ? 'Save' : 'Edit'}
                </button>
                {' '}
            </div>
            <hr className="border-top border-light"/>
            <div className="d-flex flex-column">
                <div className="row mt-2">
                    <label htmlFor="" className="p-0 col-lg-4 col-xl-3 col-md-4">
                        <FormattedMessage id="current password"/>
                    </label>
                    <div className="col-lg-5 col-md-8 m-0 p-0">
                        <PasswordInput
                            placeholder={formatMessage({id: 'current password'})}
                            className="form-control form-control-sm"
                            disabled={!enableEdit}
                            name="password"
                            onChange={handleChange}
                            error={Boolean(errors.password, touched.password)}
                            errorMessage={errors.password}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="p-0 col-lg-4 col-xl-3 col-md-4">
                        <FormattedMessage id="new password"/>
                    </label>
                    <div className="col-lg-5 col-md-8 m-0 p-0">
                        <PasswordInput
                            placeholder={formatMessage({id: 'new password'})}
                            className="form-control form-control-sm"
                            disabled={!enableEdit}
                            onChange={handleChange}
                            name="newPassword"
                            error={Boolean(errors.newPassword, touched.newPassword)}
                            errorMessage={errors.newPassword}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="p-0 col-lg-4 col-xl-3 col-md-4">
                        <FormattedMessage id="confirm password"/>
                    </label>
                    <div className="col-lg-5 col-md-8 m-0 p-0">
                        <PasswordInput
                            placeholder={formatMessage({id: 'confirm password'})}
                            className="form-control form-control-sm"
                            onChange={handleChange}
                            disabled={!enableEdit}
                            name="confirmPassword"
                            error={Boolean(errors.confirmPassword, touched.confirmPassword)}
                            errorMessage={errors.confirmPassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChangePasswordForm;

