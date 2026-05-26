function DataPeserta({ name, email, alamat }) {
  return (
    <div className="card">
      <h2 className="card-title">Nama Saya Adalah {name}</h2>
      <hr className="card-divider" />
      <p className="card-email">{email}</p>
      <p className="card-alamat">Beralamat di {alamat}</p>
    </div>
  );
}

export default DataPeserta;
