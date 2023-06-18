import React, { useEffect, useState } from 'react';
import { Translation } from 'react-i18next';
import Footer from '../Footer';
import ParallaxImage from '../parallax/ParallaxImage';
import NavBar from '../ui-common/NavBar';
import ScrollButton from '../ui-common/ScrollButton';
import TopMenu from '../ui-common/TopMenu';
import './listOrder.css';
import { useIntl } from 'react-intl';
import axiosServices from '../../services';
import { IconArrowRight } from '@tabler/icons-react';
import moment from 'moment/moment';
import classNames from 'classnames';

const ListOrder = () => {
  const { formatMessage } = useIntl();
  const [listOrder, setListOrder] = useState([]);

  const orderStatus = {
    '-1': formatMessage({ id: 'all' }),
    0: formatMessage({ id: 'pending' }),
    1: formatMessage({ id: 'done' }),
    2: formatMessage({ id: 'cancelled' })
  };

  useEffect(() => {
    axiosServices
      .get('/orders?orderBy=createdAt&orderType=desc&pageSize=10&pageNumber=0')
      .then((res) => {
        setListOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Translation>{(t) => <TopMenu t={t} />}</Translation>
      <NavBar />
      <div className="container py-4">
        <div className="px-2">
          <h2>{formatMessage({ id: 'list order' })}</h2>
        </div>
        <div className="order-item-search row px-4 py-2">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 pr-2">
            <label htmlFor="ee">{formatMessage({ id: 'search' })}</label>
            <input type="text" placeholder={formatMessage({ id: 'search' })} />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 pr-2">
            <label htmlFor="ee">{formatMessage({ id: 'status' })}</label>
            <select>
              <option value="-1">{orderStatus['-1']}</option>
              <option value="0">{orderStatus['0']}</option>
              <option value="1">{orderStatus['1']}</option>
              <option value="2">{orderStatus['2']}</option>
            </select>
          </div>
        </div>
        {listOrder.map((order) => (
          <div key={order.code} className="order-item row px-4 py-2">
            <div className="col-12 p-0 order-time pb-2">{moment(order.createdAt).format('LLL')}</div>
            <div className="order-code col-md-8 col-12 p-0">
              <b>{formatMessage({ id: 'order-code' })}:</b>&nbsp;{order.code}
            </div>
            <div className="col-md-4 col-12 p-0">
              <b>{formatMessage({ id: 'status' })}:</b>&nbsp;
              <span className={classNames('order-status', { 'text-success': order.status == '1' }, { 'text-danger': order.status == '0' })}>
                {orderStatus[order.status]}
              </span>
            </div>
            <hr />
            <div className="order-amount col-6 p-0">
              {formatMessage({ id: 'amount' })}: {order.totalAmount}
            </div>
            <div className="col-6 p-0 d-flex justify-content-end">
              <a href="#" className="d-flex align-items-center order-view-detail">
                {formatMessage({ id: 'view-detail' })}
                <IconArrowRight size={16} style={{ marginLeft: '0.5em' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <ParallaxImage />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};

export default ListOrder;

