import React, { useEffect, useState } from 'react';
import { Translation } from 'react-i18next';
import Footer from '../Footer';
import ParallaxImage from '../parallax/ParallaxImage';
import NavBar from '../ui-common/NavBar';
import ScrollButton from '../ui-common/ScrollButton';
import TopMenu from '../ui-common/TopMenu';
import './listOrder.css';
import { FormattedMessage, useIntl } from 'react-intl';
import axiosServices from '../../services';
import { IconArrowRight, IconChevronRight, IconHome } from '@tabler/icons-react';
import moment from 'moment/moment';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

export const OrderDetail = () => {
  const { formatMessage } = useIntl();
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  const orderStatus = {
    '-1': formatMessage({ id: 'all' }),
    0: formatMessage({ id: 'pending' }),
    1: formatMessage({ id: 'done' }),
    2: formatMessage({ id: 'cancelled' })
  };

  useEffect(() => {
    axiosServices
      .get(`/orders/detail/${id}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Translation>{(t) => <TopMenu t={t} />}</Translation>
      <NavBar />

      <div className="container py-4">
        <div className="breadcrumbs">
          <a href="#">
            <IconHome size={18} />
          </a>
          <IconChevronRight size={14} />
          <a href="/my-order">{formatMessage({ id: 'My orders' })}</a>
          <IconChevronRight size={14} />
          <span>{order.code}</span>
        </div>
        <div className="px-2">
          <h2>{formatMessage({ id: 'order detail' })}</h2>
        </div>
        <div className="order-item row px-4 py-2">
          <div className="col-12 p-0 order-time pb-2">{moment(order.createdAt).format('LLL')}</div>
          <div className="col-12 row p-0 m-0 mb-3">
            <div className="col-12 col-md-4 p-0">
              <p className="p-0 m-0" style={{ fontWeight: 'bold' }}>
                <FormattedMessage id="orderer" />
              </p>
              <p className="p-0 m-0">{order.customerName}</p>
            </div>
            <div className="col-12 col-md-4 p-0">
              <p className="p-0 m-0" style={{ fontWeight: 'bold' }}>
                <FormattedMessage id="mobile phone" />
              </p>
              <p className="p-0 m-0">{order.phoneNumber}</p>
            </div>
            <div className="col-12 col-md-4 p-0">
              <p className="p-0 m-0" style={{ fontWeight: 'bold' }}>
                <FormattedMessage id="email" />
              </p>
              <p className="p-0 m-0">{order.email}</p>
            </div>
          </div>
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
          <div className="order-amount col-12 p-0">
            {formatMessage({ id: 'amount' })}: {order.totalAmount?.toLocaleString()} VND
          </div>
        </div>
        <div className="p-2 border border-divider rounded">
          <div className="row">
            <div className="col-3 list-order-title">{formatMessage({ id: 'package name' })}</div>
            <div className="col-3 list-order-title">{formatMessage({ id: 'game name' })}</div>
            <div className="col-2 list-order-title">{formatMessage({ id: 'price' })}</div>
            <div className="col-2 list-order-title">{formatMessage({ id: 'Quantity' })}</div>
            <div className="col-2 list-order-title">{formatMessage({ id: 'Amount' })}</div>
          </div>
        </div>
        <div className="p-2 border border-divider rounded mt-2">
          {order.orderDetailList?.map((item) => (
            <div className="row" key={item.id}>
              <div className="col-3">
                <p className="m-0 p-0">{item.gamePackage.name}</p>
              </div>
              <div className="col-3">
                <p className="m-0 p-0">{item.game.name}</p>
              </div>
              <div className="col-2">{item.price.toLocaleString() + ' VND'}</div>
              <div className="col-2">{item.quantity}</div>
              <div className="col-2">{item.amount.toLocaleString() + ' VND'}</div>
            </div>
          ))}
        </div>
      </div>
      <ParallaxImage />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};