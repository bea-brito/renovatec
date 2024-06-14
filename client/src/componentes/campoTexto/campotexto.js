const CampoTexto = (props) => {
  return (
    <input value={props.valor} required={props.obrigatorio} placeholder={props.placeholder}/>
  )
}

export default CampoTexto