import PropTypes from 'prop-types'

export function Testimonio(props) {
  return (
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            Testimonio
          </strong>
          <h2 className="mb-0">
            {props.nombre} {props.apellido}
          </h2>
          <h3 className="mb-1 text-body-secondary">
            Empresa:
            <strong> {props.empresa}</strong>
          </h3>
          <h4 className="mb-1 text-body-secondary">Cargo: {props.cargo}</h4>
          <p className="card-text mb-auto">{props.testimonio}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            className="bd-placeholder-img"
            src={props.img}
            alt="foro de perfil"
          />
        </div>
      </div>
    </div>
  )
}

// Validación de PropTypes
Testimonio.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
