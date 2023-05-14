import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

const LocaleOptions = () => {
  const { formatMessage } = useIntl();

  const { language } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch({ type: "UPDATE_LOCALE", payload: e.target.value });
  };
  return (
    <div className="position-relative" style={{ width: "90px" }}>
      <span className="text-end w-100">
        {language === "vi"
          ? formatMessage({ id: "vietnamese" })
          : formatMessage({ id: "english" })}
      </span>
      <select
        className="formSelect h-auto position-absolute l-0 w-100 cursor-pointer"
        onChange={handleChange}
        value={language}
        name="lang"
        style={{ opacity: 0, left: 0 }}
      >
        <option className="optionsMenu" value="en">
          {formatMessage({ id: "english" })}
        </option>
        <option className="optionsMenu" value="vi">
          {formatMessage({ id: "vietnamese" })}
        </option>
      </select>
    </div>
  );
};

export default LocaleOptions;