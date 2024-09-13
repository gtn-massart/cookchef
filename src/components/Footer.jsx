import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer>
      <p className={`${ styles.footer } d-flex flex-row align-items-center justify-content-center p-20`}>
        Copyright © 2024 Cookchef - https://github.com/gtn-massart
      </p>
    </footer>
    ) 
}

export default Footer;