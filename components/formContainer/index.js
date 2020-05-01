import css from './style.css'

const FormContainer = ({title, children, backgroundColor}) => (
    <div className={css.formContainer} style={{ backgroundColor }}>
        <h1>{title}</h1>
        {children}
    </div>
  )

export default FormContainer;
