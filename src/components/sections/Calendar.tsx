import classNames from "classnames/bind"
import Section from "../shared/Section"
import styles from "./Calendar.module.scss"
import { parseISO, format } from "date-fns"
import { ko } from "date-fns/locale"
import "react-day-picker/dist/style.css"
import { DayPicker } from "react-day-picker"

const cx = classNames.bind(styles)

const css = `
    .rap-caption {
        display: none
    }
    .rdp-nav {
        display: none
    }
    .rdp-cell {
        cursor: default;
    }
    .rdp-table {
        font-size: 16px;
    }
    .rdp-day_selected {
        color: #fff;
        font-weight: bold;
        background-color: var(--pink);
    }
    .rdp-day_selected:hover {
        background-color: var(--pink);
    }

`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("txt-date")}>
            {format(weddingDate, "yyyy.MM.dd")}
          </span>
          <span className={cx("txt-time")}>
            {format(weddingDate, "aaa h시 eeee", { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx("wrap-calendar")}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => "" }}
        />
      </div>
    </Section>
  )
}

export default Calendar
