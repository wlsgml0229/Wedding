import classNames from "classnames/bind"
import Section from "../shared/Section"
import styles from "./Intro.module.scss"
import { parseISO, format } from "date-fns"
import { ko } from "date-fns/locale"
import Text from "../shared/Text"

const cx = classNames.bind(styles)

interface IntroProps {
  groomName: string
  brideName: string
  date: string
  locationName: string
  message: string
}

function Intro({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: IntroProps) {
  return (
    <Section className={cx("container")}>
      <div className={cx("wrap-persons")}>
        <span>{groomName}</span>
        <FlowerIcon className={cx("ico-flower")} />
        <span>{brideName}</span>
      </div>

      <div className={cx("wrap-location")}>
        <span>
          {format(parseISO(date), "yyyy년 M월 d일 eeee", { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <Text>{message}</Text>
    </Section>
  )
}

function FlowerIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g data-name="Outline putus" id="Outline_putus">
        <path d="M54.8945,26.1387c-.5808-1.1612-1.9948-2.8721-3.8895-2.7309a7.7691,7.7691,0,0,0-1.25-2.3787,4.89,4.89,0,0,0,.8051-.6468l2.7642-2.7646a1,1,0,0,0,.1875-1.1543c-.58-1.1616-1.9954-2.8728-3.8895-2.7311a8.1217,8.1217,0,0,0-1.8263-3.057,1,1,0,1,0-1.4141,1.4141c.0225.0224,2.2422,2.2788,1.1944,4.374a1,1,0,0,0,1.789.8945,4.6046,4.6046,0,0,0,.4648-1.619,2.2351,2.2351,0,0,1,1.5133,1.0316l-2.1973,2.1978a2.91,2.91,0,0,1-4.1148-4.1148,1,1,0,1,0-1.414-1.414,4.8464,4.8464,0,0,0-.4685.574,3.8665,3.8665,0,0,0-3.2013-1.6621A8.1211,8.1211,0,0,0,38.1211,9.293a1,1,0,0,0-1.4165,1.4121c.0225.0224,2.2353,2.3,1.1968,4.3764a1,1,0,0,0,1.789.8946,4.6051,4.6051,0,0,0,.4648-1.6191,2.2316,2.2316,0,0,1,1.5133,1.0317l-2.1973,2.1972a2.91,2.91,0,0,1-4.1148-4.1147,1,1,0,0,0-1.414-1.4141,4.9151,4.9151,0,0,0-.5966,6.2118,6.8862,6.8862,0,0,0-.7865,1.2162,3.9366,3.9366,0,0,0-1.134-.32A1.82,1.82,0,0,1,29.8076,17.58,1,1,0,0,0,27.81,17.66a.9663.9663,0,0,0,.0063.1127,3.8039,3.8039,0,0,0,3.3828,3.38,1.8081,1.8081,0,0,1,1.0938.5342c.0351.0352.0639.0713.1079.124a1.8336,1.8336,0,0,1,.4253.9727,3.781,3.781,0,0,0,1.1069,2.2832,3.7521,3.7521,0,0,0,2.2808,1.0972,1.7973,1.7973,0,0,1,1.0971.5415,1.7757,1.7757,0,0,1,.5244,1.08,3.7471,3.7471,0,0,0,1.0894,2.273,3.8458,3.8458,0,0,0,2.2837,1.1143,1.8577,1.8577,0,0,1,.9976.4409,1.46,1.46,0,0,1,.1152.1015,1.7917,1.7917,0,0,1,.5244,1.0708,3.8673,3.8673,0,0,0,2.1157,3.0279l-22.84,9.1328-1.032-1.0319a6.1707,6.1707,0,0,0,2.0256-2.3905,1,1,0,1,0-1.8095-.8515A4.0194,4.0194,0,0,1,19.6343,42.46l-.5811-.5809,8.0254-20.0781a1,1,0,0,0-1.8574-.7422L17.2946,40.89a1.9993,1.9993,0,0,0-1.5.5592l-1.2563,1.2564a1.9841,1.9841,0,0,0-.5865,1.4145c0,.03.0074.0588.0087.0887l-3.1439,1.2575a2.8884,2.8884,0,0,0-.97,4.7246l3.9624,3.9624a2.8881,2.8881,0,0,0,4.7241-.97l1.2579-3.1444c.03.0013.0586.0087.0888.0087a1.9837,1.9837,0,0,0,1.414-.586l1.2569-1.2568a1.9866,1.9866,0,0,0,.5859-1.4141c0-.0315-.0075-.0614-.009-.0927l23.7336-9.49a1.5667,1.5667,0,0,0-.4082-3.0132l-.0351-.0029a1.799,1.799,0,0,1-1.0689-.5371,1.7645,1.7645,0,0,1-.5166-1.0957,3.8847,3.8847,0,0,0-.3191-1.126,6.9385,6.9385,0,0,0,1.2184-.7786,4.9071,4.9071,0,0,0,6.2111-.5974L54.707,27.293A1,1,0,0,0,54.8945,26.1387ZM16.6763,52.4409a.8884.8884,0,0,1-1.4532.2984l-3.9624-3.9624a.8887.8887,0,0,1,.2989-1.4537l3.4052-1.3623.9138.9138a4.84,4.84,0,0,1-1.3845,1.2986,1,1,0,1,0,.9922,1.7364,6.608,6.608,0,0,0,1.8156-1.6117l.7371.7371Zm3.2046-4.3921L15.9521,44.12l1.2569-1.2568,3.9277,3.9277ZM36.4253,24.1753a1.778,1.778,0,0,1-1.0781-.5225,1.78,1.78,0,0,1-.5347-1.1045,3.8459,3.8459,0,0,0-.6413-1.6965,3.5533,3.5533,0,0,1,.622-1.1807A4.8984,4.8984,0,0,0,40.8853,19l1.3663-1.3661a4.8693,4.8693,0,0,0,.7324,1.968l-5.0735,5.0735A3.7632,3.7632,0,0,0,36.4253,24.1753Zm14.1035,4.4683a2.91,2.91,0,0,1-4.1147-4.1148A1,1,0,0,0,45,23.1147a4.9122,4.9122,0,0,0-.6717,6.0905,3.6329,3.6329,0,0,1-1.1808.6228,3.8492,3.8492,0,0,0-1.6968-.64,1.8218,1.8218,0,0,1-1.1035-.5347,1.7814,1.7814,0,0,1-.523-1.0786,3.7724,3.7724,0,0,0-.4985-1.4858l5.0722-5.0723a4.9055,4.9055,0,0,0,2.691.8018,4.9648,4.9648,0,0,0,.6674-.064l.0054.0083c.0225.0225,2.2359,2.3,1.1973,4.3765a1,1,0,0,0,1.789.8945,4.6019,4.6019,0,0,0,.4648-1.6193,2.2318,2.2318,0,0,1,1.5128,1.0324Z" />
      </g>
    </svg>
  )
}

export default Intro