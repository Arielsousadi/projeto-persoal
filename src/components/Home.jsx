function Home() {
  return (
    <section>
      <h1>Você não está sozinha.</h1>
      <p>Denuncie abusos de forma segura e anônima.</p>
      <button onClick={() => window.location.href = "#form"}>Fazer Denúncia</button>
    </section>
  )
}

export default Home
