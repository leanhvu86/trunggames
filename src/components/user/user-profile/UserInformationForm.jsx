import classNames from 'classnames';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const UserInformationForm = () => {
  const { formatMessage } = useIntl();
  const [enableEdit, setEnableEdit] = useState(false);

  const handleEnableEdit = () => {
    setEnableEdit((prev) => !prev);
  };

  return (
    <div className="w-100 p-3 border border-light text-white rounded">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">User Information</h5>
        <button
          className={classNames('btn btn-sm shadow-none', { ' btn-outline-light': !enableEdit }, { 'btn-primary': enableEdit })}
          onClick={handleEnableEdit}
        >
          {enableEdit ? 'Save' : 'Edit'}
        </button>
      </div>
      <hr className="border-top border-light" />
      <div className="d-flex flex-column">
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="username" />
          </label>

          <input
            type="text"
            placeholder={formatMessage({ id: 'username' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="email" />
          </label>

          <input
            type="text"
            placeholder={formatMessage({ id: 'email' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="mobile phone" />
          </label>

          <input
            type="text"
            placeholder={formatMessage({ id: 'mobile phone' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="full name" />
          </label>

          <input
            type="text"
            placeholder={formatMessage({ id: 'full name' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="address" />
          </label>

          <input
            type="text"
            placeholder={formatMessage({ id: 'address' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInformationForm;
