function Button({children, onClick, type}) {
  const styles = {

  }

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
