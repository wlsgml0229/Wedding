import classNames from "classnames/bind"
import styles from "./Invitation.module.scss"
import Section from "@shared/Section"
import Text from "@shared/Text"

const cx = classNames.bind(styles)

function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx("container")}>
      <Text>{message}</Text>
    </Section>
  )
}

export default Invitation
