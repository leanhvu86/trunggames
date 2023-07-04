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
import { IconArrowRight } from '@tabler/icons-react';
import moment from 'moment/moment';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const ListOrder = () => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const [filter, setFilter] = useState({
    pageSize: 10,
    pageNumber: 0,
    orderBy: 'createdAt',
    orderType: 'desc'
  });
  const [searchValue, setSearchValue] = useState({
    name: '',
    status: '-1'
  });
  const [enableLoadMore, setEnableLoadMore] = useState(false);
  const [listOrder, setListOrder] = useState([]);

  const orderStatus = {
    '-1': formatMessage({ id: 'all' }),
    1: formatMessage({ id: 'pending' }),
    2: formatMessage({ id: 'processing' }),
    3: formatMessage({ id: 'done' }),
    4: formatMessage({ id: 'cancelled' })
  };

  const orderStatusColors = {
    1: 'text-warning',
    2: 'text-warning',
    3: 'text-success',
    4: 'text-danger'
  };

  const handleChangeFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, key: value }));
  };

  useEffect(() => {
    axiosServices
      .get('/orders/filter', {
        params: filter
      })
      .then((res) => {
        const newOrders = res.data.filter((order) => !listOrder.some((item) => item.id === order.id)).concat(listOrder);
        setListOrder(newOrders);
        if (res.data?.length < filter.pageSize) {
          setEnableLoadMore(false);
        } else {
          setEnableLoadMore(true);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  }, [filter]);

  const handleFilter = (orders) => {
    return orders.filter((order) => {
      const conditions = [true];
      conditions.push(order.code?.includes(searchValue.name));
      conditions.push(order.status === searchValue.status || searchValue.status === '-1');
      return conditions.every((condition) => condition);
    });
  };
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
            <input
              type="text"
              placeholder={formatMessage({ id: 'search' })}
              onChange={(e) => {
                setSearchValue((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 pr-2">
            <label htmlFor="ee">{formatMessage({ id: 'status' })}</label>
            <select
              onChange={(e) => {
                setSearchValue((prev) => ({ ...prev, status: e.target.value }));
              }}
            >
              <option value="-1">{orderStatus['-1']}</option>
              <option value="1">{orderStatus['1']}</option>
              <option value="2">{orderStatus['2']}</option>
              <option value="3">{orderStatus['3']}</option>
              <option value="4">{orderStatus['4']}</option>
            </select>
          </div>
        </div>
        {handleFilter(listOrder).map((order) => (
          <div key={order.code} className="order-item row px-4 py-2">
            <div className="col-12 p-0 order-time pb-2">{moment(order.createdAt).format('LLL')}</div>
            <div className="order-code col-md-8 col-12 p-0">
              <b>{formatMessage({ id: 'order-code' })}:</b>&nbsp;{order.code}
            </div>
            <div className="col-md-4 col-12 p-0">
              <b>{formatMessage({ id: 'status' })}:</b>&nbsp;
              <span className={classNames('order-status', orderStatusColors[order.status])}>{orderStatus[order.status]}</span>
            </div>
            <hr />
            <div className="order-amount col-6 p-0">
              {formatMessage({ id: 'amount' })}: {order.totalAmount?.toLocaleString()} VND
            </div>
            <div className="col-6 p-0 d-flex justify-content-end">
              <a href={`/my-order/${order.id}`} className="d-flex align-items-center order-view-detail">
                {formatMessage({ id: 'view-detail' })}
                <IconArrowRight size={16} style={{ marginLeft: '0.5em' }} />
              </a>
            </div>
          </div>
        ))}
        {enableLoadMore && (
          <div className="d-flex justify-content-center">
            <div
              onClick={() => {
                handleChangeFilter('pageNumber', filter.pageNumber + 1);
              }}
            >
              <FormattedMessage id="view more" />
            </div>
          </div>
        )}
      </div>
      <ParallaxImage />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  );
};

export default ListOrder;

