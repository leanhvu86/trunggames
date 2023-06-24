import classNames from 'classnames';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import axiosServices from '../../../services';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

const initialValues = {
  token: '',
  type: '',
  id: null,
  nickName: '',
  email: '',
  fullName: '',
  address: '',
  phoneNumber: '',
  roles: []
};

const UserInformationForm = () => {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/login');
  };
  const formikProps = useFormik({
    initialValues: Object.assign(initialValues, user ?? {}),
    onSubmit: (values, { setSubmitting }) => {
      const { address, fullName, id, nickName, phoneNumber } = values;
      const body = { address, fullName, id, nickName, phoneNumber };
      setSubmitting(true);
      axiosServices
        .post('/user/update', body)
        .then((res) => {
          console.log(res);
          if(res.data.status ===200){
            handleEnableEdit();
            toast.success(formatMessage({ id: 'toast.message.success' }));
          }else{
            navigateToContacts();
          }

        })
        .catch((err) => {
          toast.success(formatMessage({ id: 'phone.duplicate' }));
          console.log(err);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  });
  const [enableEdit, setEnableEdit] = useState(false);

  const handleEnableEdit = () => {
    setEnableEdit((prev) => !prev);
  };

  const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="w-100 p-3 border border-divider text-white rounded">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="m-0">User Information</h5>
          <button
            className={classNames('btn btn-sm shadow-none', { ' btn-outline-light': !enableEdit }, { 'btn-primary': enableEdit })}
            disabled={isSubmitting}
            onClick={(e) => {
              if (!enableEdit) {
                e.preventDefault();
                handleEnableEdit();
              }
            }}
            type="submit"
          >
            {enableEdit ? 'Save' : 'Edit'}
          </button>
        </div>
        <hr className="border-top border-light" />
        <div className="d-flex flex-column">
          {/*<div className="row mt-2">*/}
          {/*  <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">*/}
          {/*    <FormattedMessage id="username" />*/}
          {/*  </label>*/}

          {/*  <input*/}
          {/*    type="text"*/}
          {/*    placeholder={formatMessage({ id: 'username' })}*/}
          {/*    className="form-control form-control-sm col-lg-5 col-md-8"*/}
          {/*    disabled*/}
          {/*    value={values.username}*/}
          {/*    name="username"*/}
          {/*    onChange={handleChange}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="row mt-2">
            <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">
              <FormattedMessage id="nickname" />
            </label>

            <input
              type="text"
              placeholder={formatMessage({ id: 'nickname' })}
              className="form-control form-control-sm col-lg-5 col-md-8"
              value={values.nickName}
              name="nickName"
              onChange={handleChange}
              disabled={!enableEdit}
            />
          </div>
          <div className="row mt-2">
            <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">
              <FormattedMessage id="email" />
            </label>

            <input
              type="text"
              placeholder={formatMessage({ id: 'email' })}
              className="form-control form-control-sm col-lg-5 col-md-8"
              disabled
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="row mt-2">
            <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">
              <FormattedMessage id="mobile phone" />
            </label>

            <input
              type="text"
              placeholder={formatMessage({ id: 'mobile phone' })}
              className="form-control form-control-sm col-lg-5 col-md-8"
              disabled={!enableEdit}
              value={values.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="row mt-2">
            <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">
              <FormattedMessage id="full name" />
            </label>

            <input
              type="text"
              placeholder={formatMessage({ id: 'full name' })}
              className="form-control form-control-sm col-lg-5 col-md-8"
              disabled={!enableEdit}
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="row mt-2">
            <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4 p-0">
              <FormattedMessage id="address" />
            </label>

            <input
              type="text"
              placeholder={formatMessage({ id: 'address' })}
              className="form-control form-control-sm col-lg-5 col-md-8"
              disabled={!enableEdit}
              value={values.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserInformationForm;

