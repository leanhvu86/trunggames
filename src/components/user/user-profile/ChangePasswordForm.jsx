import classNames from 'classnames';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const ChangePasswordForm = () => {
  const { formatMessage } = useIntl();
  const [enableEdit, setEnableEdit] = useState(false);

  const handleEnableEdit = () => {
    setEnableEdit((prev) => !prev);
  };

  return (
    <div className="w-100 p-3 border border-light text-white rounded mt-4">
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
          <input
            type="text"
            placeholder={formatMessage({ id: 'current password' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="new password" />
          </label>
          <input
            type="text"
            placeholder={formatMessage({ id: 'new password' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
        <div className="row mt-2">
          <label htmlFor="" className="col-lg-3 col-xl-3 col-md-4">
            <FormattedMessage id="confirm password" />
          </label>
          <input
            type="text"
            placeholder={formatMessage({ id: 'confirm password' })}
            class="form-control form-control-sm col-lg-5 col-md-8"
            disabled={!enableEdit}
          />
        </div>
      </div>
    </div>
  );
};
export default ChangePasswordForm;
