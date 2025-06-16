function FormDenuncia() {
  return (
    <section id="form">
      <h2>Formulário de Denúncia</h2>
      <form>
        <textarea placeholder="Descreva o que aconteceu..." rows="6"></textarea>
        <br />
        <button type="submit">Enviar denúncia</button>
      </form>
    </section>
  )
}

export default FormDenuncia
