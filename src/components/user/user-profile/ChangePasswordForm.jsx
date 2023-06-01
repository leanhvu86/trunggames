import classNames from 'classnames';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import PasswordInput from './InputTypePassword';

const ChangePasswordForm = () => {
  const { formatMessage } = useIntl();
  const [enableEdit, setEnableEdit] = useState(false);

  const handleEnableEdit = () => {
    setEnableEdit((prev) => !prev);
  };

  return (
    <div className="w-100 p-3 border border-divider text-white rounded mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">Change password</h5>
        <button
          className={classNames('btn btn-sm shadow-none', { ' btn-outline-light': !enableEdit }, { 'btn-primary': enableEdit })}
          onClick={handleEnableEdit}
        >
          {enableEdit ? 'Save' : 'Edit'}
        </button>{' '}
      </div>
      <hr className="border-top border-light" />
      <div className="d-flex flex-column">
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="current password" />
          </label>
          <div className="col-lg-5 col-md-8 m-0 p-0">
            <PasswordInput
              placeholder={formatMessage({ id: 'current password' })}
              className="form-control form-control-sm"
              disabled={!enableEdit}
            />
          </div>
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="new password" />
          </label>
          <div className="col-lg-5 col-md-8 m-0 p-0">
            <PasswordInput
              placeholder={formatMessage({ id: 'new password' })}
              className="form-control form-control-sm"
              disabled={!enableEdit}
            />
          </div>
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="confirm password" />
          </label>
          <div className="col-lg-5 col-md-8 m-0 p-0">
            <PasswordInput
              placeholder={formatMessage({ id: 'confirm password' })}
              className="form-control form-control-sm"
              disabled={!enableEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePasswordForm;

