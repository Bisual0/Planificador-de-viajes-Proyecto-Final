import { Link } from "react-router-dom";

const estiloTitulo = {
	fontFamily: "Fraunces, Georgia, serif",
	fontWeight: 600,
	color: "#12343B",
};

export const Dev = () => (
	<main className="min-vh-100 py-5" style={{ backgroundColor: "#EAF7FA", color: "#12343B" }}>
		<div className="container">
			<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
				<div>
					<p className="text-uppercase fw-semibold mb-2" style={{ color: "#078A9A", letterSpacing: "0.16em", fontSize: "0.78rem" }}>Área de pruebas</p>
					<h1 className="display-4 mb-2" style={estiloTitulo}>Design Lab</h1>
					<p className="lead mb-0" style={{ color: "#456B75", maxWidth: "620px" }}>Propuesta seleccionada para la sección de beneficios clave.</p>
				</div>
				<Link to="/" className="btn px-4 py-2" style={{ backgroundColor: "#12343B", color: "#EAF7FA", borderColor: "#12343B", borderRadius: 0 }}>Volver al Home</Link>
			</div>

			{/* Beneficios Clave — Variación 3: Banner Contraste Oscuro */}
			<section className="p-4 p-md-5 mb-4" style={{ backgroundColor: "#FFFFFF", border: "1px solid #B8DCE3" }}>
				<p className="text-uppercase fw-semibold mb-2" style={{ color: "#078A9A", letterSpacing: "0.14em", fontSize: "0.75rem" }}>Variación 3 · Banner Contraste Oscuro</p>
				<h2 className="display-6 mb-5" style={estiloTitulo}>¿Por qué planificar con Viajero?</h2>
				<div className="row g-0">
					<div className="col-md-4 pe-md-4"><h3 className="h4 mb-2" style={estiloTitulo}>Todo centralizado</h3><p className="mb-0" style={{ color: "#456B75", lineHeight: 1.7 }}>Itinerarios y lugares en un solo sitio.</p></div>
					<div className="col-md-4 px-md-4 mt-4 mt-md-0 border-start" style={{ borderColor: "#B8DCE3" }}><h3 className="h4 mb-2" style={estiloTitulo}>A tu propio ritmo</h3><p className="mb-0" style={{ color: "#456B75", lineHeight: 1.7 }}>Rutas flexibles según tu estilo.</p></div>
					<div className="col-md-4 ps-md-4 mt-4 mt-md-0 border-start" style={{ borderColor: "#B8DCE3" }}><h3 className="h4 mb-2" style={estiloTitulo}>Siempre a mano</h3><p className="mb-0" style={{ color: "#456B75", lineHeight: 1.7 }}>Acceso desde cualquier dispositivo.</p></div>
				</div>
			</section>

			{/* Cómo Funciona — Diseño Original */}
			<section className="container py-5 py-lg-6" style={{ backgroundColor: "#FFFFFF" }}>
				<div className="row justify-content-center text-center">
					<div className="col-lg-8">
						<p className="text-uppercase fw-semibold mb-2" style={{ color: "#078A9A", letterSpacing: "0.14em", fontSize: "0.75rem" }}>En tres pasos</p>
						<h2 className="display-6 mb-5" style={estiloTitulo}>De la idea al itinerario</h2>
					</div>
				</div>
				<div className="row g-4 text-center">
					<div className="col-md-4">
						<span className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: "56px", height: "56px", backgroundColor: "#28C3D4", color: "#12343B", fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem" }}>1</span>
						<h3 className="h4" style={estiloTitulo}>Elige un destino</h3>
						<p style={{ color: "#456B75" }}>Encuentra una ciudad que quieras descubrir.</p>
					</div>
					<div className="col-md-4">
						<span className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: "56px", height: "56px", backgroundColor: "#28C3D4", color: "#12343B", fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem" }}>2</span>
						<h3 className="h4" style={estiloTitulo}>Organiza tus actividades</h3>
						<p style={{ color: "#456B75" }}>Construye un plan que se adapte a tu viaje.</p>
					</div>
					<div className="col-md-4">
						<span className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: "56px", height: "56px", backgroundColor: "#28C3D4", color: "#12343B", fontFamily: "Fraunces, Georgia, serif", fontSize: "1.5rem" }}>3</span>
						<h3 className="h4" style={estiloTitulo}>Disfruta tu viaje</h3>
						<p style={{ color: "#456B75" }}>Ten toda tu aventura organizada en un solo lugar.</p>
					</div>
				</div>
			</section>
		</div>
	</main>
);