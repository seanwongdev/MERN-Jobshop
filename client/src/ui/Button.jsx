function Button({children, onClick, type, disabled}) {
  const styles = {

  }

  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
